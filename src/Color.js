import colorNames from 'colornames';
import React from 'react';

const Color = ({colorText,setColor,setHex,dark,setDark})=>
{
    return(
        <form onSubmit={(e)=> e.preventDefault()}>
        <label>Add color name:</label>
        <input autoFocus
        type="text"
        placeholder="Type color"
        id="color"
        required
        role='colors'
        value={colorText}
        onChange={(e)=>{setColor(e.target.value);
        setHex(colorNames(e.target.value));}}
        />
        <button
        type="button"
        onClick={()=> setDark(!dark)}>Toggle Text Color
        </button>
        </form>
    )}

    export default Color