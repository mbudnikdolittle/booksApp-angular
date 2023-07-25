import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  subject = new ReplaySubject<string | number>(3)
  subject1 = new BehaviorSubject<string | number>(1)
  subject2 = new Subject<string | number>()

  constructor() {
    this.subject.next('1')
    this.subject.next(2)

    const foo = this.subject.subscribe((value) => {
      console.log(`Subscription 1: ${value}`)
    })

    this.subject.next(3)
    this.subject.next(4)
    foo.unsubscribe()

    const bar = this.subject.subscribe((value) => {
      console.log(`Subscription 2: ${value}`)
    })

    this.subject.next(5)
    this.subject.next(6)

  }

}
