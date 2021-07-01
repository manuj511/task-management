import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GradeUpLogo from './assets/img/app-logo.png';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom:'10px',
  },
  imgStyle:{
      height:'40px',
      width:'60px',
      marginRight: '5px',
  }
}));

export const Header=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <img src={GradeUpLogo} alt="app-logo" className={classes.imgStyle}/>
          <Typography variant="h5" color="inherit">
            GradeUp - Task Management
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;