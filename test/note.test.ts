import {Note, NoteType, NUMBER_OF_GUITAR_STRINGS} from '../src/entities/note/Note'

describe('setGuitarString method', ()=>{
  const newNoteValues:NoteType = {
    guitarString: 1,
    guitarFret: 2,
    guitarTechnique: 'p'
  }
  const newNote = new Note(newNoteValues);

  test('setGuitarString method should set guitarString to new value if a valid value is passed.', ()=>{
    newNote.setGuitarString(4)
    let updatedNote = newNote.getNote()

    expect(updatedNote).toMatchObject({
      guitarString: 4,
      guitarFret: 2,
      guitarTechnique: 'p'})
  })

  test('setGuitarString method should throw error if value passed is larger than the number of guitar strings.', ()=>{

    expect.assertions(1)

    try{
      newNote.setGuitarString(52);
    }catch(err){
      if (err instanceof Error){
        expect(err.message).toBe(`guitarString value can't be bigger than ${NUMBER_OF_GUITAR_STRINGS}`);
      }
    }
   
  });


  test('setGuitarString method should throw error if value passed is a negative number.', ()=>{

    expect.assertions(1)

    try{
      newNote.setGuitarString(-1);
    }catch(err){
      if (err instanceof Error){
        expect(err.message).toBe(`guitarString value can't be negative`);
      }
    }
  });

  test('setGuitarString method should throw error if value passed is not an integer.', ()=>{

    expect.assertions(1)

    try{
      newNote.setGuitarString(1.5);
    }catch(err){
      if (err instanceof Error){
        expect(err.message).toBe(`guitarString value has to be a whole number`);
      }
    }
  });

})

