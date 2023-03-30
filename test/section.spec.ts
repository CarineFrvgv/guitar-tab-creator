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


describe('',()=>{
  const input = [note1.getNote(),note2.getNote(),note3.getNote()]

  it('shold return the section',()=>{
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

    let newNote = {guitarFret:3, guitarString:5, guitarTechnique:'~'}
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
  const input = [
    {guitarFret:1, guitarString:2},
    {guitarFret:5, guitarString:6},
    {guitarFret:2, guitarString:3, guitarTechnique:'b'},
  ]

  const newSection = new BarSection(input)

  newSection.addNewNoteToSection({guitarFret:12, guitarString:6, guitarTechnique:'/'})
    

  it('should remove note if new note in the same string is added', ()=>{
    expect(newSection.getBarSection()).toStrictEqual([
      {guitarFret:1, guitarString:2},
      {guitarFret:2, guitarString:3, guitarTechnique:'b'},
      {guitarFret:12, guitarString:6, guitarTechnique:'/'},
    ])
  })
})


describe('remove method',()=>{

  it('should remove a note from section',()=>{
    const input = [
            {guitarFret:1, guitarString:2},
            {guitarFret:5, guitarString:6},
            {guitarFret:2, guitarString:3, guitarTechnique:'b'},
          ]

    const newSection = new BarSection(input)

    newSection.removeNoteFromSection({guitarFret:2, guitarString:3, guitarTechnique:'b'})
    
    expect(newSection.getBarSection()).toEqual([{guitarFret:1, guitarString:2},
      {guitarFret:5, guitarString:6}])
  })

  it('should return not found',()=>{
    const input = [note1.getNote(),note2.getNote()]
    const newSection = new BarSection(input)

    newSection.removeNoteFromSection(note3.getNote())
    
    expect(newSection.removeNoteFromSection(note3.getNote())).toEqual('not found')
  })

  
})