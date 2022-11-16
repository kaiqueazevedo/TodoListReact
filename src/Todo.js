import React, { useEffect, useState } from 'react'
import List from './components/List'
import Item from './components/Item'
import TodoForm from './components/TodoForm'
import Modal from './components/Modal'
import './Todo.css'


const SAVED_ITEMS = "savedItems"


function Todo(){

    const[showModal, setShowModal] = useState(false)
    
    const [items,setItems] = useState([]);


    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if(savedItems){
            setItems(savedItems);
        }

    },[])

    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
},[items])



    function onAddItem(text){

        let it = new Item(text);

        setItems([...items, it])


    }

    // function onDone(item){

    //     console.log("done")
    // }

    
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

function onHideModal(e){
    setShowModal(false);

}

return (<div className="container">
    <header className='header'><h1>Todo</h1><button onClick={()=>{setShowModal(true)}} className='addButton' >+</button></header>
    {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}
  

   <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

   <Modal show={showModal} onHideModal={onHideModal} ><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
    </div>)

}



export default Todo