$(function() {
    var availableTutorials  =  [
       "Sarjapur Road",
       "Bengaluru HSR Layout",
       "Bengaluru Kormangala",
       "Bengaluru Jay Nagar",
       "Bengaluru"
    ];
    $( "#autocmplete-1" ).autocomplete({
       source: availableTutorials
    });
 });


 function openDropdown(){
   $('#dropdown-text').click()
      
 }
 

