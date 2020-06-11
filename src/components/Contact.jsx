import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
    return (
        <div>
           <h3>Contact Page</h3>
            <div className="card card-body my-3">
                <form className="form-inline"> 
                    <div className="input-group">
                        <div className="input-group-text bg-success text-white"></div>
                            <input type="text" placeholder="First Name" />
                            <input type="e-mail" placeholder="E-mail Address" />
                            <input type="text" className=""placeholder="Your message here" />
                            <button type="submit" className="btn btn-block btn-success mt-3">Submit</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;