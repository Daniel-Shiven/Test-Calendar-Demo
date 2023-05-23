import React from 'react';


const buttons = {
    fontSize: 20,
    fontFamily: 'Georgia',
    borderRadius: 3,
    padding: 5,
    paddingRight: 8,
    paddingLeft: 8,
    marginBottom: 5,
    width: '200px',
}

const NavBar = () => {
    return (

        
        <div style={{
            alignItems: 'left',
            backgroundColor: 'grey',
            height: '100vh',
            padding: 15,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
        }}>

            <a href='/Dashboard'><button style={buttons}>Submit a Test</button></a>
            <button style={buttons}>Your Classes</button>
            <button style={buttons}>Edit Classes</button>
            <button style={buttons}>Your Tests</button>
            <button style={buttons}>Edit Tests</button>
            <button style={buttons}>Calendar</button>

        </div>
          )
}

export default NavBar;