class RestaurantManager {
     restaurantList = [
                      {
                        id : 1,
                        name : "Dominos",
                        address : "MG Road",
                        city : "Kolkata"
                    },
                    {
                        id : 2,
                        name : "Pizza Hut",
                        address : "MG Electronic city",
                        city : "Banglore"
                    },
                    {
                        id : 3,
                        name : "Subway",
                        address : "Lajpat Nagar",
                        city : "Delhi"
                    },
                    {
                        id : 4,
                        name : "MacD",
                        address : "T Nagar",
                        city : "Chennai"
                    },
                    {
                        id : 5,
                        name : "MacD",
                        address : "Lajpat Nagar",
                        city : "Delhi"
                    }];

            printRestrauntList = () =>
            {
                console.log(this.restaurantList);
                return this.restaurantList;
            }
            printAllRestrauntName()
            {
                return this.restaurantList.map(a =>a.name);
            }

            filterRestaurantByCity(city)
            {
                return this.restaurantList.filter(b =>b.city == city );
            }

}
var restrauntObject = new RestaurantManager();

function firstOperation(){
    var output1 = restrauntObject.printRestrauntList();
    console.log(output1);
    document.getElementById("result1").innerHTML = "Please see the result on the console.....!"
}
function secondOperation(){
    var output2 = restrauntObject.printAllRestrauntName();
    console.log(output2);
    document.getElementById("result2").innerHTML = output2;
}
function thirdOperation(){
        cityname = document.getElementById("city").value;
        var output3 = restrauntObject.filterRestaurantByCity(cityname);
        console.log(output3);
}