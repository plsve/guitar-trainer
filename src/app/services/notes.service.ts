import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Tunings } from '../common/types/tunings.enum';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  selectedNote;
  neckFocused = true;

  private standardNotes = [
    ['E', 'A', 'D', 'G', 'B', 'E'],
    ['F', 'A#', 'D#', 'G#', 'C', 'F'],
    ['F#', 'B', 'E', 'A', 'C#', 'F#'],
    ['G', 'C', 'F', 'A#', 'D', 'G'],
    ['G#', 'C#', 'F#', 'B', 'D#', 'G#'],
    ['A', 'D', 'G', 'C', 'E', 'A'],
    ['A#', 'D#', 'G#', 'C#', 'F', 'A#'],
    ['B', 'E', 'A', 'D', 'F#', 'B'],
    ['C', 'F', 'A#', 'D#', 'G', 'C'],
    ['C#', 'F#', 'B', 'E', 'G#', 'C#'],
    ['D', 'G', 'C', 'F', 'A', 'D'],
    ['D#', 'G#', 'C#', 'F#', 'A#', 'D#'],
    ['E', 'A', 'D', 'G', 'B', 'E'],
  ]

  notes = [];
  allNotes = [];

  private leftNeckOffset = 39;
  headstockOffset = 65;
  leftNeckLayoutOffset = 200;

  constructor() {
    this.initAllNotes();
  }

  private initAllNotes() {
    for (let i = 0; i < this.standardNotes.length; i++) {
      this.standardNotes[i].forEach((value, index) => {
        const previousNoteIndex = index == 0 ? null : index - 1 + i * 6;
        const nextNoteIndex = index == this.standardNotes.length ? null : index + 1 + i * 6;
        this.allNotes.push({
          id: i + '-' + value,
          value: value,
          inputValue: '',
          displayX: this.calcDisplayPosX(i, index),
          displayY: this.calcDisplayPosY(i),
          revealed: false,
          nextNoteIndex: nextNoteIndex,
          previousNoteIndex: previousNoteIndex
          
        })
      })
    }
    
  }


  private calcDisplayPosX(fret, noteIndex) {
    const offsetter= noteIndex - 3.25;
    const zeroFretWidth = 115;
    const noteSpreadFormula = fret * fret * (1 - 0.9997) * zeroFretWidth * offsetter;
    const fretNoteSpacing = 115 / 6 * noteIndex;
    // const secondHalfMultiplier = fret > 6 ? 
    return this.leftNeckOffset + noteSpreadFormula + fretNoteSpacing;
  }

  private calcDisplayPosY(fret) {
    let result = this.headstockOffset
    switch (fret) {
      case 0: { break; }
      case 1: { result += 97; break; }
      case 2: { result += 185; break; }
      case 3: { result += 269; break; }
      case 4: { result += 348; break; }
      case 5: { result += 422; break; }
      case 6: { result += 492; break; }
      case 7: { result += 558; break; }
      case 8: { result += 622; break; }
      case 9: { result += 682; break; }
      case 10: { result += 740; break; }
      case 11: { result += 794; break; }
      case 12: { result += 846; break; }
      default: {}
    }

  return result;
  }

}
