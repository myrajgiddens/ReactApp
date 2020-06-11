import React from 'react';

const ContactPage = () => {
    return (
        <div>
           <h3> hello from the contact page </h3>
           <form> 
               <input type="text" placeholder="First Name" />
               <input type="e-mail" placeholder="E-mail Address" />
               <input type="text" placeholder="Your message here" />
               <button type="submit">Submit</button>
           </form>
        </div>
    );
};

export default ContactPage;