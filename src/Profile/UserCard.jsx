import React, { Component } from 'react'
import {Card} from 'semantic-ui-react'
import './Profile.css'

class UserCard extends Component {
    state = {  }
    render() { 
        return ( 
            <Card
                image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                header="UserName"
                description='sometthing'
            />
         );
    }
}
 
export default UserCard;