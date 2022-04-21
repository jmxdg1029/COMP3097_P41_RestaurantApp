import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'app-edit-rest',
  templateUrl: './edit-rest.page.html',
  styleUrls: ['./edit-rest.page.scss'],
})
export class EditRestPage implements OnInit {
  restaurant: Restaurant;
  restaurantForm: FormGroup;

  constructor(private db: RestaurantService, private navController: NavController, private router: Router, private formBuilder: FormBuilder, private actRoute: ActivatedRoute) { 
    db.getRestaurantID(actRoute.snapshot.params.id).then(resaurant => {
      this.restaurant = resaurant
      this.restaurantForm = this.formBuilder.group({
        name:[this.restaurant.name],
        address:[this.restaurant.address],
        description:[this.restaurant.description],
        phoneNum:[this.restaurant.phoneNum],
        tags:[this.restaurant.tags],
        rating:[this.restaurant.rating]
      })
    })
  }

  prevPage(){
    this.navController.back();
  }

  
  async ngOnInit() {
    await this.db.init()
  }

  onSubmit(){
    this.db.editRestaurant({
      id:this.restaurant.id,
      name:this.restaurantForm.value.name,
      address:this.restaurantForm.value.address,
      description:this.restaurantForm.value.description,
      phoneNum:this.restaurantForm.value.phoneNum,
      tags:this.restaurantForm.value.tags,
      rating:this.restaurantForm.value.rating
    } as Restaurant)
    this.prevPage()
  }

}
