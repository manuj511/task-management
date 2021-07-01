import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(() => ({
  root: {
    position:'absolute',
    bottom:'0px',
    width:'100%',
  },
  footerStyle: {
    display:'flex',
    justifyContent:'space-between',
  },
}));

export const Footer=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.footerStyle}>
          <Typography variant="p" color="inherit">
          &copy; MANUJ GUPTA 
          </Typography>
          <Typography variant="p" color="inherit">
            Contact - manuj.gupta511@gmail.com
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Footer;