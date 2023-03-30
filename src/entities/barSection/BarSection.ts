import {Note, NoteType, NUMBER_OF_GUITAR_FRETS, NUMBER_OF_GUITAR_STRINGS} from '../note/Note'

interface IBarSection{
  getBarSection(): NoteType[]
  addNewNoteToSection(note:NoteType): void
  removeNoteFromSection(note: NoteType): void|string
}

type stringHasNoteType = {
  stringIsInSection: boolean
  indexOfNote: number
}

export class BarSection implements IBarSection{
  private notes: NoteType[]
  
  constructor(notes?: NoteType[]){
    if (notes){
      this.notes = notes
    }
  }

  private  stringIsInSection(string:number): stringHasNoteType{
    for(let i=0; i<this.notes.length; i++){
      // since string is a unique value in
      // this.notes i can compare by string
      if(this.notes[i].guitarString == string){
        return {stringIsInSection: true, indexOfNote: i}
      }
    }

    return {stringIsInSection: false, indexOfNote: -1}
  }

  public getBarSection():NoteType[]{
    return this.notes
    // let newArray:NoteType[] = []

    // // console.log(this.notes)
    // this.notes.forEach((note)=>{
    //   // console.log(note.id)
    //   newArray.push(note)
    // })

    // return newArray;
  }

  public addNewNoteToSection(note:NoteType): void {
    // check first if string is occupied
    if(this.notes.length > 0){
      const { stringIsInSection, indexOfNote } = this.stringIsInSection(note.guitarString)

      if(stringIsInSection){
        this.notes.splice(indexOfNote, 1) // remove old note in specific string from section
        this.notes.push(note) // add new note to section
        return
      }
      
    }


    // if (this.notes.length == NUMBER_OF_GUITAR_STRINGS){
    //   throw error
    // }

    this.notes.push(note)     
    return   
  }

  public removeNoteFromSection(note:NoteType): void|string{
    for(let i=0; i<this.notes.length; i++){
      if(this.notes[i].guitarString == note.guitarString){
        this.notes.splice(i, 1);
        return

      }
    }
    // let i = this.notes.indexOf(note)
     
    // if(i !== -1){
    //   this.notes.splice(i, 1) 
    //   return i.toString()
    // }

    return 'not found';
  }


}