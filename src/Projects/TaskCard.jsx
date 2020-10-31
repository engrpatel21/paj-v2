import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react'

const CardComp = () => {
 
    
    return ( 

        <Card>
        <Image  wrapped ui={false} />
        <Card.Content>
          <Card.Header>Taskname</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            taskcontent
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button content='delete' />

        </Card.Content>
      </Card>
    );
}
 
export default CardComp;