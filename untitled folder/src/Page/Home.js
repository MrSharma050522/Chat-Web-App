import React, { useEffect } from "react";
import Register from "../Components/Register";
import { useSelector } from "react-redux";

const Home = () => {
    const userDetails = useSelector(state => state.userDetails);
    console.log("UserDetails -> ", userDetails);
    useEffect(() => {
        console.log("Home is Mounted");

    }, [])
    return (
        <div>
            {/* <h1>This is Home</h1> */}
            <Register />
        </div>
    )
}

export default Home;