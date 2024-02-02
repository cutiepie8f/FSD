class Customer{
       
ratingData = [
              {restaurant: 'KFC', rating:5},
              {restaurant: 'Burger King', rating:4},
              {restaurant: 'KFC', rating:3},
              {restaurant: 'Domino', rating:2},
              {restaurant: 'Subway', rating:3},
              {restaurant: 'Domino', rating:1},
              {restaurant: 'Subway', rating:4},
              {restaurant: 'Pizza Hut', rating:5} 
            ] 

            averageRating()
            {
                this.ratingData.forEach(element => {
                   var res = this.element.map(a=>a.restaurant==element.restaurant);  
                   
                });
                
              return res;
            }
}
var ratingDataObject = new Customer();
      
function firstOperation()
{
    var output1 = ratingDataObject.averageRating();
    console.log(output1);
}
       


