import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-neck-note',
  templateUrl: './neck-note.component.html',
  styleUrls: ['./neck-note.component.scss']
})
export class NeckNoteComponent implements OnInit {

  @Input()
  note;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    console.log(this.note);
  }

  getStyles() {
    return {
      'left': Math.floor(this.note.displayX) + 'px',
      'top': this.note.displayY + 'px',
      'font-size': this.note.value.length == 2 ? '13px' : '15px',
      'line-height': this.note.value.length == 2 ? '13px' : '15px',
      'background-color': this.note == this.notesService.selectedNote ? 'lightgreen' : ((this.note.inputValue != this.note.value && this.note.inputValue.length > 0) ? 'rgb(255, 150, 150)' : '')
    }
  }

  getBackgroundColor(){
    if(this.note.selected){
      return 'lightgreen'
    } else if (this.note.inputValue > 0 && this.note.inputValue != this.note.value ){
      return 'red'
    } else {
      return 'rgba(255, 255, 255, 0.65);'
    }
  }

  onHover(){
    this.notesService.selectedNote = this.note;

  }
}
