import {Note, NoteType, NUMBER_OF_GUITAR_FRETS, NUMBER_OF_GUITAR_STRINGS} from '../note/Note'

interface IBarSection{
  getBarSection(): NoteType[]
  addNewNoteToSection(note:Note): void
  removeNoteFromSection(note: Note): void|string
}

export class BarSection implements IBarSection{
  private notes

  constructor(notes: Note[]){
    this.notes = notes
  }

  public getBarSection():NoteType[]{
    let newArray:NoteType[] = []

    console.log(this.notes)
    this.notes.forEach((note)=>{
      console.log(note.id)
      newArray.push(note.getNote())
    })

    return newArray;
  }

  public addNewNoteToSection(note:Note): void {
    this.notes.push(note)     
    return   
  }

  public removeNoteFromSection(note:Note): void|string{
    let i = this.notes.indexOf(note)
     
    if(i !== -1){
      this.notes.splice(i, 1) 
      return
    }

    return 'not found';
  }


}