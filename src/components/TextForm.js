import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","Sucess");
  }

  const handleLowClick=()=>{
    console.log("Lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","Sucess");
  }

  const handleClearClick=()=>{
    console.log("Lowercase was clicked"+text);
    let newText='';
    setText(newText);
    props.showAlert("Text cleared!","Sucess");
  }


const handleOnChange=(event)=>{
    console.log("on change");
   
    setText(event.target.value);
  }


  const handleCopy=()=>{
    console.log("I am copy");
    var text=document.getElementById('myBox');
    text.select();
    
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","Sucess");
    
  }


  const handleExtraSpaces=()=>{
    console.log("removed extra spaces");
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","Sucess");
    
  }


  const [text, setText]=useState('');
  // setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        
            <h1 >{props.heading}</h1>
            <div className="mb-3">
           
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-4" onClick={handleLowClick}>Convert to lower case</button>
            <button className="btn btn-primary mx-4" onClick={handleClearClick}>Clear text</button>
          
            <button className="btn btn-primary mx-4" onClick={handleCopy}>copy of a word</button>
            <button className="btn btn-primary mx-4" onClick={handleExtraSpaces}>remove extra spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text .length>0?text:"Enter something in this text box to preview it here"}</p>
    </div>
    </>
  )
}
