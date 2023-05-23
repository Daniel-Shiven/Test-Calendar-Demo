import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const button = {
    fontSize: 20,
    fontFamily: 'Georgia',
    borderRadius: 3,
    padding: 5,
    paddingRight: 8,
    paddingLeft: 8,
    marginBottom: 5,
    width: '200px',
}

const labels = {
    fontSize: '24px',
    fontFamily: 'Arial',
    marginRight: '10px',
    textAlign: 'left' 
}

const labelDiv = {
    display: 'flex',
    alignItems: 'center',
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

const submit = {
    fontSize: 20,
    fontFamily: 'Georgia',
    borderRadius: 3,
    padding: 5,
    paddingRight: 8,
    paddingLeft: 8,
    marginBottom: 5,
    width: '200px',
}

// Dashboard component
const Dashboard = () => {
  const [date, setDate] = useState('');
  const [testName, setTestName] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Date:', date);
    console.log('Test Name:', testName);
    console.log('Selected Class:', selectedClass);
  };

  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
    }}
    className="dashboard">
        <div style={{
        alignItems: 'left',
        backgroundColor: 'grey',
        height: '100vh',
        padding: 15,
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}>

            <a href='/Dashboard'><button style={button}>Submit a Test</button></a>
            <button style={button}>Your Classes</button>
            <button style={button}>Edit Classes</button>
            <button style={button}>Your Tests</button>
            <button style={button}>Edit Tests</button>
            <button style={button}>Calendar</button>
        </div>

            
        <div style={{ 
        marginTop: -10,
        margin: 'auto',
        width: '40%',
        height: '100vh',
        }}
        className="test-section">
            <h2 style={{
                fontSize: 36,
                textAlign: 'center',
            }}>Submit a Test</h2>

            <form style={{
                display: 'flex',
                flexDirection: 'column',
            }} onSubmit={handleSubmit}>

               
                <div style={labelDiv}>
                    <label style={labels}>
                        Test Date:
                    </label>
                    <input style={{
                        height: '30px',
                        width: '300px',
                        fontSize: '18px',
                        marginLeft: 'auto',
                        }} type="date" />
                </div>

                <div style={labelDiv}>
                    <label style={labels}>
                        Test Name:
                    </label>
                    <input style={inputs} type="text" />
                </div>

                <div style={labelDiv}>
                    <label style={labels}>
                        Test Subject:
                    </label>
                    <input style={inputs} type="text" />
                </div>

                <div style={labelDiv}>
                    <p style={labels}>Class: {selectedOption}</p>
                    <select style={{
                        height: '30px',
                        width: '308px',
                        fontSize: '18px',
                        marginLeft: 'auto',
                    }} value={selectedOption} onChange={handleOptionChange}>
                        <option value="">Choose an option</option>
                        <option value="Block A Math">Block A Math</option>
                        <option value="Block D Math">Block D Math</option>
                        <option value="Block F TOK">Block F TOK</option>
                    </select>
                </div>
                <button style={submit}>Submit</button>
            </form>
        </div>
    
    </div>
  );
};

export default Dashboard;