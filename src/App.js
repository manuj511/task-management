import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header';
import Footer from './footer';
import TaskManagement from './TaskManagement';


const useStyles = makeStyles({
  root: {
    backgroundColor:'#959fbbc7',
    height:'100vh',
  },
});
export const App=()=> {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
    <Header/>
    <TaskManagement/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
