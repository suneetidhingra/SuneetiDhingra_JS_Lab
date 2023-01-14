// Questions will be asked
const Questions = [
    {
      id: 0,
      q: "What is capital of India?",
      a: [
          { text: "Gandhinagar", isCorrect: false },
         { text: "Surat", isCorrect: false },
         { text: "Delhi", isCorrect: true },
         { text: "mumbai", isCorrect: false }
      ]
   },
   {
      id: 1,
      q: "What is the capital of Thailand?",
      a: [{ text: "Lampang", isCorrect: false, isSelected: false },
         { text: "phuket", isCorrect: false },
         { text: "Ayutthaya", isCorrect: false },
         { text: "Bangkok", isCorrect: true }
      ]
   },
   {
      id: 2,
      q: "What is the capital of Gujarat",
      a: [{ text: "surat", isCorrect: false },
         { text: "vadodara", isCorrect: false },
         { text: "gandhinagar", isCorrect: true },
         { text: "rajkot", isCorrect: false }
      ]
   }
]

// Set start
//var start = true;
var totalMarks = 0;
var numQuestions = Questions.length;
var numCorrect = 0;
var currentMarks = 0

function checkAnswer(answer) {

    console.log(answer)
    if (answer == "true") {
        currentMarks = 1;
    } else {
        currentMarks = 0;
    }
}

// Iterate
function iterate(id) {

   // Getting the question
   const question = document.getElementById("question");

   // Setting the question text
   question.innerText = Questions[id].q;

   // Getting the options
   const op1 = document.getElementById('op1');
   const op2 = document.getElementById('op2');
   const op3 = document.getElementById('op3');
   const op4 = document.getElementById('op4');


   // Providing option text
   op1.innerText = Questions[id].a[0].text;
   op2.innerText = Questions[id].a[1].text;
   op3.innerText = Questions[id].a[2].text;
   op4.innerText = Questions[id].a[3].text;

   // Providing the true or false value to the options
   op1.value = Questions[id].a[0].isCorrect;
   op2.value = Questions[id].a[1].isCorrect;
   op3.value = Questions[id].a[2].isCorrect;
   op4.value = Questions[id].a[3].isCorrect;

   var selected = "";

   // Show selection for op1
   op1.addEventListener("click", () => {
      op1.style.backgroundColor = "orange";
      op2.style.backgroundColor = "lightskyblue";
      op3.style.backgroundColor = "lightskyblue";
      op4.style.backgroundColor = "lightskyblue";
      checkAnswer(op1.value);
   })

   // Show selection for op2
   op2.addEventListener("click", () => {
      op1.style.backgroundColor = "lightskyblue";
      op2.style.backgroundColor = "orange";
      op3.style.backgroundColor = "lightskyblue";
      op4.style.backgroundColor = "lightskyblue";
      checkAnswer(op2.value);
   })

   // Show selection for op3
   op3.addEventListener("click", () => {
      op1.style.backgroundColor = "lightskyblue";
      op2.style.backgroundColor = "lightskyblue";
      op3.style.backgroundColor = "orange";
      op4.style.backgroundColor = "lightskyblue";
      checkAnswer(op3.value);
   })

   // Show selection for op4
   op4.addEventListener("click", () => {
      op1.style.backgroundColor = "lightskyblue";
      op2.style.backgroundColor = "lightskyblue";
      op3.style.backgroundColor = "lightskyblue";
      op4.style.backgroundColor = "orange";
      checkAnswer(op4.value);
   })
}


// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {

    if (id >= numQuestions) {
        alert("You have completed the quiz");
        return;
    }
    console.log(id);
    console.log(currentMarks);
    totalMarks += currentMarks;
    console.log(totalMarks)
    if (currentMarks == 1) {
        numCorrect++;
        currentMarks = 0;
    }
    console.log(numCorrect)
    if (id == numQuestions - 2) {
        next.innerText = "Finish";
    }
    if (id < numQuestions - 1) {
        id++;
        iterate(id);
        return;
    }

   // display the result
   const result = document.getElementById("result");
   var percentage = (numCorrect / numQuestions * 100).toPrecision(2);
   result.innerHTML = "You have scored " + totalMarks + " out of " + numQuestions + " and " + percentage + " % correct answers";
})

iterate("0");