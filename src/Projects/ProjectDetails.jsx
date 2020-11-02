import React  from 'react'
import ProjectTitle from './ProjectTitle'
import ContributorList from './ContributorList'
import FeatureList from './FeatureList'
import {Container} from 'semantic-ui-react'


const ProjectDetails = (props) => {
    const {project} = props.location.state
    return ( 
        <Container>
            <ProjectTitle project={project} />
            <ContributorList projectId={project._id}/>
            <FeatureList project={project}/>
        </Container>
    );
}

export default ProjectDetails;
