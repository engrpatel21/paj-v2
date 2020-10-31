import React, { Component } from 'react'
import {Card, Image, Grid} from 'semantic-ui-react'

class ProjectTitle extends Component {
    state = {  }
    render() { 
        return ( 
                <Card fluid>
                    <Grid>
                        <Grid.Column width={3}>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Card.Content>
                            <Card.Header>Project Title</Card.Header>
                            <Card.Meta>Created Dated</Card.Meta>
                            <Card.Description>Project Description</Card.Description>
                            </Card.Content>
                        </Grid.Column> 
                    </Grid>
                </Card>   
        );
    }
}
export default ProjectTitle;