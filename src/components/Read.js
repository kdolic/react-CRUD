import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

const Read = () => {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://61004b34bca46600171cf83a.mockapi.io/fakeData`)
            .then((res) => {
                setAPIData(res.data);
            })
            .catch(err => {
                console.log('Error Message: ' + err)
            })
    }, [])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Yes' : 'No'}</Table.Cell>
                        </Table.Row>
                    )})}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Read
