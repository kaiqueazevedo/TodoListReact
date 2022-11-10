import React, { useState } from 'react'
import List from './List'
import Item from './Item'
import TodoForm from './TodoForm'
import './Todo.css'

function Todo(){

    
    const [items,setItems] = useState([]);


    function onAddItem(text){

        let it = new Item(text);

        setItems([...items, it])


    }

    function onDone(item){

        console.log("done")
    }

    
function onItemDeleted(item){

    let filteredItems = items.filter(it => it.id != item.id)

    setItems(filteredItems)

}

function onDone(item){
    let updateItems = item.map(it =>{
        if(it.id === item.id){
            it.done = !it.sone;

        }
        return it;
    })
    setItems(updateItems);
}

return (<div className="container">
    <h1>Todo</h1>
    <TodoForm onAddItem={onAddItem}></TodoForm>
  

   <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
    </div>)

}



export default Todo