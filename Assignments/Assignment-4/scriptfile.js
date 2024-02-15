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

 var mappingData = ratingData.map(({restaurant}) => restaurant);  // Find all the restarunt names from the Array.
 //console.log(mappingData);
 var uniqueData = new Set(mappingData);      // Storing unique restraunt names data into an object
 //console.log(uniqueData);
 var uniqueRestrauntList = Array.from(uniqueData);  // List of unique restraunt names in an array
 
 var output = [];
 uniqueRestrauntList.map(restName => {
  var  filteredData = ratingData.filter(a => a.restaurant==restName);  // Filtered the restraunt on the basis of unique name in the list
  var averageData = filteredData.reduce((b,c)  => b+c.rating,0)/filteredData.length;;

  var resultData = {
    restaurant: restName,
    averageRating: averageData

  }
  output.push(resultData);  // Pushes the data into the Array.
 })

 // part b

 var result = output.filter(d => d.averageRating>=4);

 function firstOperation()
 {
  console.log(output);
  document.getElementById("result-1").innerHTML = "Please see the result on the console.....!";
 }

 function secondOperation()
 {
  console.log(result);
  document.getElementById("result-2").innerHTML = "Please see the result on the console.....!";
 }