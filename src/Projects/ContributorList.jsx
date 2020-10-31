import React, { Component } from 'react'
import { Card, Table } from 'semantic-ui-react'

class ContributorList extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Card fluid>
                <Card.Content>
                    <Card.Header className='text-center'>Contributors</Card.Header>
                    
                        <div className="center">
                            <Table collapsing striped>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Email</Table.HeaderCell>
                                        <Table.HeaderCell>Admin</Table.HeaderCell>
                                        <Table.HeaderCell>Remove</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell> <a href="/">Name</a></Table.Cell>
                                        <Table.Cell>Email</Table.Cell>
                                        <Table.Cell>Admin</Table.Cell>
                                        <Table.Cell>Remove</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </Card.Content>
                </Card>
            </>
         );
    }
}
 
export default ContributorList;