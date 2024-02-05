class OrderDetails{
    
    orderData =[ {id:1,order:'Below 500',Totalorder: 20,restaurant: "Punjabi Tadka"},
                 {id:2,order:'500-1000',Totalorder: 29,restaurant: "Punjabi Tadka"},
                 {id:3,order:'1000-1500',Totalorder: 30,restaurant: "Punjabi Tadka"},
                 {id:4,order:'1500-2000',Totalorder: 44,restaurant: "Punjabi Tadka"},
                 {id:5,order:'Above 2000',Totalorder: 76,restaurant: "Punjabi Tadka"}
  ];
            
  totalOrderPlaced()
  {
   var sum = 0;
    this.orderData.forEach(element => {
        sum += element.Totalorder;
    });
    return sum;
  }

  totalOrderProprtion =()=>
  { 
//     var count = 0;
//    this.orderData.forEach(element => {
//       count++;
  // });
  var arr = this.orderData.map(a=>a.Totalorder);
 // console.log(arr);
  return arr.length;
  // return count;
      
  }

  proportionPercentage(total)
  {
  for(var i=0;i<this.orderData.length;i++)
    {
        this.orderData[i].order_percentage = ((this.orderData[i].Totalorder*100)/total).toFixed(2);
       delete this.orderData[i].Totalorder;
      
    }
    return this.orderData;
  }
}

var OrderDetailsObject = new OrderDetails();

function firstOperation()
{
   
    var output1 = OrderDetailsObject.totalOrderPlaced();
    document.getElementById("result-text").innerHTML = "Total number of orders placed = ";
    document.getElementById("result1").innerHTML =  output1;
}
function secondOperation()
{
   
    var output2 = OrderDetailsObject.totalOrderProprtion();
     document.getElementById("result-text2").innerHTML = "Total number of order proportions = ";
     document.getElementById("result2").innerHTML =  output2;
}

function thirdOperation()
{
     var total_order = OrderDetailsObject.totalOrderPlaced();
    var output3 = OrderDetailsObject.proportionPercentage(total_order);
     console.log(output3);
     document.getElementById("result-text3").innerHTML = "Please see the result on the console.....!";
    
}