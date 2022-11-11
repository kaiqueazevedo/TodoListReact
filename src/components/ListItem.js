import React from 'react'
import Card from './Card';





function DoneImg(props){
    if(props.done){
        return(<img alt="done" src="./assts/checked.png"></img>)
    }else{
        (<img alt="undone" src="./assts/close.png"></img>)

    
    }
}

function ListItem(props){

    return( <li  key={props.item.id}>
            <Card className={props.item.done ?"done item" :"item"}>
        {props.item.text}
        <div>
        <button onClick={()=>{props.onDone(props.item)}}><DoneImg>done={props.item.done}</DoneImg></button>
        <button onClick={()=>{props.onItemDeleted(props.item)}}><img alt="delete" src="./assets/delete.png"></img></button>
        </div>
        </Card>
        </li>)

        }

export default ListItem;