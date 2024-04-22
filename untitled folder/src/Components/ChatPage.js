import React, { useEffect, useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';

const ChatPage = (props) => {
    console.log("Props -> ", props);
    const [chatMessage, setChatMessage] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesEndRef = useRef(null);

    // Function to hanlde change in new message
    const newMessageChangeHandler = (event) => {
        setNewMessage(event.target.value);
    }

    // Function send new message to chat
    const sendMessageHandler = () => {
        const tempArray = [...chatMessage];
        tempArray.push(newMessage);
        setChatMessage(tempArray);
        setNewMessage("");
        console.log(newMessage);
    }

    useEffect(() => {
        console.log("Mounting chat Page")
        let tempArray = [];
        for (let el of props.MSG_ARR) {
            tempArray.push(el);
        }
        console.log("From Chat Page", tempArray);
        setChatMessage(tempArray);
    }, [props])

    useEffect(() => {
        scrollToBottom();
    }, [chatMessage]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        // <div>
        //     {chatMessage && chatMessage?.map((el, i) => {
        //         return (
        //             <div key={i} style={{ background: i % 2 === 0 ? "grey" : "lightgreen", color: i % 2 === 0 ? "white" : "red", textAlign: i % 2 === 0 ? "left" : "right" }}>
        //                 <p>{el}</p>
        //             </div>
        //         );
        //     })}
        //     <form onSubmit={(e) => { e.preventDefault(); sendMessageHandler(); }} style={{ display: 'flex', alignItems: 'center' }}>
        //         <FormControl fullWidth sx={{ m: 1, flexGrow: 1 }}>
        //             <InputLabel htmlFor="outlined-adornment-amount">Text</InputLabel>
        //             <OutlinedInput
        //                 id="outlined-adornment-amount"
        //                 startAdornment={<InputAdornment position="start"></InputAdornment>}
        //                 label="Amount"
        //                 value={newMessage} onChange={newMessageChangeHandler}
        //             />
        //         </FormControl>
        //         <Button type="submit" variant="outlined"><SendIcon /></Button>
        //     </form>

        // </div>
        <div>
            <div style={{ height: "calc(100vh - 100px)", overflowY: "auto", paddingBottom: "50px" }}>
                {chatMessage && chatMessage?.map((el, i) => {
                    const isEven = i % 2 === 0;
                    const messageStyle = {
                        background: isEven ? "grey" : "lightgreen",
                        color: isEven ? "white" : "black",
                        textAlign: isEven ? "left" : "right",
                        borderRadius: "10px", // Optional: Adds rounded corners to the message bubbles
                        maxWidth: "70%", // Optional: Limits the width of the message bubbles
                        alignSelf: isEven ? "flex-start" : "flex-end", // Aligns the messages to the left or right
                        marginBottom: "5px", // Adds spacing between messages
                        padding: "8px 12px", // Adds padding inside the message bubbles
                    };
                    const containerStyle = {
                        display: "flex",
                        justifyContent: isEven ? "flex-start" : "flex-end",
                    };
                    return (
                        <div key={i} style={containerStyle}>
                            <div style={messageStyle}>
                                <p style={{ margin: 0 }}>{el}</p>
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            <div style={{ position: "fixed", bottom: 0, left: 249, right: 0, backgroundColor: "transparent", padding: "10px" }}>
                <form onSubmit={(e) => { e.preventDefault(); sendMessageHandler(); }} style={{ display: 'flex', alignItems: 'center' }}>
                    <FormControl fullWidth sx={{ m: 1, flexGrow: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Text</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                            label="Amount"
                            value={newMessage} onChange={newMessageChangeHandler}
                            style={{ width: "100%" }} // match the width of the messages container
                        />
                    </FormControl>
                    <Button type="submit" variant="outlined"><SendIcon /></Button>
                </form>
            </div>


        </div>
    )
}

export default ChatPage;


// SCROLLING TO THE BOTTOM OF THE PAGE IS DONE HERE
// -----------------------------------------------------------------------------
// import React, { useEffect, useState, useRef } from "react";
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button'
// import FormControl from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import SendIcon from '@mui/icons-material/Send';
// const ChatPage = (props) => {
//     console.log("Props -> ", props);
//     const [chatMessage, setChatMessage] = useState([]);
//     const [newMessage, setNewMessage] = useState("");
//     const messagesEndRef = useRef(null);
//     // Function to hanlde change in new message
//     const newMessageChangeHandler = (event) => {
//         setNewMessage(event.target.value);
//     }

//     // Function send new message to chat
//     const sendMessageHandler = () => {
//         const tempArray = [...chatMessage];
//         tempArray.push(newMessage);
//         setChatMessage(tempArray);
//         setNewMessage("");
//         console.log(newMessage);
//     }

//     useEffect(() => {
//         console.log("Mounting chat Page")
//         let tempArray = [];
//         for (let el of props.MSG_ARR) {
//             tempArray.push(el);
//         }
//         console.log("From Chat Page", tempArray);
//         setChatMessage(tempArray);
//     }, [props])

//     useEffect(() => {
//         scrollToBottom();
//     }, [chatMessage]);

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }

//     return (
//         <div>
//             <div style={{ height: "calc(100vh - 100px)", overflowY: "auto", paddingBottom: "50px" }}>
//                 {chatMessage && chatMessage?.map((el, i) => {
//                     return (
//                         <div key={i} style={{ background: i % 2 === 0 ? "grey" : "lightgreen", color: i % 2 === 0 ? "white" : "red", textAlign: i % 2 === 0 ? "left" : "right" }}>
//                             <p>{el}</p>
//                         </div>
//                     );
//                 })}
//                 <div ref={messagesEndRef} />
//             </div>
//             <div style={{ position: "fixed", bottom: 0, left: 249, right: 0, backgroundColor: "white", padding: "10px", borderTop: "1px solid lightgray" }}>
//                 <form onSubmit={(e) => { e.preventDefault(); sendMessageHandler(); }} style={{ display: 'flex', alignItems: 'center' }}>
//                     <FormControl fullWidth sx={{ m: 1, flexGrow: 1 }}>
//                         <InputLabel htmlFor="outlined-adornment-amount">Text</InputLabel>
//                         <OutlinedInput
//                             id="outlined-adornment-amount"
//                             startAdornment={<InputAdornment position="start"></InputAdornment>}
//                             label="Amount"
//                             value={newMessage} onChange={newMessageChangeHandler}
//                             style={{ width: "100%" }} // match the width of the messages container
//                         />
//                     </FormControl>
//                     <Button type="submit" variant="outlined"><SendIcon /></Button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default ChatPage;