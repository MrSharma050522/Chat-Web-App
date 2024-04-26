import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { setUserDetails } from "../Redux/Reducer"
import { TextField, Grid, Paper, Button } from '@mui/material';
import HttpService from '../Services/HttpService';

const Register = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await HttpService.createNewUser(formData);
            console.log("Response -> ", response);
            dispatch(setUserDetails(response.data));
            // localStorage.setItem('name', 'Deepak');
            // You can handle form submission here, e.g., send form data to an API
            console.log(formData);
        } catch (error) {
            console.log("Error -> ", error);
        }

    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={10} sm={6} md={4}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
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
                            style={{ marginTop: '10px' }}
                        >
                            Submit
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