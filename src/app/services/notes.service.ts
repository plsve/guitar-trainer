import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Tunings } from '../common/types/tunings.enum';
import { Music } from '../common/types/utils/music.utils';
import { Utils } from '../common/types/utils/utils';
import { MajestyFretRects } from '../common/constants/majesty-hover-positions.const';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notesValues = [];
  notes = [];

  selectedNote;
  neckFocused = true;


  // notes = [];
  // allNotes = [];

  private leftNeckOffset = 39;
  headstockOffset = 65;
  leftNeckLayoutOffset = 200;

  constructor() {
    this.initAllNeckNotesValues(Tunings.STANDARD_6_STRING, 0, 12);
    this.initAllNotes();
    this.notes = this.notes.filter(e => !e.value.includes('#'));
    this.selectedNote = this.notes[0];
    
  }

  private initAllNeckNotesValues(
    strings: string[],
    fromFret: number,
    toFret: number
  ) {
    let stringNotes = [];
    strings.forEach((value, i) => {
      let oneStringNotes = [];
      for (let j = fromFret; j <= toFret; j++) {
        oneStringNotes.push(Music.add(Music.scrapeOctave(value), j * 0.5));
      }
      stringNotes.push(oneStringNotes);
    });

    this.notesValues = Utils.swapMatrixElements(stringNotes);
  }

  private initAllNotes() {
    for (let i = 0; i < this.notesValues.length; i++) {
      this.notesValues[i].forEach((value, index) => {
        this.notes.push({
          id: i + '-' + value,
          value: value,
          inputValue: '',
          valueRevealed: false,
          showCircle: false,
          displayX: this.calcDisplayPosX(i, index),
          displayY: this.calcDisplayPosY(i),
          fretRect: this.getFretRect(i, index)
          
        })
      })
    }
  }

  private getFretRect(fret: number, note: number){
    if(MajestyFretRects[fret]){
      return MajestyFretRects[fret][note] ;
    }
    return null;
  }

  private calcDisplayPosX(fret, noteIndex) {
    const offsetter = noteIndex - 3.25;
    const zeroFretWidth = 115;
    const noteSpreadFormula =
      fret * fret * (1 - 0.9997) * zeroFretWidth * offsetter;
    const fretNoteSpacing = (115 / 6) * noteIndex;
    // const secondHalfMultiplier = fret > 6 ?
    return this.leftNeckOffset + noteSpreadFormula + fretNoteSpacing;
  }

  private calcDisplayPosY(fret) {
    let result = this.headstockOffset;
    switch (fret) {
      case 0: {
        break;
      }
      case 1: {
        result += 97;
        break;
      }
      case 2: {
        result += 185;
        break;
      }
      case 3: {
        result += 269;
        break;
      }
      case 4: {
        result += 348;
        break;
      }
      case 5: {
        result += 422;
        break;
      }
      case 6: {
        result += 492;
        break;
      }
      case 7: {
        result += 558;
        break;
      }
      case 8: {
        result += 622;
        break;
      }
      case 9: {
        result += 682;
        break;
      }
      case 10: {
        result += 740;
        break;
      }
      case 11: {
        result += 794;
        break;
      }
      case 12: {
        result += 846;
        break;
      }
      default: {
      }
    }

    return result;
  }
}


