import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Tunings } from '../common/types/tunings.enum';
import { Music } from '../common/types/utils/music.utils';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  allNeckNotes = [];

  selectedNote;
  neckFocused = true;

  // private standardNotes = [
  //   ['E', 'A', 'D', 'G', 'B', 'E'],
  //   ['F', 'A#', 'D#', 'G#', 'C', 'F'],
  //   ['F#', 'B', 'E', 'A', 'C#', 'F#'],
  //   ['G', 'C', 'F', 'A#', 'D', 'G'],
  //   ['G#', 'C#', 'F#', 'B', 'D#', 'G#'],
  //   ['A', 'D', 'G', 'C', 'E', 'A'],
  //   ['A#', 'D#', 'G#', 'C#', 'F', 'A#'],
  //   ['B', 'E', 'A', 'D', 'F#', 'B'],
  //   ['C', 'F', 'A#', 'D#', 'G', 'C'],
  //   ['C#', 'F#', 'B', 'E', 'G#', 'C#'],
  //   ['D', 'G', 'C', 'F', 'A', 'D'],
  //   ['D#', 'G#', 'C#', 'F#', 'A#', 'D#'],
  //   ['E', 'A', 'D', 'G', 'B', 'E'],
  // ]

  notes = [];
  allNotes = [];

  private leftNeckOffset = 39;
  headstockOffset = 65;
  leftNeckLayoutOffset = 200;

  constructor() {
    this.initAllNeckNotes(['E4', 'A4', 'D4', 'G4', 'B4', 'E5'], 1, 12);
  }

  private initAllNeckNotes(
    strings: string[],
    fromFret: number,
    toFret: number
  ) {
    if (fromFret > toFret) {
      console.error(
        'Invalid fret range definition: ' +
          ' from ' +
          fromFret +
          ' to ' +
          toFret
      );
    }

    let stringNotes = [];
    strings.forEach((value, i) => {
      let oneStringNotes = [];
      console.log('ha');

      for (let j = 0; j <= toFret - fromFret; j++) {
        console.log(Music.scrapOctave(value));

        oneStringNotes.push(Music.add(Music.scrapOctave(value), j * 0.5));
      }
      stringNotes.push(oneStringNotes);
    });

    this.allNeckNotes = stringNotes;
    console.log(this.allNeckNotes);
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
function addscrapOctave(arg0: string): any {
  throw new Error('Function not implemented.');
}
