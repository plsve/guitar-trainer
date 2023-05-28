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

  getContainerStyles() {
    return {
      'left': Math.floor(this.note.displayX) + 'px',
      'top': this.note.displayY + 'px',
      'font-size': this.note.value.length == 2 ? '13px' : '15px',
      'line-height': this.note.value.length == 2 ? '13px' : '15px',
      // 'background-color': this.note == this.notesService.selectedNote ? 'rgba(255, 255, 255, 0.65)' : ''
      'background-color': this.getBackgroundColor()
    }
  }

  getBackgroundColor(){
    if(this.note == this.notesService.selectedNote){
      return 'rgba(255, 255, 255, 0.95)'
    }
    if (this.note.valueRevealed && this.note.inputValue > 0 && this.note.inputValue != this.note.value ){
      return 'red'
    } 
    if (this.note.showCircle || this.note.inputValue.length > 0){
      return 'rgba(255, 255, 255, 0.7)'
    }
    return ''
  }

  getFretRectStyles(){
    return {
      'width': this.note.fretRect.width,
      'height': this.note.fretRect.height,
      // 'bottom': '0px'
    }
  }


  onHover(){
    this.notesService.selectedNote = this.note;

  }
}
