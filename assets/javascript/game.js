

  $("#startButton").on("click", function() {
  

                                                                 
    var targetNumber = Math.floor(Math.random()*61) + 28;      //generates random number between 28 -89                                         
 
    var counter = 0;  

    var win = 0;

    var loss = 0;  
    

    function randomNumber(seed, selectNumber) {
            return Math.floor(Math.random()*seed) + selectNumber; 
    }

      var numberOne = randomNumber(3,1);             

      var numberTwo = randomNumber(7,4);         

      var numberThree = randomNumber(10,2);

      var numberFour = randomNumber(12,3);        

      var numberOptions = [numberOne,numberTwo,numberThree,numberFour];

      $("#number-to-guess").text(targetNumber);  //two values, writes to the id number to guess at the top an uses the same number to calculate
        
        $("#crystals").empty();  // dumps images to start over

        for (var i = 0; i < numberOptions.length; i++) 
            {

          var imageCrystal = $("<img>");                //create an image var
 
              imageCrystal.addClass("crystal-image");   //CSS the image
              
              if (i === 0) {                            //pulls different images
                imageCrystal.attr("src", "assets/images/crystalblue.jpg");
              } else if (i === 1) {
                imageCrystal.attr("src", "assets/images/redcrystal.jpg");
              } else if (i === 2) {
                imageCrystal.attr("src", "assets/images/whitecrystal.jpg");
              } else if (i === 3) {
                imageCrystal.attr("src", "assets/images/greencrystal.jpg");
              }
    
              imageCrystal.attr("data-crystalvalue", numberOptions[i]);  // gives each image a value from the 

              $("#crystals").append(imageCrystal);                      // each crystal image gets added to the view
    
            }  // closes the for loop for crystal image placement click

         
          $(".crystal-image").on("click", function()            // onclick function for each crystal
          
          {

              var crystalValue = ($(this).attr("data-crystalvalue"));  // new varable of crystal value

                crystalValue = parseInt(crystalValue);       // changes the crystalValue to an numeric value if it is in a string
                counter += crystalValue;
                $("#counter").html(counter);  // displays the total amount adding up to the magic number


                if (counter <= targetNumber)  // if the counter is less than the magic number, start the loop of display
                    {
                      var amountLeft = (targetNumber - counter); 

                          if(amountLeft >= 0); {
                                  
                          $("#amountLeft").html(amountLeft);}
                    }  // closes the display showing the amount left or countdown

                if (counter === targetNumber) // once the counter is the same as the magic number, the user wins
                  {
                    win++;
                    $("#win").html(win);
                    counter = 0;
                    alert(counter);
                    amountLeft = 0;
                    alert(amountLeft);
                    $("#amountLeft").html(amountLeft);
                  }  // closes the if statment for win

                else if (counter >= targetNumber) 
                  {
                    loss++;
                    $("#loss").html(loss);
                    counter = 0;
                    alert(counter);
                    amountLeft = 0;
                    alert(amountLeft);
                    $("#amountLeft").html(amountLeft);
                  }  // closes the loss loop

  });
});

