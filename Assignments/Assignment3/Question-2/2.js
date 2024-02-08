orderData = {  
    'Below 500': 20,  
    '500-1000': 29,  
    '1000-1500': 30,  
    '1500-2000': 44,  
    'Above 2000': 76  
    }; 
    

     // part-a       
    var a = Object.values(orderData);
    var sum = a.reduce((a,b) => a+b);

    //part-b
    var b = Object.keys(orderData);
    var count = b.length;


function firstOperation()
{
    document.getElementById("result-text").innerHTML = "Total number of orders placed = ";
    document.getElementById("result1").innerHTML =  sum;
}
function secondOperation()
{
     document.getElementById("result-text2").innerHTML = "Total number of order proportions = ";
     document.getElementById("result2").innerHTML =  count;
}

function thirdOperation()
{
   var arr = []
    b.map((items, index)=>{
      var result = {
                   'id':index+1,
                   'order':items,
                   'order percentage':((orderData[items]/sum)*100).toFixed(2),
                  'restaurant': 'Punjabi Tadka' 
      }
       arr.push(result);
    })
    console.log(arr);
     document.getElementById("result-text3").innerHTML = "Please see the result on the console.....!";
    
}