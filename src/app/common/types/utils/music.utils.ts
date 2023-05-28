export const Music = {
    NOTE_CLASSES: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  NOTES: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  NOTES_FLATS: [
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
    'A',
    'Bb',
    'B',
  ],

  add(note: string, steps: number, useFlats?: boolean) {
    if (steps % 0.5 != 0) {
      console.error('Invalid note addition:' + note + ' + ' + steps);
    }
    let index = this.NOTES.indexOf(note.toUpperCase()) + 2 * steps;
    index = index > 11 ? index - 12 : index;
    if (useFlats) {
      this.NOTES_FLATS[index];
    }
    return this.NOTES[index];
  },

  scrapeOctave(note: string) {
    if (note.length == 3) {
      return note.slice(0, 2);
    } else if (note.length == 2 && note[1] != '#' && note[1] != 'b') {
      return note.slice(0, 1);
    }
    return note;
  },

  toFlat(notes) {
    if (Array.isArray(notes)) {
      return notes.map((e) => this.NOTES_FLATS[this.NOTES.indexOf(e)]);
    } else {
      return this.NOTES_FLATS[this.NOTES.indexOf(notes)];
    }
  },

  toSharp(notes) {
    if (Array.isArray(notes)) {
      return notes.map((e) => this.NOTES[this.NOTES_FLATS.indexOf(e)]);
    } else {
      return this.NOTES[this.NOTES_FLATS.indexOf(notes)];
    }
  },


  

};
