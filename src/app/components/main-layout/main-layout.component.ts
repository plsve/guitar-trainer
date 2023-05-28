import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/common/types/utils/music.utils';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  constructor(private notesService: NotesService) {}
  ngOnInit(): void {}

  getLayoutStyle() {
    return {
      left: this.notesService.leftNeckLayoutOffset + 'px',
    };
  }

  clickedRighPanel() {
    // this.notesService.neckFocused = false;
    console.log('Neck not focused');
  }

  keyUp(event) {
    console.log(event);
  }


  keyPress(event: KeyboardEvent) {
    console.log(event);

    if (this.notesService.selectedNote) {
      let key = event.key.toUpperCase();
      ['A', 'B', 'C', 'D', 'E', 'F', 'G']
      if (Music.NOTE_CLASSES.includes(key)) {
        console.log('pattern ok');
        if (event.shiftKey) {
          key += '#';
        } else if (event.ctrlKey) {
          key += 'b';
        }
        this.notesService.selectedNote.inputValue = key;
        this.notesService.selectedNote.valueRevealed = true;
        console.log(this.notesService.selectedNote);
        
        this.notesService.selectedNote =
          this.notesService.notes[
            this.notesService.notes.indexOf(this.notesService.selectedNote) + 1
          ];
      }

      event.preventDefault();
      // invalid character, prevent input
      // event.preventDefault();
    }
  }
}
