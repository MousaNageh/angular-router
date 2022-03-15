import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../can-deactivate.guard';
import { SubjectHomeService } from '../home/subject-home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, CanComponentDeactivate {
  constructor(private route: ActivatedRoute,private subject:SubjectHomeService) {
    console.log(this.route.snapshot.data);
    this.route.data.subscribe((val) => {
      console.log(val);
      this.subject.subjectEmiiter.subscribe(val=>{
        console.log(val)
      });
      this.subject.subjectEventEmitter.subscribe(val=>{
        console.log(val);
      })
    });
    
  }

  ngOnInit(): void {}
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    //add logic
    return true;
  }
}
