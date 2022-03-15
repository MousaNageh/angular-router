import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectHomeService {
  public subjectEmiiter = new EventEmitter<boolean>()
  public subjectEventEmitter = new Subject<boolean>()
  constructor() { 
  }
}
