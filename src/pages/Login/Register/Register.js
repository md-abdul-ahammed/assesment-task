import React from "react";
import { useForm } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";


const Register = () => {
    const { register, handleSubmit } = useForm();

    const { registerUser } = useAuth();

    const onSubmit = data => {
        registerUser(data.email, data.password)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: 1, height: '100vh', alignItems: "center" }}>
            <Box sx={{ width: '25%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ marginBottom: '1rem' }}>
                        <InputLabel>
                            Email
                        </InputLabel>
                        <Input
                            sx={{ width: '100%' }}
                            {...register("email")}
                            placeholder="Enter your Email"
                            type="email"
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </Box>
                    <Box sx={{ marginBottom: '1rem' }}>
                        <InputLabel>
                            Password
                        </InputLabel>
                        <Input
                            sx={{ width: '100%' }}
                            {...register("password")}
                            type="password"
                            placeholder="Enter your Password"
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockRoundedIcon />
                                </InputAdornment>
                            }
                        />
                    </Box>
                    <Button sx={{ width: 1 }} type="submit" variant="contained">
                        Register
                    </Button>
                    <small style={{ width: '80%' }} className='d-flex mx-auto'>Already Registered? Please,  <NavLink style={{ fontWeight: 'bold' }} to='/login'> Login</NavLink></small>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: '1rem' }}>
                        Or Login Using
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button>
                            <FcGoogle style={{ fontSize: "2rem" }} />
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Register;