import React from 'react'
const TextArea = ({colorText,hex,dark}) => {
return (
        <section className="textarea"
        style={{backgroundColor:colorText,
        color:dark? "#000" : "#FFF"
        }}>
        <p>{colorText ? colorText : "Empty value"}</p>
        <p>{hex ? hex : null}</p>
        </section>
        )   }
        TextArea.defaultProps= {
        color:"Empty value"}
        export default TextArea