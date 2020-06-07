import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const Container = () => {

    useEffect(()=>{
        M.AutoInit();
    },[]);

    const sendMail = async (body) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const res = await axios.post('/api/sendMail', body, config);
        console.log(res.data);
    };

    const [body, setBody] = useState({
        user:"",
        subject:"",
        text:""
    });

    const { user, subject, text } = body;

    const onchange = (e) => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        });
    };

    const onsubmit = (e) => {
        e.preventDefault();
        sendMail(body);
        setBody({
            user:"",
            subject:"",
            text:""
        });
        M.toast({html:`Email send to ${user}`});
    };

    return (
        <Fragment>
            <div>
                <h3 className="center-align">NodeMailer Template App</h3>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    <form onSubmit={onsubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="user" type="email" onChange={onchange} value={user}/>
                            <label htmlFor="user" className="active">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="subject" type="text" onChange={onchange} value={subject}/>
                            <label htmlFor="subject" className="active">Subject</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="text" type="text" onChange={onchange} value={text}/>
                            <label htmlFor="text" className="active">Text</label>
                            </div>
                        </div>
                        <input className="waves-effect waves-light btn white-text" 
                            type="submit"
                            value="Send Mail"
                        />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Container