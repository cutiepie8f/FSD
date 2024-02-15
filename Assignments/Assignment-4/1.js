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

  //a
            ratingData.forEach(element => {
              var sum = 0;
              var count = 0;
                    var a =  ratingData.filter(a=>a.restaurant==element.restaurant);
                    a.forEach(element => {
                       sum += element.rating;
                    });
                    var avgRating = sum/(a.length);
                    element.average_Rating = avgRating;
                   
             
            });
        
            const objectarr = this.ratingData.filter((obj,index)=>
            {
              return index ===this.ratingData.findIndex(o=>obj.restaurant===o.restaurant);
            });
        
            var arr = [];
            objectarr.map((c)=>{
                  var res = {
                           'restraunt':c.restaurant,
                           'averageRating':c.average_Rating
                  }
                  arr.push(res);
            });

  //b
  var c = arr.filter(z=>z.averageRating>=4);
            

  function firstOperation()
  { 
    console.log(arr);
    document.getElementById("result-1").innerHTML = "Please see the result on the console.....!";
  }

  function secondOperation()
  { 
    console.log(c);
    document.getElementById("result-2").innerHTML = "Please see the result on the console.....!";
  }
          
        
          
            