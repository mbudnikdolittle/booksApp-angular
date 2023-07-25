import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  @Output() nameFromParent = new EventEmitter<string>();

  addNewBookTitle(value: string) {
    this.nameFromParent.emit(value)
  }

}
