import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin:'1px 0px',
    border: '1px solid #2a384794',
    backgroundColor:'#2f54bd38',
  },
  titleText:{
      textTransform:'capitalize',
  },
  buttonText:{
      fontWeight:'bold',
      color:'#0c0c1abf'
  }
});

export const TaskCard=(props)=> {
  const {lists,currentListName,listTask,moveHandler}=props;
  const {title,description} = listTask;
  const otherLists = lists.filter((list)=> list!==currentListName);  
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.titleText}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.buttonText} onClick={()=>moveHandler(currentListName,otherLists[0],listTask)}>
          {`Move to ${otherLists[0]}`}
        </Button>
        <Button size="small" color="primary" className={classes.buttonText} onClick={()=>moveHandler(currentListName,otherLists[1],listTask)}>
          {`Move to ${otherLists[1]}`}
        </Button>
      </CardActions>
    </Card>
  );
}
export default TaskCard;