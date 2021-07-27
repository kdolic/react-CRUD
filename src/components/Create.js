import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import '../App.css';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let history = useHistory();

    const postData = () => {
        axios.post(`https://61004b34bca46600171cf83a.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
        .then(() => {
            history.push('/read');
        })
        .catch(err => {
            console.log('Error Message: ' + err)
        })
}

    return (
    <Form className='create-form'>
        <h2 className='main-header'>CREATE</h2>
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
        </Form.Field>
        <Button className='ui inverted green button' onClick={postData} type='submit'>Submit</Button>
    </Form>
    )
}

export default Create
