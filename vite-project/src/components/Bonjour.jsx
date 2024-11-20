import React from 'react';

function Bonjour ({name, setName}){
    return (
        <div className='cardName'>
            <h1>Bonjour {name}</h1>
            <input id='myInput' type="text" name='prenom' onChange={(event) => setName(event.target.value)}/>
        </div>
    );
}

export default Bonjour;
