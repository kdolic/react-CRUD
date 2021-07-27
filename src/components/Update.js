import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import '../App.css';

const Update = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);

    let history = useHistory();

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);

const updateAPIData = () => {
    axios.put(`https://61004b34bca46600171cf83a.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        checkbox
	})
    .then(() => {
        history.push('/read')
    })
    .catch(err => {
        console.log('Error Message: ' + err)
    })
}

    return (
        <div>
            <h2 className='main-header'>UPDATE</h2>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button className='ui inverted green button' type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}

export default Update
