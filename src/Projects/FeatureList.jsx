import React, { Component } from 'react'
import { Card, Table, Button } from 'semantic-ui-react'
import CustomModal from '../Modal/CustomModal'
import CreateFeature from './CreateFeature'

class FeatureList extends Component {
    state = { 
        open: false
    }

    handleClose = () => this.setState({ open: false})
    handleClick = () => this.setState({ open: !this.state.open})

    render() { 
        const { open } = this.state
        const addFeature = (<CreateFeature handleClose={this.handleClose}/>)
        return ( 
            <>
                <Card fluid>
                <Card.Content>
                    <Card.Header>FeatureList<Button
                        content='Add Contributor'
                        negative={open}
                        positive={!open}
                        onClick={this.handleClick}
                    /></Card.Header>
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
                    <CustomModal child={addFeature} size='tiny' duration={600} animation='fade' open={open} header={'Add Feature'}/>
                </Card>
            </>
         );
    }
}
 
export default FeatureList;