import { Alert, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        axios.put('https://pacific-refuge-96429.herokuapp.com/users/admin', user
        )
            .then(res => {
                if (res.data.modifiedCount) {
                    console.log(res.data)
                    setEmail('')
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <Container className='text-center'>
            <h2 className="admin-heading">Make a New Admin</h2>
            <form className="admin-form" onSubmit={handleAdminSubmit}>
                <input
                    label="Email"
                    placeholder="Enter admin email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                <Button type='submit' variant="contained">Make Admin</Button>
                {success && <Alert severity="success" className="alert">Your have successfully made a new admin</Alert>}
            </form>

        </Container>
    );
};

export default MakeAdmin;