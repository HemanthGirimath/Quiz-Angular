import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public points:number= 10;
  public remaininQuestion:number = 1;
  public questions:any =[];
  public CorrectAnswers:number =0;
  public currentQuestion:number=0;
  quizCompleted:Boolean=false;
  constructor(private service:ServicesService, private router:Router) { }

  getAllQuestions(){
    this.service.getQuestions().subscribe(res=>{this.questions = res.questions})
  }

  eventEmmiter(){
    if(this.currentQuestion === 8){
      this.currentQuestion = 0;
    }else{
      this.currentQuestion++;
    }
  }

  answer(questionNO:number, option:any){
    if(questionNO === this.questions.length){
      this.quizCompleted = true;
    }
    if(option.correct){
      this.points+=10;
      this.CorrectAnswers++
      setTimeout(() => {
      this.eventEmmiter();
      }, 1000);
    }
    else{
      this.points-=10
      setTimeout(() => {
      this.eventEmmiter();
      }, 1000);

      }
  }

  ngOnInit() {
    this.getAllQuestions();
  }

}
