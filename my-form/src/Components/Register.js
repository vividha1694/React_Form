import React from "react";

export default function Register(props) {
    let btnStyle;
    btnStyle = {
        backgroundColor:"green",
        color:"white",
        };
        let btnText, passBoxType;
        if (props.showPass === true) {
            btnStyle.backgroundColor = "red";
            btnText = "Hide Password";
            passBoxType = "text";
        }else {
            btnText = "Show Password";
            passBoxType = "password"; 
        }
    return (
        <div className="container card p-3 mt-2 register-container">
            <h1 className="=text-center">Registration Form</h1>
            <form onSubmit={props.submit}>
                <div className="form-group">
                    <label htmlform="name">NAME : </label>
                    <input type="text" name="name" required className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlform="name">EMAIL : </label>
                    <input type="email" name="email" required className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlform="name">PASSWORD : </label>
                    <input type={passBoxType} name="password" required className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary m-1">Register</button>
                <button type="button" className="btn m-1" onClick={props.click} style={btnStyle}>
                   {btnText}
                </button>
            </form>
        </div>
        
    );
}
