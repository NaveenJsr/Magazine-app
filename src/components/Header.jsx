import React from 'react'

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
        
                <div className="header">

                        <img
                            className="header_bracket"
                            src={require('./images/bracket1.png')} 
                            alt= "Loading..."
                            height="110px"
                        />
                    
                        <img
                            className="header_logo" 
                            src={require('./images/cgu-logo.png')} 
                            alt= "Loading..."
                        />
                        <a className="navbar-brand" href={"/"}>
                            <h1>CGU Times</h1>
                        </a> 

                        <img
                            src={require('./images/bracket2.png')} 
                            alt= "Loading..."
                            height="110px"
                        />
                        
                                    
                </div>
                
        </nav>
        <div className='header-break'></div>
        
    </>
  )
}

export default Header