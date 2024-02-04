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
              for(var i=0;i<this.ratingData.length;i++)
              {
                var sum=0,count=0;
                for(var j=0;j<this.ratingData.length;j++)
                {
                  if(this.ratingData[i].restaurant==this.ratingData[j].restaurant)
                  {
                    count++;
                     sum += this.ratingData[j].rating; 
                  }
                }
                
                  var avg = sum/count;
                
                  this.ratingData[i].average_Rating = avg;
                   //delete this.ratingData[i].rating;
                   
                 
              }
              
              
             
              const objectarr = this.ratingData.filter((obj,index)=>
              {
                return index ===this.ratingData.findIndex(o=>obj.restaurant===o.restaurant);
              });
              
             
              
                
             return objectarr;
                   
            }

            avgRating(a)
            {
             
              return a.filter(b=>b.average_Rating>=4);
            }
                
              
            
}
var ratingDataObject = new Customer();
      
function firstOperation()
{
   var output1 = ratingDataObject.averageRating();
   console.log(output1);
   document.getElementById("result-1").innerHTML = "Please see the result on the console";
   
}

function secondOperation()
{
  var output2 = ratingDataObject.avgRating(ratingDataObject.averageRating());
   console.log(output2);
   document.getElementById("result-2").innerHTML = "Please see the result on the console";
}
       


