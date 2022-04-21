import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Restaurant } from 'src/app/model/restaurant';
import {RestaurantService} from '../../shared/restaurant.service'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-rest',
  templateUrl: './add-rest.page.html',
  styleUrls: ['./add-rest.page.scss'],
})
export class AddRestPage implements OnInit {

  restForm: FormGroup;
  
  constructor(private db: RestaurantService, public formBuilder: FormBuilder, private navController: NavController) { }

  async ngOnInit() {
    this.restForm = this.formBuilder.group({
      name:['', Validators.required],
      address:['', Validators.required],
      phone:['', Validators.required],
      description:['', Validators.required],
      tags:['', Validators.required]

    })
    await this.db.init()
  }

  goBack(){
    this.navController.back()
  }

  onSubmit(){
    this.db.addRestaurant({
      name:this.restForm.value.name,
      address:this.restForm.value.address,
      phoneNum: this.restForm.value.phone,
      description: this.restForm.value.description,
      tags:this.restForm.value.tags
    } as Restaurant)
    this.goBack()
  }

}
