import React from 'react'
import {Modal, Transition} from 'semantic-ui-react'

const CustomModal = ({child, size, open, animation, duration, handleCLose}) => {
    return ( 
        <Transition visible={open} animation={animation} duration={duration}>
        <Modal
            size={size}
            open={open}
            onClose={handleCLose}
        >
            <Modal.Header>Create Project</Modal.Header>
            <Modal.Content>
                {child}
            </Modal.Content>
        </Modal>
        </Transition>
    
     );
}
 
export default CustomModal;

