import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserDetails, saveToken } from "../Redux/Reducer";
import { TextField, Grid, Paper, Button } from "@mui/material";
import HttpService from "../Services/HttpService";

const Register = () => {
    const dispatch = useDispatch();
    const [newUserLogin, setNewUserLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    // Function to handle the input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to submit the form data
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let response;
            if (newUserLogin) {
                response = await HttpService.createNewUser(formData);
            } else if (!newUserLogin) {
                response = await HttpService.userLogin(formData);
            }

            console.log("Response -> ", response);
            dispatch(setUserDetails(response.data.user));
            dispatch(saveToken(response.data.token));
            // localStorage.setItem('name', 'Deepak');
            // You can handle form submission here, e.g., send form data to an API
            console.log(formData);
        } catch (error) {
            console.log("Error -> ", error);
            alert(error.response.data);
        }
    };

    // Function to handle the login/signup
    const authModeChangeHandler = () => {
        setFormData({
            name: "",
            email: "",
            password: "",
        });
        setNewUserLogin((state) => !state);
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: "100vh" }}
        >
            <Grid item xs={10} sm={6} md={4}>
                <Paper elevation={3} style={{ padding: "20px" }}>
                    <h2>{newUserLogin ? "Sign-Up" : "Sign-In"} Form</h2>
                    <form onSubmit={handleSubmit}>
                        {newUserLogin ? (
                            <TextField
                                fullWidth
                                margin="normal"
                                id="name"
                                name="name"
                                label="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        ) : (
                            ""
                        )}
                        <TextField
                            fullWidth
                            margin="normal"
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{
                                marginTop: "10px",
                                backgroundColor: "green",
                            }}
                        >
                            {newUserLogin ? "Sign-Up" : "Sign-In"}
                        </Button>
                        <Button
                            variant="text"
                            style={{ marginLeft: "10px", marginTop: "10px" }}
                            color="primary"
                            onClick={authModeChangeHandler}
                        >
                            {!newUserLogin
                                ? "Create new account"
                                : "Login with existing account"}
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Register;

// export default connect(null, { setUserDetails })(
//     Register
//   );
