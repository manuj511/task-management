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
export const TaskManagement=()=>{
    const classes=useStyles();
    const [items,setItems]=useState({todo:[],progress:[],done:[]});
    const list=['todo','progress','done'];

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

    const handleTaskMove = (src,dest,item)=>{
        let srcList=items[src];
        let destList=items[dest];
        const newSrcList = srcList.filter((it)=>!isEqual(it,item));
        const newDestList = destList;
        newDestList.push(item)
        let updatedItems={...items};
        updatedItems[src]=newSrcList;
        updatedItems[dest]=newDestList;
        setItems(updatedItems);
    }
    return(
        <>
        <div className={classes.root}>
            <ListView listLabels={list} listName={list[0]} listItems={items.todo} moveHandler={handleTaskMove}/>
            <ListView listLabels={list} listName={list[1]} listItems={items.progress} moveHandler={handleTaskMove}/>
            <ListView listLabels={list} listName={list[2]} listItems={items.done} moveHandler={handleTaskMove}/>
        </div>
        <AddTask addNewTask={addNewTask}/>
    </>
    )
}
export default TaskManagement;