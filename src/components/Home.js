import React, { useState} from 'react';
import backgroundImage from '../ASM.PNG'




const inlineBlock = {
    display: 'inline-block',
    backgroundColor: 'grey',
    padding: 45,
    paddingtop: 0,
    borderRadius: 10,
    marginTop: '200px',
    boxShadow: '0px 0px 15px 5px',
}

const testCalendar = {
    fontSize: '48px',
    fontFamily: 'Georiga',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: -10,
    marginBottom: 10,
    marginTop: 10,
}

const lineBreak = {
    padding: 100,
    marginBottom: 50,
}

const labels = {
    fontSize: '24px',
    fontFamily: 'Arial',
    marginRight: '10px',
    textAlign: 'left' 
}

const labelDiv = {
    display: 'flex',
    padding: 10,
    paddingBottom: 20,
    paddingTop: 10,
}

const inputs = {
    height: '30px',
    width: '300px',
    fontSize: '18px',
    marginLeft: 'auto',
}

const buttons = {
    fontSize: '24px',
    padding: 8,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 10,
    margin: 10,
}

const HomeScreen = () => {
    const emailInput = document.getElementById('emailInput'); // Replace 'emailInput' with the actual ID of your email input element
    const passwordInput = document.getElementById('passwordInput');


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleLogin = () => {
    
    //     let enteredEmail = emailInput.value;
    //     let enteredPassword = passwordInput.value;
    //     console.log(email)
    //     console.log(password)
    
    //     const storedAccountInfoJSON = localStorage.getItem('accountInfo');
        
    //     if (storedAccountInfoJSON) {
    //     const storedAccountInfo = JSON.parse(storedAccountInfoJSON);
        
    //     if (enteredEmail === storedAccountInfo.email && enteredPassword === storedAccountInfo.password) {
    //         alert('Login successful');
    //         return;
    //     }
    //     }
  
    // alert('Invalid email or password');
    };
  


    const handleCreateAccount = () => {
    
        let email = emailInput.value;
        let password = passwordInput.value;
        console.log(email)
        console.log(password)
    
        const accountInfo = {
        email,
        password,
        };
        console.log(accountInfo)
        
        alert('Account created successfully');
    };
  

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            height: '100vh',
            textAlign: 'center',
            justifycontent: 'center',
        }}>

            <form>
                <div style={inlineBlock}>

                    <p style={testCalendar}>ASM Test Calendar</p>

                    <hr styles={lineBreak}/>

                    <div style={labelDiv}>
                        <label style={labels}>
                            Email:
                        </label>
                        <input style={inputs} id="emailInput" type="email" value={email} onChange={handleEmailChange} />
                    </div>

                    <div style={labelDiv}>
                        <label style={labels}>
                            Password:
                        </label>
                        <input style={inputs} id="passwordInput" type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    

                    <a href='/Dashboard'><button style={buttons} type='button' onClick={handleLogin} >Login</button></a>

                    <button style={buttons} type="button" onClick={handleCreateAccount}>
                    Create Account
                    </button>

                </div>  
            </form>


        </div>

        
    );
};

export default HomeScreen;
