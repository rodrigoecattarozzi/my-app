import React, { useState } from 'react';

function SearchModule() {
    //Cambiar texto en base al input
    const [username, setUsername] = useState('');
  
    const changeText = e => {
      setUsername(e.target.value);
    }
    
    //Cambiar color con click
    const [isActive, setIsActive] = useState(false);

    const changeColor = event => {
      setIsActive(current => !current);
    }      

    //Incrementar contador con click
    const [number, setNumber] = useState(0);

    const addNumber = e => {
        setNumber(number + 1);
    }
  

    return (
    <div>
        {/* Cambiar texto en base al input */}
        <div className="input-field col s6">
          <input placeholder='Texto' id="first_name" type="text" className="validate green-text" onChange={changeText} />
        </div>
        <p className="flow-text">Texto ingresado: {username}</p>

        {/* Cambiar color con click */}
        <p className={isActive ? 'red-text' : 'blue-text'}>Edit and save to reload.</p>
        <button className={isActive ? 'red' : 'blue'} onClick={ changeColor }>Cambiar color</button>

        {/* Incrementar contador con click */}
        <button className='green' onClick={ addNumber }>Incrementar</button>
        <p className="flow-text">Contador: {number}</p>
    </div>
  )
}

export default SearchModule;