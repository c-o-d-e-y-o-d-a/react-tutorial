import React from 'react';

function Contact(props){
    const {username} = props;
    return(
        <><h1>This is the Contact Page {username}</h1></>
    )
}

export default Contact;