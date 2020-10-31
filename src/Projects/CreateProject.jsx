import React, { Component } from 'react'
import {Form, Input} from 'semantic-ui-react'
import {addProject} from '../actions/projectActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class CreateProject extends Component {
    state = { 
        name:'',
        description: ''
    }

    static propTypes = {
        addProject: PropTypes.func.isRequired
    }

    handleChange = e =>{
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = async e => {
        e.preventDefault()
        const {name, description} = this.state
        const newProject = {name, description}
        await this.props.addProject(newProject)
        this.props.handleClose()
    }

    render() { 
        return (
        <Form onSubmit={this.handleSubmit} >  
            <Form.Field>
                <label>Project Name</label>
                    <Input
                        fluid={true}
                        placeholder='Project Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
            </Form.Field>
            <Form.TextArea
                    label='Description'
                    name='description'
                    placeholder='Description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    
            />
            <Form.Button >Create Project</Form.Button>
        </Form>   
        );
    }
}

export default connect(null, {addProject})(CreateProject);