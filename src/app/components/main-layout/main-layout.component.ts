import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {


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
    console.log(event);
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
    }
}

}
