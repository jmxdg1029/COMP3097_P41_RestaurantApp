import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  restaurant: Restaurant;
  restaurantForm: FormGroup;

  constructor(private db: RestaurantService, private router: Router, private formBuilder: FormBuilder, private actRoute: ActivatedRoute) { 
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

  getControlLabel(type:string){
    return this.restaurantForm.controls[type].value
  }

  async ngOnInit() {
    await this.db.init()
  }

}
