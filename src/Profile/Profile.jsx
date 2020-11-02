import React, { Component } from 'react'
import './Profile.css'
import UserCard from './UserCard'
import ProjectList from './ProjectList'
import {Grid, Container} from 'semantic-ui-react'



class Profile extends Component {
    state = { 

    }

    render() {
        return ( 
            <>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <UserCard/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <ProjectList history={this.props.history}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                
            </>
        );
    }
}
 
export default Profile;