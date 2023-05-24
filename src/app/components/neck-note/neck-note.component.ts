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
      'background-color': this.note.selected ? 'lightgreen' : 'white'
    }
  }

  onHover(){
    console.log(this.note);
    if(this.notesService.selectedNote){
      this.notesService.selectedNote.selected = false;
    }
    this.note.selected = true;
    this.notesService.selectedNote = this.note;

  }
}
