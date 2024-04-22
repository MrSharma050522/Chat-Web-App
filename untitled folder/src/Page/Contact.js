import React, { useEffect } from "react";

const Contact = () => {
    console.log("Contact is Mounted");
    useEffect(() => {
        console.log("Contact is Mounted");

    }, [])
    return (
        <h1>This is Contact</h1>
    )
}

export default Contact;