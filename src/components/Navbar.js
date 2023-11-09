import React ,{useState}from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
 const [btnText,setbtnText]=useState('Enable Primary Mode');
 const handleClick=()=>{
  if(props.mode==='primary')
  setbtnText('Enable Primary Mode');
else setbtnText('Enable Dark Mode');
 }



// if(props.mode==='light'){
//   setbtnText("Enable Dark");
// }
  return (
    // var navi=document.getElementById("");

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/aboutit">{props.about}</a>
        </li> */}
      
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} onClick={handleClick}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode}  id="flexSwitchCheckDefault"/>
  <label className={`form-check-label `} htmlFor="flexSwitchCheckDefault" >{btnText}</label>
</div>

    </div>
  </div>
</nav>
  )
}
// Here we tell what is the datatype of title and about ;
Navbar.propTypes={
  title:PropTypes.string.isRequired,
about:PropTypes.string.isRequired
};

// This is defaut way to set data for this we should remove the line "title="TEXTUTILS" about="About Us" from App.js";
// Navbar.defaultProps={
//   title:"ChangeT",
//   about:"ChangeA"
// };