import React, { useEffect } from "react";

const About = () => {
    console.log("About is Mounted");
    useEffect(() => {
        console.log("About is Mounted");

    }, [])
    return (
        <h1>This is About</h1>
    )
}

export default About;