import React from 'react';
/**Create a new component (=> ValidationComponent) which receives the text length as a prop
Inside the ValidationComponent, either output "Text too short" or "Text long enough" 
depending on the text length (e.g. take 5 as a minimum length) */
const validation = (props) => {

    let textLength = props.inputLength;
    let textOutput ="";

    if(textLength<5){
        //then paragraph reads
        textOutput = 'Text too short';
    } else {
        textOutput = 'Text long enough';
    }

    return(
        <div className='Validation'>
            <p id='textOutput'>{textOutput}</p>  
        </div>
    );

}

export default validation;