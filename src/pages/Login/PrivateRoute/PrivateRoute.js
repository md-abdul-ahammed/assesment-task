import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";
import Box from '@mui/material/Box';
import useAuth from '../../../hooks/useAuth';
import LinearProgress from '@mui/material/LinearProgress';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <Box sx={{ width: '80%', mx: 'auto' }}>
                <LinearProgress />
            </Box>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;