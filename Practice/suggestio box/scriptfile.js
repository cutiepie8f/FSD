
         $(function() {
            var availableTutorials  =  [
               "Dosa",
               "Donuts",
               "Masala Dosa",
               "Veg Dosa",
               "Mysore Masala Dosa",
               "Plain Dosa",
               "Piza",
               "Roll",
               "Biryani",
                "Burger",
                "Tea",
                "Chineese",
                "Cake",
                "Desert"
            ];
            $( "#automplete-1" ).autocomplete({
               source: availableTutorials
            });
         });
    