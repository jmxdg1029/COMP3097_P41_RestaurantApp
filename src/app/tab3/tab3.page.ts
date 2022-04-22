import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../shared/restaurant.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  restaurants: Restaurant[];
  searchRest: Restaurant[];
  search: string = "";

  constructor(private db: RestaurantService) {}

  async ngOnInit(){
    this.db.init()
  }

  async ionViewWillEnter(){
    await this.loadRest()
  }

  async loadRest(){
    const restaurants = await this.db.getRestaurants()
    this.restaurants = restaurants
    this.searchRest = restaurants
  }

  searchRests(){
    if(this.search){
        this.searchRest = this.restaurants.filter(e => e.name.toLowerCase().includes(this.search.toLowerCase()) || 
        e.tags.toLowerCase().includes(this.search.toLowerCase()))
    }else {
      this.searchRest = this.restaurants;
    }
  }
}
