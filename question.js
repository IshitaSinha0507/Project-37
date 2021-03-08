class Question{
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("Name")
        this.answer = createInput("Your Answer")
        this.button = createButton("Submit")
        this.greeting = createElement("h2")
        this.question = createElement("h3")
        this.opition1 = createElement("h4")
        this.opition2 = createElement("h5")
        this.opition3 = createElement("h6")
        this.opition4 = createElement("h7")
        this.correct = createElement("h8")

    }

    display(){
        
        this.title.html("MyQuiz Game")
        this.title.position(360,40)

        this.input.position(360,340)
        this.answer.position(500,340)
        this.button.position(360,360)

        this.question.html("Question:- I can fly but have no wings.I can cry but have no eyes. Wherever I go darkness follows me. What am I ?")
        this.question.position(30,120)

        this.opition1.html("1: River")
        this.opition2.html("2: Clouds")
        this.opition3.html("3: Watermelon")
        this.opition4.html("4: Sky")

        this.opition1.position(100,160)
        this.opition2.position(100,190)
        this.opition3.position(100,210)
        this.opition4.position(100,260)
        

        this.button.mousePressed(() =>{
            //this.input.hide()
           contestant.name = this.input.value();
            contestant.answer = this.answer.value();
            this.greeting.html("Hello "+contestant.name+" your answer is...")
            this.greeting.position(360,200)

            if(contestant.answer =="2"){
                fill ("green")
                this.correct.html("CORRECT")
                this.correct.position(360,260)
    
            }
            else{
                fill ("red")
                this.correct.html("WRONG")
                this.correct.position(360,260)
            }
        })

        if(contestant.name !=undefined){
            console.log("answer")
        }
        
    }
    
}