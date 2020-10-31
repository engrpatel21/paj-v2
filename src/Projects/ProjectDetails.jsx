import React, { Component } from 'react'
import ProjectTitle from './ProjectTitle'
import ContributorList from './ContributorList'
import FeatureList from './FeatureList'
import {Container} from 'semantic-ui-react'

class ProjectDetails extends Component {
    state = {  }
    render() { 
        return (
            <>
            <Container>
                <ProjectTitle/>
                <ContributorList/>
                <FeatureList/>
            </Container>
                
        
                
           
            </>
        );
    }
}

export default ProjectDetails;