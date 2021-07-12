// Data
const iceCreams = [
    { name: "vanilla", price: 10, awesomeness: 3 },
    { name: "chocolate", price: 4, awesomeness: 8 },
    { name: "banana", price: 1, awesomeness: 1 },
    { name: "green tea", price: 5, awesomeness: 7 },
    { name: "jawbreakers", price: 6, awesomeness: 2 },
    { name: "pistachio", price: 11, awesomeness: 15 }
  ];
  
  
  // You will be modifying this function
  function exampleFunction (name) {
    // given a string containing a name of an icecream
    // return the object in "iceCreams" that matches the name
    // console.log(iceCreams.filter(ice => ice.name === name))
    
    for (let i = 0; i < iceCreams.length; i++) {
      if (iceCreams[i].name === name) {
        // console.log(iceCreams[i])
        return iceCreams[i]
      }
    }
    
    // Example:
    // exampleFunction("chocolate");
    // would return:
    // { name: "chocolate", price: 4, awesomeness: 8 }
    
  };
  
  console.log(exampleFunction("banana"))
  
  // Instructions
  
  // 1. Modify this function so that it returns the object that correlates with the ice cream name provided
  
  // 2. store the result of the exampleFunction in a variable
  
  // 3. Print the variable to the console using console.log
  



//   <!-- Instructions are found in the CSS -->
//   <div class="container">
//     <div class="inner-container">
      
//     </div>
//   </div>

/*

Complete these 5 tasks: 

1. Writing HTML - Create a div with a class of "inner-container" inside of the "container" div. 

2. Writing CSS - Give the "inner-container" class a width of 400 pixels, a height of 300 pixels, and a background color of #e1e1e1. 

3. Writing CSS - Horizontilly center the "inner-container" div.

4. Writing jQuery - Add attributes to the "imgTag" variable and append to the page (DOM). See JS section for further instructions.

5. Writing CSS - Center the image horizontally.

*/

// body {
//     margin: 0;
//   }
  
//   .container {
//     width: 100%;
//     height: 400px;
//     background-color: magenta;
//     display: flex;
//     align-items: center;
//     align-content: center;
//     justify-content: center;
//   }
  
//   .inner-container {
//     width: 400px;
//     height: 300px;
//     background-color: #e1e1e1;
//     display: flex;
//     justify-content: center;
//     align-content: center;
//     align-items: center;
//   }
  
//   .logo {
//     width: 150px;
//     height: 40px;
//     display: flex;
//   }


// JQUERY 2.2

// /*------------- Img Tag from Scratch -----------------*/

// var containerDiv = $(".inner-container");

// //Below, an image tag <img> has been made from scratch.
// var imgTag = $("<img>");

// $(imgTag).attr("src", "https://www.lexingtonlaw.com/content/dam/lexington-law/assets/images/company-logo-blue.png")

// $('.inner-container').prepend(imgTag)

// $(imgTag).attr("class", "logo");

// // If you could see imgTag's html, it would look something like this:
// // <img></img>

// // Using javascript and/or jQuery, give imgTag the "src" attributes as shown here:
// // <img src="https://www.lexingtonlaw.com/content/dam/lexington-law/assets/images/company-logo-blue.png">

// // Next, append imgTag to the "containerDiv"




