import React,{useState} from 'react'
// WHAT IS REACT HOOK ?
// Hooks allow function components to have access to state and other React features. 
// Because of this, class components are generally no longer needed.

// WHAT IS DIFFERENCE BETWEEN PROPS AND STATE?
// PTOPS ARE GENERRALLY USED TO SET OF ANY DATA WHICH IS USED AT MANY TIMES WHILE STATE IS USED 
// TO SETTING DATA ON A PARTICULAR FIELD.

// console.log(useState('Enter text here2'));
export default function Textform(props) {
  // For upperCase conversion
  const [text,setText]=useState('');
  const [color,setcolor]=useState('');
  const wordCount = text.trim().split(/\s+/).length;
  const letter=text.replace(/\s/g,'');
  
// setwords(wordCount);
    const handleUpClick=()=>{

      // FIRST METHOD:-
        // let val1=document.getElementById("myBox");
        // val1.value=val1.value.toUpperCase();
       

        //Another method 

        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into UpperCase is applied","success");
    }

    // For LowerCase conversion

    const handleLoClick=()=>{

      // FIRST METHOD:-
        // let val1=document.getElementById("myBox");
        // val1.value=val1.value.toLowerCase();
       

        //Another method 

        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into LowerCase is applied !","success");

    }
    const handleClear=()=>{

      // FIRST METHOD:-
        // let val1=document.getElementById("myBox");
        // val1.value="";

        //Another method 

        let newText="";
        setText(newText);
        props.showAlert("Whole text is removed !","danger");

    }
    // 
  const newColor=()=>{
    let p=prompt("Enter the color");
    let str=p;
   const x=document.getElementById("myBox");
   let newc=color;
   if(x.style.color==="black"){
    x.style.color=setcolor(newc);
   }
  else {
    x.style.color=str;
    props.showAlert(`Text color is ${str} !`,"success");
  }
    }
    const handleOnChange=(event)=>{
        console.log("This is clicked");
        setText(event.target.value);
    }

    // COPYING THE TEXT VALUES
    const handleCopy=()=>{
      let copy=document.getElementById("myBox");
      copy.select();
      navigator.clipboard.writeText(copy.value);
      props.showAlert("Your Text is copied now !","success");

    }

    // HANDLING THE EXTRA SPACES THAT COMES BETWEEN WORDS!
    const handleSpace=()=>{
      // Here we store each word in a array ignoing spaces!
      let NText=text.split(/[ ]+/);
      // Here joined each word with single spaces!
      setText(NText.join(" "));
      props.showAlert("ExtraSpaces has been removed !","success");

    }
   
    // setText("kjsdbuewhiue"); This is way of setting text as in a function !
  return (
    <>
    <div className='container'>
        <h1 className={`text-${props.mode==='primary'?'dark':'light'}`}>{props.heading}</h1>
     <div className="mb-3 ">
        {/* Here we made an onChange because we use text as state for value. */}
    <textarea className={`form-control`} style={{background:`${props.mode==='primary'?'white':'grey'}`}}  value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Write Here To Check"></textarea>
    <button className="btn btn-primary my-3 mx-1" id="but" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary my-3 mx-1" id="but1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary my-3 mx-1" id="but2" onClick={handleClear}>ClearText</button>
    <button className="btn btn-primary my-3 mx-1" id="but3" onClick={newColor} >ChangeColor</button>
    <button className="btn btn-primary my-3 mx-1" id="but3" onClick={handleCopy} >CopyText</button>
    <button className="btn btn-primary my-3 mx-1" id="but3" onClick={handleSpace} >Space Handling</button>
    
    

  </div>
    </div>
    <div  className={` container text-${props.mode==='primary'?'dark':'light'}`}>
    <h2>Your text summary</h2>
    {/* Want to know the number of words and number of chracter in a sentence */}
    <p>{`${text.trim().length==0?0:wordCount}`}words and {letter.length} chracters</p>
    <p>You should read it in {0.08*(text.split(" ").length)} minutes</p>
    <h2>Preview</h2>
    <p ><i>{text.length>0?text:"Write something to preview"}</i></p>
    </div>
    </>
  )
}
