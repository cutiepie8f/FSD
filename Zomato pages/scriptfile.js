


function overview()
{
    document.getElementById("text-1").innerHTML = "Cuisine";
    document.getElementById("text-2").innerHTML = "Bakery, Fast-food";
    document.getElementById("text-2").style.color = '#192F60';
    document.getElementById("text-3").innerHTML = "Average Cost";
    document.getElementById("text-4").innerHTML = "₹700 for two people (approx.)";
   
    
   
  
}

function contact()
{
  
    document.getElementById("text-1").innerHTML = "Phone Number";
    document.getElementById("text-2").innerHTML = "+91 114004566";
    document.getElementById("text-2").style.color = '#F67082';
    document.getElementById("text-3").innerHTML = "The Big Chill Cakery";
    document.getElementById("text-4").innerHTML = "Shop 1, Plot D, Samruddhi Complex, Chincholi, Mumbai-400002, Maharashtra";
   
  
}

//Home page autocomplete search dropdown

$(function() {
    var availableTutorials  =  [
      "Sarjapur Road",
      "Bengaluru HSR Layout",
      "Bengaluru Kormangala",
      "Bengaluru Jay Nagar",
      "Bengaluru"
    ];
    $( "#automplete-1" ).autocomplete({
       source: availableTutorials
    });
 });

 