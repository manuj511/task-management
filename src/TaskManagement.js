import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListView from './ListView';
import AddTask from './addTask';
import isEqual from 'lodash/isEqual';

const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
  });

// this component renders the three lists 
export const TaskManagement=()=>{
    const classes=useStyles();
    const [items,setItems]=useState({todo:[],progress:[],done:[]});
    const list=['todo','progress','done'];
    // callback function to add new items to the list
    const addNewTask=(task)=>{
        const newTask = task ? task : null;
        const todoItems = items.todo;
        todoItems.push(newTask);
        const updatedItems = {
            ...items,
            todoItems
        };
        setItems(updatedItems);
    }
    // common functionality to move items to either lists
    const handleTaskMove = (src,dest,item)=>{
        let srcList=items[src];
        let destList=items[dest];
        // modify sourcelist to remove the moved item
        const newSrcList = srcList.filter((it)=>!isEqual(it,item));
        const newDestList = destList;
        // modify destination list to add the moved item
        newDestList.push(item)
        let updatedItems={...items};
        updatedItems[src]=newSrcList;
        updatedItems[dest]=newDestList;
        setItems(updatedItems);
    }
    return(
        <>
        <div className={classes.root}>
            {
                list.map((listInstance)=>{
                    return <ListView listLabels={list} listName={listInstance} listItems={items[listInstance]} moveHandler={handleTaskMove}/>;
                })
            }
        </div>
        <AddTask addNewTask={addNewTask}/>
    </>
    )
}
export default TaskManagement;