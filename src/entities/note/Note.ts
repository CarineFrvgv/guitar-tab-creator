const ALLOWED_GUITAR_TECHNIQUES = ['h', 'p', 'b', 'r', '\\', '/', '~' ]
export const NUMBER_OF_GUITAR_STRINGS = 6
export const NUMBER_OF_GUITAR_FRETS = 24

import {nanoid} from 'nanoid'
// let id = 0

export interface INoteClass{
  getNote(): NoteType
  getGuitarString():number
  getGuitarFret():number
  getGuitarTechnique():string|null

  setGuitarString(guitarString:number): void|never
  setGuitarFret(guitarFret:number): void|never
  setGuitarTechnique(guitarTechnique:string): void|never
  removeGuitarTechnique(): void
}

export type NoteType={
  guitarString: number,
  guitarFret: number,
  guitarTechnique?: string
}

export class Note implements INoteClass {
  private guitarString: number;
  private guitarFret: number;
  private guitarTechnique?:string;
  public id: string 

  constructor(args: NoteType){
    this.id = nanoid(11);
    this.setGuitarString(args.guitarString);
    this.setGuitarFret(args.guitarFret);
    if(args.guitarTechnique){
      this.setGuitarTechnique(args.guitarTechnique);
    }
  }

  public getNote():NoteType{
    let note: NoteType = {
      guitarString:this.guitarString, 
      guitarFret:this.guitarFret
    }

    if (this.guitarTechnique){
      note['guitarTechnique'] = this.guitarTechnique
    }
    return note;
  }

  public getGuitarString():number{
    return this.guitarString;
  }

  public setGuitarString(guitarString:number): void|never{
    const error = validateIntergerField(guitarString, NUMBER_OF_GUITAR_STRINGS, 'guitarString')
    
    if (error){
      throw error;
    }
    else{
      this.guitarString = guitarString;
      return;
    }
  }

  public getGuitarFret(): number {
      return this.guitarFret;
  }
  
  public setGuitarFret(guitarFret:number): void|never{
    const error = validateIntergerField(guitarFret, NUMBER_OF_GUITAR_FRETS, 'guitarFret')
    
    if (error){
      throw error;
    }
    else{
      this.guitarFret = guitarFret;
      return;
    }
  }

  public getGuitarTechnique(): string|null{
    if (this.guitarTechnique){
      return this.guitarTechnique
    }
    else{
      return null
    }
  }

  public setGuitarTechnique(guitarTechnique:string):void|never{
    if (ALLOWED_GUITAR_TECHNIQUES.includes(guitarTechnique)){
      this.guitarTechnique = guitarTechnique
      return
    }
    throw new Error(`Technique passed is not a valid one`)
  }

  public removeGuitarTechnique():void{
    if(this.guitarTechnique){
      this.guitarTechnique = undefined
    }
    return
  }
}


function validateIntergerField(value: number, MAX_VALUE_CONST: number, fieldName: string):null|Error{
  if (value >  MAX_VALUE_CONST){
    return new Error(`${fieldName} value can't be bigger than ${MAX_VALUE_CONST}`)
  }
  if (value < 0){
    return new Error(`${fieldName} value can't be negative`)
  }
  if (!Number.isInteger(value)){
    return new Error(`${fieldName} value has to be a whole number`)
  }
  else{
    return null;
  }
}
// exports.module = Note
// const ab:NoteType = {
//   guitarString: 2,
//   guitarFret: 0,
//   guitarTechnique: 'h'
// }

// let a = new Note(ab);
// console.log(a.getGuitarString())
// console.log(a.getGuitarFret())
// console.log(a.getGuitarTechnique())

