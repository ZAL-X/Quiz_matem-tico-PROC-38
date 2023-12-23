class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Escribe tu nombre aquí...");
    this.input2 = createInput("Escribe el número de opción correcto...");
    this.button = createButton('Enviar');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Juego MiQuiz 2");
    this.title.position(350, 0);

    this.question.html("Cual de estas operaciones da 4?" );
    this.question.position(150, 80);
    this.option1.html("1: 2+2" );
    this.option1.position(150, 120);
    this.option2.html("2: 2x2" );
    this.option2.position(150, 140);
    this.option3.html("3: 1+1+1+1" );
    this.option3.position(150, 160);
    this.option4.html("4: 5-1" );
    this.option4.position(150, 180);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      //contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}