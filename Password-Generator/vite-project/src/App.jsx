import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [numLength, setNumLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) { str += '0123456789' };
    if (charAllowed) { str += '`~!@#$%^&*(){}[]' };

    for (let i = 1; i <= numLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [numLength, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [numLength, numAllowed, charAllowed, generatePassword]);

  return (
    <div className='bg-gray-700 text-orange-600 w-full max-w-2xl mx-auto my-8 rounded-2xl px-4 py-4'>
      <h1 className='text-center font-semibold text-3xl p-5 text-white'>Password generator</h1>
      <div className='flex rounded-lg overflow-hidden mb-4 mx-3 my-1'>
        <input
          type="text"
          value={password}
          className='p-2 w-full outline-none text-2xl font-semibold'
          placeholder='password'
          ref={passwordRef}
          readOnly
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='bg-blue-600 hover:bg-blue-800 active:bg-blue-950 text-white p-4 font-semibold text-2xl'
        >Copy</button>
      </div>
      <div className='flex w-full overflow-hidden px-3 py-1'>
        <div className='gap-x-1 flex text-xl font-medium'>
          <input
            type="range"
            min={8}
            max={32}
            value={numLength}
            id='length'
            onChange={(e) => { setNumLength(e.target.value) }}
          />
          <label htmlFor="length">length: {numLength}</label>
        </div>
        <div className='ml-4 gap-x-1 flex text-xl font-medium'>
          <input
            type="checkbox"
            checked={numAllowed}
            id='numAllowed'
            onChange={(e) => {setNumAllowed(e.target.checked)}}
          />
          <label htmlFor="numAllowed">Numbers</label>
        </div>
        <div className=' ml-4 gap-x-1 flex text-xl font-medium'>
          <input
            type="checkbox"
            checked={charAllowed}
            id='charAllowed'
            onChange={(e) => {setCharAllowed(e.target.checked)}}
          />
          <label htmlFor="charAllowed">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
