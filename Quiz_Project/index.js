const questions=[
    {
        question:"Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false}
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text:"Vatican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Shri Lanka",correct:false}
        ]
    },
    {
        question:"Which is largest desert in the world?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true}
        ]
    },
    {
        question:"Which is smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false}
        ]
    }
]

// console.log(questions);
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttions");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex +1;
    questionElement.innerHTML=questionNo + ". "+currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        /**
         * dataset:- 
         * These attributes can be used to store information that you want to associate with a particular HTML element.
         *  The data stored in these attributes can then be accessed and manipulated using JavaScript. */
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        
    })
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}

function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect=selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }

    /**
     * answerButton.children = return html collection of child of answerButton . 
     * and we all know that we can not iterate on html collection directly first we have to convert in array then we can able to iterate...
     * if we use this method/property  Array.from()  then we can convert html collection into array then we can iterate on them through using foreach loop
     * for further help you can also switch or see the program-image section folder.....
     */
    Array.from(answerButton.children).forEach((button)=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }

        /**
         * disable pseudo class:-
         *  the :disabled pseudo-class is used to style the disabled button. When a form element, such as an input field or a button, is disabled, it is non-interactive, and the user cannot interact with or modify its value. The :disabled pseudo-class allows you to apply specific styles to these disabled elements.
         * 
         * The :disabled pseudo-class is used to select and style form elements that are disabled.
         */
        button.disabled = true;

    });
    nextButton.style.display="block";
    
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You score ${score} out of ${questions.length}!!`;
    nextButton.innerHTML='play Again';
    nextButton.style.display="block";

}

showQuestion()