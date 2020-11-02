import React, { Component } from 'react'
import { Card, Table, Button, Loader } from 'semantic-ui-react'
import CustomModal from '../Modal/CustomModal'
import CreateContributor from './CreateContributor'
import { connect } from 'react-redux'
import { getContributors } from '../actions/contributorActions'

class ContributorList extends Component {
    state = { 
        open: false
    }

    componentDidMount(){
        this.props.getContributors(this.props.projectId)
    }

    handleClose = () => this.setState({ open: false})
    handleClick = () => this.setState({ open: !this.state.open})

    render() {
        const {open} = this.state
        const {contributors, isLoading} = this.props
        const addContributor = (<CreateContributor handleClose={this.handleClose} projectId={this.props.projectId}/>)
        const loading = (<Loader active inline='centered' />)
        const contributorData = (
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
                {contributors.map(contributor => {
                        return(
                            <Table.Row key={contributor._id}>
                                <Table.Cell> <a href="/">{contributor.user.name}</a></Table.Cell>
                                <Table.Cell>{contributor.user.email}</Table.Cell>
                                <Table.Cell>{contributor.isAdmin ? 'Yes' : 'No'}</Table.Cell>
                                <Table.Cell>Remove</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        )

        return ( 
            
                <Card fluid>
                <Card.Content>
                    <Card.Header className='text-center'>Contributors <Button
                        content='Add Contributor'
                        negative={open}
                        positive={!open}
                        onClick={this.handleClick}
                    /></Card.Header>
                        <div className="center">
                            {isLoading ? loading : contributorData}
                        </div>
                    </Card.Content>
                    <CustomModal child={addContributor} size='tiny' duration={600} animation='fade' open={open} header={'Add Contributor'}/>
                </Card>
            
         );
    }
}

const mapStateToProps = state => ({
    contributors: state.contributors.contributors,
    isLoading: state.contributors.isLoading
})

export default connect(mapStateToProps, {getContributors})(ContributorList);