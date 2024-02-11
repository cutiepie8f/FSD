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
  //part a

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
                   
                 
              }
              
              
             
              const objectarr = this.ratingData.filter((obj,index)=>
              {
                return index ===this.ratingData.findIndex(o=>obj.restaurant===o.restaurant);
              });

              var a = [];
              objectarr.map((c)=>{
                    var res = {
                             'restraunt':c.restaurant,
                             'averageRating':c.average_Rating
                    }
                    a.push(res);
              });

  //b
  var arr = a.filter(item=>item.averageRating>=4)


  function firstOperation()
 {
    console.log(a);
    document.getElementById("result-1").innerHTML = "Please see the result on the console.....!";
 }

 function secondOperation()
 {
  console.log(arr);
  document.getElementById("result-2").innerHTML = "Please see the result on the console.....!";
 }


