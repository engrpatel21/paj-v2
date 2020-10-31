import React, { useState } from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import TaskCard from './TaskCard'
import { useEffect } from 'react';

const KanbanBoard = (props) => {

    const [columns, setColums] = useState(null)
  

    useEffect(()=> {
        setColums(props.taskBoard)
    }, [props.taskBoard])
    

    const onDragEnd = (result, columns, setColums) => {
        if(!result.destination) return;
        const { source, destination } = result
        console.log(result)
        if( source.droppableId !== destination.droppableId){
            const sourceCol = columns[source.droppableId]
            const destCol = columns[destination.droppableId]
            const sourceItems = [...sourceCol.items]
            const destItems = [...destCol.items]
            const [removed] = sourceItems.splice(source.index, 1)
            removed.taskStatus = destination.droppableId
            destItems.splice(destination.index, 0, removed)
            const newCol = {
                ...columns,
                [source.droppableId]: {
                    ...sourceCol,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destCol,
                    items: destItems
                }
            }
            
            setColums(newCol, props.updateStatus(newCol._id, newCol))
            
        }else{
            const column = columns[source.droppableId]
            const copiedItems = [...column.items]
            const [removed] = copiedItems.splice(source.index, 1)
            copiedItems.splice(destination.index, 0, removed)
            setColums({
                ...columns,
                [source.droppableId] : {
                    ...column,
                    items: copiedItems
                }
            })
        }
    }
    
    return ( 
        <> 
        {columns ? 
        <div> 
            
     
            <div style={{ display: 'flex', justifyContent:'center', height: '100%' }}>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColums)}>
                    {columns ? Object.entries(columns).map(([id, col]) =>{
                        return(
                            <div key={id} >
                            {id === 'backlog' || id === 'inProgress' || id === 'completed' ? 
                            <div key={id} style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                              }} >
                            <h2>{col.name === 'backlog' ? 'Backlog' : col.name === 'inProgress' ? 'In Progress' : col.name === 'completed' ? 'Completed' : '' }</h2>
                            <div style={{margin: 8}}>
                            <Droppable droppableId={id} >
                                {(provided, snapshot) =>{
                                    return(
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                padding: 4,
                                                width: 250,
                                                minHeight: 500
                                            }}
                                        >   
                                            {col.items ? col.items.map((item, index) =>{
                                                return(
                                                    <Draggable key={`${item._id}`} draggableId={`${item._id}`} index={index} >
                                                       {(provided, snapshot) => {
                                                            return(
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                        userSelect: 'none',
                                                                        padding: 16,
                                                                        margin: ' 0 0 8px 0',
                                                                        minHeight: '50px',
                                                                        background: snapshot.isDragging ? '#263b4a' : '#456c86',
                                                                        color: 'white',
                                                                        ...provided.draggableProps.style,
                                                                        cursor: 'default'
                                                                    }}
                                                                >
                                                                     <TaskCard task={item} deleteTask={props.deleteTask} editTask={props.editTask}/>
                                                                        {item.taskStatus === 'backlog' && columns.backlog.items.length -1 === index ? 'show me' : 'dont'}
                                                               </div>
                                                           )
                                                       }}
                                                    </Draggable>
                                                )
                                            }) : ''}
                                            {provided.placeholder}
                                        </div>
                                    )
                                }}
                            </Droppable>
                            </div>
                           
                        </div>
                        : '' }
                        </div>
                        )
                    }) : ''}
                </DragDropContext>
                    
            </div>
            </div>
            :
            ''}
         
        </>
     );
}
 
export default KanbanBoard;