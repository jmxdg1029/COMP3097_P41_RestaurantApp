import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../shared/restaurant.service';
import { Restaurant } from '../model/restaurant';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit, ViewWillEnter {

  restaurants: Restaurant[] = []

  constructor(private database: RestaurantService, private router: Router) { 
  }

  async ngOnInit() {
    // TODO: Fix This, gets called too many times, not efficient
    await this.database.init()
  }

  async ionViewWillEnter() {
    const restaurants = await this.database.getRestaurants()
    this.restaurants = restaurants
  }

}
