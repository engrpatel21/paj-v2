import React from 'react'
import {Card, Image, Grid} from 'semantic-ui-react'

const ProjectTitle = ({project}) => {
    return ( 
        <Card fluid>
            <Grid>
                <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                </Grid.Column>
                <Grid.Column width={13}>
                    <Card.Content>
                    <Card.Header>{project.name}</Card.Header>
                    <Card.Meta>{project.createdAt}</Card.Meta>
                    <Card.Description>{project.description}</Card.Description>
                    </Card.Content>
                </Grid.Column> 
            </Grid>
        </Card>
    );
}

export default ProjectTitle;
