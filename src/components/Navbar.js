//header == navbar
import React, { useState } from 'react'
import logo from '../favicon.ico'
import '../css/Navbar.css'

const Navbar = (props) => {
  console.log(props);

  const [display, setDisplay] = useState('none');

  const HandleDisplay = () => {
    if (display === "none") {
      setDisplay("block");
    } else if (display === "block") {
      setDisplay("none");
    }
  }

  return (
    <>
      <div className='backdrop_navabar'>
        <div className='navbar_right'><h1>E commerce App</h1></div>
        <div className="nav_cont">
          <i onClick={HandleDisplay} ><img src={logo} alt="" className='logo' /></i>          
          
          {
            props.data.map((curr, currIndex) => {
              return (
                <>
                  <div className="navMain" key={curr} style={{display:display}}>
                    <h2>{props.data[currIndex].CardData.Name}</h2>
                    <h2>{props.data[currIndex].CardData.Price}</h2>
                    <hr />
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )

}

export default Navbar
