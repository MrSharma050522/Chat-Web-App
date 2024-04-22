import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChatPage from "./ChatPage";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Page/Home"
import About from "../Page/About"
import Contact from "../Page/Contact"

const drawerWidth = 240;

const Sidebar = () => {
    const [chatMessage, setChatMessage] = useState([]);
    const [groupNameArray, setGroupNameArray] = useState(["Family Group",
        "College Buddies",
        "Work Team",
        "Neighborhood Watch",
        "Fitness Enthusiasts",
        "Book Club",
        "Travel Lovers",
        "Foodies Club",
        "Music Fans",
        "Movie Buffs"])
    const [groupName, setGroupName] = useState("Text");



    // Function to handle the chat of a group
    const groupNameChangeHandler = (event, text) => {
        setGroupName(text);
        console.log("Text", text);
        let tempArray = [];
        for (let i = 0; i < 20; i++) {
            tempArray.push(text + " " + i);
        }
        console.log("Temp Array", tempArray);
        setChatMessage(tempArray);
    }

    useEffect(() => {
        setGroupName(groupNameArray[0]);
        groupNameChangeHandler(null, groupNameArray[0]);
    }, []);


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {groupName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {groupNameArray.map((text, index) => (
                        <ListItem component={Link} to={`/${text.toLowerCase()}`} key={text} disablePadding onClick={(event) => groupNameChangeHandler(event, text)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    {/* <Link to="/home">
                        <ListItem key={"1"} disablePadding >
                            <ListItemButton>
                                <ListItemIcon>
                                    {0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={"Home"} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/about">
                        <ListItem key={"2"} disablePadding >
                            <ListItemButton>
                                <ListItemIcon>
                                    {0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={"About"} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/contact">
                        <ListItem key={"3"} disablePadding >
                            <ListItemButton>
                                <ListItemIcon>
                                    {0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={"Contact"} />
                            </ListItemButton>
                        </ListItem>
                    </Link> */}

                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                {/* <ChatPage MSG_ARR={chatMessage} /> */}
                <Routes>
                    <Route path="/:text" element={<ChatPage MSG_ARR={chatMessage}/>} />
                    {/* <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </Box>
        </Box>
    );
}


export default Sidebar;