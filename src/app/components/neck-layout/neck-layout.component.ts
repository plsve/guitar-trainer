import { Component, Input, OnInit } from '@angular/core';
import { GuitarNecks } from 'src/app/common/types/guitar-necks.enum';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-neck-layout',
  templateUrl: './neck-layout.component.html',
  styleUrls: ['./neck-layout.component.scss']
})
export class NeckLayoutComponent implements OnInit {

  @Input()
  type: string;

  src;

  constructor(public notesService: NotesService){

  }


  ngOnInit(): void {
    this.initBackgroundSrc();
  
  }

  initBackgroundSrc() {
    switch (this.type) {
      case GuitarNecks.MAJESTY: {
        this.src = "./assets/necks/majesty-neck.png";
      }
    }
  }

  getBackgroundStyle(){
    return {
      'background-image': "url('" + this.src + "')"
    }
  }

  neckMousedOver(){
    this.notesService.neckFocused = true;
    console.log('Neck focused');
  }

  keyUp(event){
    console.log(event);
      }
    


}
