import { Note, NoteType} from "../src/entities/note/Note"
import { BarSection } from '../src/entities'
// import {mocked} from 'ts-jest/
let i = 1

jest.mock("nanoid", () => {
  return { nanoid: () => i++ };
});

let note1 = new Note({guitarFret:1, guitarString:2})
let note2 = new Note({guitarFret:5, guitarString:6})
let note3 = new Note({guitarFret:2, guitarString:3, guitarTechnique:'b'})

// import { nanoid } from 'nanoid';
// jest.mock(nanoid)

// const mnanoid = mocked(nanoid)

describe('',()=>{
  const input = [note1,note2,note3]



  it('shold return the notes',()=>{
    const newSection = new BarSection(input)

    let output = [
      {guitarFret:1, guitarString:2},
      {guitarFret:5, guitarString:6},
      {guitarFret:2, guitarString:3, guitarTechnique:'b'},
    ]

    expect(newSection.getBarSection()).toEqual(output)
  })

  it('should add a new note to barsection',()=>{
    const newSection = new BarSection(input)

    let newNote = new Note({guitarFret:3, guitarString:5, guitarTechnique:'~'})
    newSection.addNewNoteToSection(newNote)

    let output = [
      {guitarFret:1, guitarString:2},
      {guitarFret:5, guitarString:6},
      {guitarFret:2, guitarString:3, guitarTechnique:'b'},
      {guitarFret:3, guitarString:5, guitarTechnique:'~'}
    ]

    expect(newSection.getBarSection()).toEqual(output)
  })

})


describe('',()=>{

  it('should add a new note to barsection',()=>{
    const input = [note1,note2,note3]
    const newSection = new BarSection(input)

    newSection.removeNoteFromSection(note3)
    
    expect(newSection.getBarSection()).toEqual([{guitarFret:1, guitarString:2},
      {guitarFret:5, guitarString:6}])
  })

  it('should not found',()=>{
    const input = [note1,note2]
    const newSection = new BarSection(input)

    newSection.removeNoteFromSection(note3)
    
    expect(newSection.removeNoteFromSection(note3)).toEqual('not found')
  })

  
})