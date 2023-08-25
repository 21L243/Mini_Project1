"use strict"
//Object Creation
let Questions=[{

        q: "1. Inside which HTML element do we put the JavaScript?",
        a: [{ text: "<scripting>", isCorrect: false },
        { text: "<js>", isCorrect: false },
        { text: "<script>", isCorrect: true },
        { text: "<javascript>", isCorrect: false }]
},
{
        q: "2. The external JavaScript file must contain the <script> tag?",
        a: [{ text: "false", isCorrect: true },
        { text: "true", isCorrect: false },
        ]
},   
{
    q: "3. Who created javascript",
    a: [{ text: "Brenden Eich", isCorrect: true },
    { text: "Charles", isCorrect: false },
    { text: "John", isCorrect: false },
    { text: "Mathew", isCorrect: false }]

}, {   
   q:"4. What is the First name given to Javascript?",
   a:[{text: "Mocha", isCorrect: true },
   { text: "Java", isCorrect: false },
   { text: "Script", isCorrect: false },
   { text: "Script Mocha ", isCorrect: false }]
},
  {   
    q:"5.In which year Javascript is created",
    a:[{text: "1996", isCorrect: false},
    { text: "1995", isCorrect: true },
    { text: "1994", isCorrect: false },
    { text: "1993", isCorrect: false
 }]

  },
]
let currQuestion=0;
let score=0;
//function
function loadQues() {
        const question = document.getElementById("ques")
        const opt = document.getElementById("opt")
     
        question.textContent = Questions[currQuestion].q;
        opt.innerHTML = ""
     
        for (let i = 0; i < Questions[currQuestion].a.length; i++) {
            const choicesdiv = document.createElement("div");
            const choice = document.createElement("input");
            const choiceLabel = document.createElement("label");
     
            choice.type = "radio";
            choice.name = "answer";
            choice.value = i;
     
            choiceLabel.textContent = Questions[currQuestion].a[i].text;
     
            choicesdiv.appendChild(choice);
            choicesdiv.appendChild(choiceLabel);
            opt.appendChild(choicesdiv);
        }
    }
    loadQues();
 //Displaying Score using Function
    function loadScore() {
        const totalScore = document.getElementById("score")
//Using Conditional operator for giving feedback according to their Score
        let a=(score>4)?true:false;
        if(a==1)
        {
                totalScore.textContent = `You scored ${score} out of ${Questions.length}`+  
                " , Excellent! You have scored above 80% ";   
        }
        let a1=(score>=3 && score<=4)?true:false;
        if(a1==1)
        {
                totalScore.textContent = `You scored ${score} out of ${Questions.length}`+  
                " , Good job! You have scored  between 80% and 50%";   
        }
        let a2=(score<3)?true:false;
        if(a2==1){
                totalScore.textContent = `You scored ${score} out of ${Questions.length}`+  
                " , Keep Practising! You have scored  below 50%";
        }
    }
     
     // function for moving to next Question 
    function nextQuestion() {
        if (currQuestion < Questions.length - 1) {
            currQuestion++;
            loadQues();
        } else {
            document.getElementById("opt").remove()
            document.getElementById("ques").remove()
            document.getElementById("btn").remove()
            loadScore();
        }
    }
     
    function checkAns() {
        const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
     
        if (Questions[currQuestion].a[selectedAns].isCorrect) {
            score++;
            console.log("Correct")
            nextQuestion();
        } else {
            nextQuestion();
        }
    }



