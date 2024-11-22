 
 
 // Get the output div to display messages
 let outputDiv = document.getElementById("output");

 // Loop from 0 to 10
 for (let i = 0; i <= 10; i++) {
     // Check if the number is odd or even
     if (i % 2 === 0) {
         outputDiv.innerHTML += `<p>${i} is even.</p>`;
     } else {
         outputDiv.innerHTML += `<p>${i} is odd.</p>`;
     }
 }


  
    
   // Prompt the user for a number between 5 and 20
   let myNum;
   do {
       myNum = parseInt(prompt("Enter a number between 5 and 20:"));
   } while (isNaN(myNum) || myNum < 5 || myNum > 20);

   // Initialize the loop counter
   let counter = 1;

   // Do-while loop
   do {
       outputDiv.innerHTML += `<p>Counter: ${counter}</p>`;
       counter++;
   } while (counter <= myNum);






  


// Store the subjects in an array
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Display the array in a readable format using forEach()
subjects.forEach((subject, index) => {
    console.log(`${index + 1}. ${subject}.join(", ")`);
});