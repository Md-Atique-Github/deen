import React,{useState} from 'react'

export const Com1 = (props) => {

  

    const handleUpper=()=>{
        //console.log('it is clicked' + Text)
        const newText= Text.toUpperCase();
        setText(newText);
    }

    const handleonChange=(event)=>{
    // console.log('onChange cli')
    setText(event.target.value);
    }

const handleLower =()=>{
    const newText = Text.toLowerCase();
    setText(newText);
}


    

const[Text,setText] = useState('')


  return (
   <>
  <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" onChange={handleonChange} value={Text} id="exampleFormControlTextarea1" rows="7"></textarea>
  </div>
  <button className="btn1 btn-success MX-1" onClick={handleUpper}>ConverterUP</button>

  <button className="btn1 btn-primary mx-2" onClick={handleLower}>ConverterLOWER</button>

  <div className="container my=3">

<h2>Book Summary</h2>
<p>{Text.split(" ").length} Words {Text.length} Characters </p>
<p>{0.5*Text.split(" ").length} sec required to read</p>

  </div>
  </>
  )
}
