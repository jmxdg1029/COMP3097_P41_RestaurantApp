import { Restaurant } from "../model/restaurant";

let restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Gyubee",
      address: "335 Bloor St W",
      phoneNum: "4165519767",
      description: "Best Japanese BBQ place",
      tags: "Asian",
      rating: 5
    }, 

    {
        id: 2,
        name: "The Burger's Priest",
        address: "3280 Dufferin St",
        phoneNum: "6473527070",
        description: "They make some pretty good burgers",
        tags: "American",
        rating: 4
      }
]

export default restaurants;