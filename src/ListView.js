import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import TaskCard from './TaskCard';

const useStyles = makeStyles({
    root: {
      display: 'block',
      width: '33%',
      height:'350px',
      margin:'0px 20px',
      justifyContent: 'space-between',
      border:'2px solid black',
      overflow:'auto',
      borderRadius:"40px",
    },
    title:{
        textTransform: 'capitalize',
        textAlign:'center',
        color:'#fff',
        
    },
    emptyListText:{
        margin:'0% 30%',
    },
    boxStyle:{
        backgroundColor:'#3f51b5',
        width:'100%'
    }
  });

export const ListView = (props)=>{
    const classes=useStyles();
    const {listName,listItems,listLabels,moveHandler}=props;
    return(
        <>
        <div className={classes.root}>
            <Box className={classes.boxStyle}>
            <Typography variant="h5" className={classes.title}>
                {listName}
            </Typography>
            </Box><br/>
            <Box>
                {
                   (listItems.length!==0) ? listItems.map((listItem)=>{
                        return <TaskCard lists={listLabels} currentListName={listName} listTask={listItem} moveHandler={moveHandler}/>
                    }) :
                    <Typography variant="p" className={classes.emptyListText}>No Items Present here</Typography>
                }
            </Box>
        </div>
        </>
    );
}
export default ListView;