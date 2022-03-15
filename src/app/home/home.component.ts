import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { map,filter } from 'rxjs/operators';
import { SubjectHomeService } from './subject-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private subscription!:Subscription ;
  constructor(private router: Router,private subject:SubjectHomeService) {}
  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(count=>{
      console.log(count);
      if (count ==10)
        this.subscription.unsubscribe();
    })
    const customAbserable =new Observable((observer)=>{
      let count = 0 ;
      let clearIn=setInterval(
        ()=>{
          observer.next(count);
          count++ ;
          if (count > 10){
            observer.error(new Error("count is greated than 10"))
            observer.complete()
            clearInterval(clearIn);
          } 
        }
        ,1000)
    })
    customAbserable
    .pipe(
        filter((counter:any)=>counter%2==0) 
        ,
        map(counter=>{
        console.log(counter)
        return `${counter} changed by pipe and map1` ; })
        ,
        map(counter=>{
          return `${counter} , map2` ; 
        })
      )
    .subscribe(counter=>{
      console.log(counter);
    },err=>{
      // alert(err.message)
    },()=>{
      console.log("observable is complate")
    })
  }
  goAbout() {
    this.router.navigate(['/about']);
  }
  setSubject(){
    this.subject.subjectEmiiter.emit(true);
    this.subject.subjectEventEmitter.next(false);
    
  }
}
