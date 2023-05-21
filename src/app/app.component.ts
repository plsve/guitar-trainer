import { Component, OnInit } from '@angular/core';
import { NotesService } from './services/notes.service';
import { Tunings } from './common/types/tunings.enum';

@Component({
selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Guitar Trainer';
  notes = [];

  constructor(private notesService: NotesService){

  }
  ngOnInit(): void {
    this.notes = this.notesService.notes.filter(e => !e.value.includes('#'));
  }

  getLayoutStyle(){
    return {
      'left': this.notesService.leftNeckLayoutOffset + 'px'
    }
  }


}
