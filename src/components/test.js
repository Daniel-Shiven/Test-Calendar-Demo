
<form>
<div style={{textAlign: 'center'}}>
    <div style={inlineBlock}>

        <p style={testCalendar}>ASM Test Calendar</p>

        <hr styles={lineBreak}/>

        <div style={labelDiv}>
            <label style={labels}>
                Email:
            </label>
            <input style={inputs} id="emailInput" type="email" value={email} onChange={handleEmailChange} />
            </div>

            <br />

            <div style={labelDiv}>
            <label style={labels}>
                Password:
            </label>
            <input style={inputs} id="passwordInput" type="password" value={password} onChange={handlePasswordChange} />
        </div>

        <button style={buttons}><a href="/Dashboard">Login</a></button>

        <button style={buttons} type="button" onClick={handleCreateAccount}>
        Create Account
        </button>
    </div>
</div>

</form>