import React, { Component } from 'react'
import { Card, Table, Button, Loader } from 'semantic-ui-react'
import CreateProject from '../Projects/CreateProject'
import CustomModal from '../Modal/CustomModal'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getUserProjects, deleteProject} from '../actions/projectActions'

class ProjectList extends Component {
    state = { 
        open: false,
    }

    static propTypes = {
        projects: PropTypes.object.isRequired
    }

    componentDidMount(){
       this.props.getUserProjects()
    }

    handleClose = () => this.setState({ open: false})
    handleClick = () => this.setState({ open: !this.state.open})


    goToProjectDetails = ( project) => {
        console.log(project)
        this.props.history.push({
            pathname: `/project/`,
            state: {project}
        })
    }

    render() { 
        const {open} = this.state
        const { userProjects, isLoading } = this.props.projects
        const { deleteProject } = this.props
        const createProject = (<CreateProject handleClose={this.handleClose}/>)
        const loader = (<Loader active inline='centered' />)
        const projectData = (
                <Table collapsing striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Project Name</Table.HeaderCell>
                        <Table.HeaderCell>Project Owner</Table.HeaderCell>
                        <Table.HeaderCell>Remove</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {userProjects.map(project =>{
                    return (<Table.Row key={project._id}>
                                <Table.Cell className='cell' onClick={()=>this.goToProjectDetails(project.projectId)} >{project.projectId.name}</Table.Cell>
                                <Table.Cell>{project.projectId.ownerName}</Table.Cell>
                                <Table.Cell><Button icon='trash alternate outline' color='red' onClick={()=>deleteProject(project.projectId._id)} /></Table.Cell>
                            </Table.Row>) })}
                </Table.Body>
                </Table>
            )
    
        return ( 
            <>
                <Card fluid>
                <Card.Content>
                    <Card.Header>Projects <Button
                        content='Create Project'
                        negative={open}
                        positive={!open}
                        onClick={this.handleClick}
                    /></Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                        <div className='center'>
                        {isLoading ? loader : projectData}  
                        </div>
                    </Card.Content>
                    <CustomModal child={createProject} size='tiny' duration={600} animation='fade' open={open} header={'Create Project'} />
                </Card>
            </>
         );
    }
}

const mapStateToProps = state => ({
    projects: state.project
})

export default connect(mapStateToProps, {getUserProjects, deleteProject})(ProjectList);