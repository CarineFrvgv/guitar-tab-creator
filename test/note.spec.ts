import {Note, NoteType, NUMBER_OF_GUITAR_FRETS, NUMBER_OF_GUITAR_STRINGS} from '../src/entities/note/Note'

let i = 0

jest.mock("nanoid", () => {
  return { nanoid: () => i++ };
});

describe('get methods', ()=>{
  const input:NoteType = {
    guitarString: 1,
    guitarFret: 2,
  }

  const newNote = new Note(input);

  it('should return NoteType object', ()=>{
    expect(newNote.getNote()).toMatchObject({
      guitarString: 1,
      guitarFret: 2,
    })
  })
  
  it('should return guitarString value', ()=>{
    expect(newNote.getGuitarString()).toEqual(1);
  })

  it('should return guitarFret value', ()=>{
    expect(newNote.getGuitarFret()).toEqual(2);
  })

  it('should return null guitarTechnique', ()=>{
    expect(newNote.getGuitarTechnique()).toEqual(null)
  })

  it('should return guitarTechnique value', ()=>{
    const input:NoteType = {
      guitarString: 1,
      guitarFret: 2,
      guitarTechnique: 'p'
    }
  
    const newNote = new Note(input);

    expect(newNote.getGuitarTechnique()).toEqual('p')
  })

})

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

describe('setGuitarFret method', ()=>{
  const newNoteValues:NoteType = {
    guitarString: 1,
    guitarFret: 2,
    guitarTechnique: 'p'
  }
  const newNote = new Note(newNoteValues);

  it('setGuitarFret method should set guitarFret to new value if a valid value is passed.', ()=>{
    newNote.setGuitarFret(4)
    let updatedNote = newNote.getNote()

    expect(updatedNote).toMatchObject({
      guitarString: 1,
      guitarFret: 4,
      guitarTechnique: 'p'})
  })

  it('setGuitarFret method should throw error if value passed is larger than the number of guitar frets.', ()=>{

    expect.assertions(1)

    try{
      newNote.setGuitarFret(52);
    }catch(err){
      if (err instanceof Error){
        expect(err.message).toBe(`guitarFret value can't be bigger than ${NUMBER_OF_GUITAR_FRETS}`);
      }
    }
   
  });

  test('setGuitarFret method should throw error if value passed is a negative number.', ()=>{

    expect.assertions(1)

    try{
      newNote.setGuitarFret(-1);
    }catch(err){
      if (err instanceof Error){
        expect(err.message).toBe(`guitarFret value can't be negative`);
      }
    }
  });

  test('setGuitarFret method should throw error if value passed is not an integer.', ()=>{

    expect.assertions(1)

    try{
      newNote.setGuitarFret(1.5);
    }catch(err){
      if (err instanceof Error){
        expect(err.message).toBe(`guitarFret value has to be a whole number`);
      }
    }
  });

})

describe('SetGuitarTechnique method', ()=>{
  const newNoteValues:NoteType = {
    guitarString: 1,
    guitarFret: 2,
  }

  const newNote = new Note(newNoteValues);
  newNote.setGuitarTechnique('h')

  it('should set the guitarString to new value passed if valid',()=>{
    expect(newNote.getGuitarTechnique()).toEqual('h')
  })

  it('should throw error when technique is not valid', ()=>{
    try{
      newNote.setGuitarTechnique('f')
    }
    catch(err){
      if(err instanceof Error){
        expect(err.message).toBe(`Technique passed is not a valid one`)
      }
    }
  })

})

describe('delete guitarTechniqueValue', ()=>{
  const input:NoteType = {
    guitarString: 1,
    guitarFret: 2,
    guitarTechnique: '~'
  }

  const newNote = new Note(input);
  newNote.removeGuitarTechnique()
  it('should remove the valeu of guitarTechnique', ()=>{
    expect(newNote.getGuitarTechnique()).toBe(null);
  })
})