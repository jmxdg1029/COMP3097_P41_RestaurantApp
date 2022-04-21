import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import restaurants from '../storage/restaurants';


@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  private _storage: Storage | null = null;

  constructor(public storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //Add restaurant
  async addRestaurant(restaurant: Restaurant) {

    let restaurantStore = await this.getRestaurants();

    restaurant = {id: restaurantStore[restaurantStore.length - 1].id + 1,
    ...restaurant}

    restaurantStore.push(restaurant);

    await this._storage?.set('restaurants', JSON.stringify(restaurantStore));
  }

  //Delete restaurant
  async deleteRestaurant(id: number) {
    
    let restaurantStore = await this.getRestaurants();
    
    restaurantStore.splice(restaurantStore.findIndex(r => r.id === id), 1);

    await this._storage?.set('restaurants', JSON.stringify(restaurantStore));

  }


  //This gets all the restaurants 
  async getRestaurants() {
    let restaurantStore = await this._storage?.get('restaurants');

    if (!restaurantStore) {
      await this._storage?.set('restaurants', JSON.stringify(restaurants))
      return restaurants
    }

    return JSON.parse(restaurantStore)
  }

  //This gets restaurant ID
  async getRestaurantID(id: number) {

    const restaurants = await this.getRestaurants();

    return restaurants.find(r => r.id == id)

  }

  //Edits the restaurant
  async editRestaurant(restaurant: Restaurant) {

    let restaurantStore = await this.getRestaurants();

    restaurantStore[restaurantStore.findIndex(r => r.id === restaurant.id)] = restaurant;

    await this._storage?.set('restaurants', JSON.stringify(restaurantStore))

  }

}
