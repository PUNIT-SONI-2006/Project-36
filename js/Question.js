class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option No...");
   

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
this.question = createElement('h3')
this.ans1 = createElement('h4')
this.ans2 = createElement('h4')
this.ans3 = createElement('h4')
this.ans4 = createElement('h4')


    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.message.hide();
    //Add hide() for questions, options & input box
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.question.html("Question:- What tarts and ens with the letter 'E', but has only one letter?")
    this.question.position(100,70)

//  FOR OPTIONS
this.ans1.html("1)Everyone");
this.ans2.html("2)Envelope");
this.ans3.html("3)Estimate");
this.ans4.html("4)Example");
this.ans1.position(100,110);
this.ans2.position(100,130)
this.ans3.position(100,150)
this.ans4.position(100,170)



    this.input1.position(150, 230);
    this.input2.position(350,230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(200,350)
    })


  }
}
