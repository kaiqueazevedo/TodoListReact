import React from 'react'






function DoneImg(props){
    if(props.done){
        return(<img alt="done" src="./assts/checked.png"></img>)
    }else{
        (<img alt="undone" src="./assts/close.png"></img>)

    
    }
}

function List(props){

    return( <ul>
        {props.items.map(item =><li className={item.done ?"done" :""} key={item.id}>
        {item.text}
     
        <button onClick={()=>{props.onDone(item)}}><DoneImg>done={item.done}</DoneImg></button>
        <button onClick={()=>{props.onItemDeleted(item)}}><img alt="delete" src="./assets/delete.png"></img></button>
        </li>)}
    </ul>)

        }

export default List;