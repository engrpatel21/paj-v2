import React, { Component } from 'react'
import {Form, Input, Button} from 'semantic-ui-react'
import {addContributor} from '../actions/contributorActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class CreateContributor extends Component {
    state = { 
        email:'',
    }

    static propTypes = {
        addContributor: PropTypes.func.isRequired
    }

    handleChange = e =>{
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = async e => {
        e.preventDefault()
        const {email} = this.state
        const newContributor = {email}
        await this.props.addContributor(this.props.projectId, newContributor)
        this.props.handleClose()
    }

    render() { 
        return (
        <Form onSubmit={this.handleSubmit} >  
            <Form.Field>
                <label>Project Name</label>
                    <Input
                        fluid={true}
                        placeholder='User Email'
                        name='email'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
            </Form.Field>
          
                <Button >Create Contributor</Button>
                <Button content='Close' floated='right' onClick={this.props.handleClose} />  
           
        </Form>   
        );
    }
}

export default connect(null, {addContributor})(CreateContributor);