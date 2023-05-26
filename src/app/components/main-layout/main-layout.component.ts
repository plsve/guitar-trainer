import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  accidentals = false;


  constructor(private notesService: NotesService){

  }
  ngOnInit(): void {
  }

  getLayoutStyle(){
    return {
      'left': this.notesService.leftNeckLayoutOffset + 'px'
    }
  }

  clickedRighPanel(){
    this.notesService.neckFocused = false;
    console.log('Neck not focused');
  }

  keyUp(event){
console.log(event);
  }

  keyPress(event: KeyboardEvent) {
    const key = event.key.toUpperCase();
    const notePattern = /[A, B, C, D, E, F, G]/;
    if(this.notesService.selectedNote.inputValue.length == 0){      
      if (notePattern.test(key)) {
        console.log('pattern ok');
        
        this.notesService.selectedNote.inputValue = key;
        if(!this.accidentals){
          console.log(this.notesService.selectedNote);
          this.notesService.selectedNote = this.notesService.notes[this.notesService.notes.indexOf(this.notesService.selectedNote)+1];
          // this.notesService.selectedNote = this.notesService.notes[this.notesService.selectedNote.nextNoteIndex]
          
        }
      }
    } else if (this.accidentals && this.notesService.selectedNote.inputValue.length == 1){
      
      if (key == 'S') {
        this.notesService.selectedNote.inputValue += 'b';
          
      } else if (key == 'W' || key == '#') {
        this.notesService.selectedNote.inputValue += '#';
      }
    }

    // event.preventDefault();
        // invalid character, prevent input
        // event.preventDefault();
    
}

}
