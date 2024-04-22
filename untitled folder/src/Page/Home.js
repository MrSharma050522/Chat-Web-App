import React, { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        console.log("Home is Mounted");

    }, [])
    return (
        <h1>This is Home</h1>
    )
}

export default Home;