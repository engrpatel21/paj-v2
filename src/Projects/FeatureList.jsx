import React, { Component } from 'react'
import { Card, Table } from 'semantic-ui-react'

class FeatureList extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Card fluid>
                <Card.Content>
                    <Card.Header>FeatureList</Card.Header>
                        <div className="center">
                            <Table collapsing striped>
                                <Table.Header>
                                    <Table.Row>
                                    <Table.HeaderCell>Feature</Table.HeaderCell>
                                    <Table.HeaderCell>Description</Table.HeaderCell>
                                    <Table.HeaderCell>Lead Developer</Table.HeaderCell>
                                    <Table.HeaderCell>Edit</Table.HeaderCell>
                                    <Table.HeaderCell>Remove</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell> <a href="/">Name</a></Table.Cell>
                                        <Table.Cell>Description</Table.Cell>
                                        <Table.Cell>Lead Dev</Table.Cell>
                                        <Table.Cell>Edit</Table.Cell>
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
 
export default FeatureList;