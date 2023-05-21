import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-neck-note',
  templateUrl: './neck-note.component.html',
  styleUrls: ['./neck-note.component.scss']
})
export class NeckNoteComponent implements OnInit {

  @Input()
  note;

  constructor() { }

  ngOnInit(): void {
    console.log(this.note);
  }

  getStyles(){
    return {
      'left': Math.floor(this.note.displayX) + 'px',
      'top': this.note.displayY + 'px',
    }
  }
}
