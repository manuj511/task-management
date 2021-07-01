
import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography,Grid,Button,TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    paperStyle: {
		padding: 20,
		height: '25vh',
		width: 350,
		margin: '20px auto',
		backgroundColor: '#3f51b5',
		color: 'white'
	},
    textFieldStyle: { marginLeft: '-1px', backgroundColor: '#fff' },
	buttonStyle: { marginTop: '10px', marginBottom: '5px', borderRadius: '0px' },
    labelStyle:{
        textDecoration:'bold',
    }
  }));

export const AddTask = (props)=>{
    const classes = useStyles();
    const {addNewTask}=props;
    const [newTask,setNewTask]=useState({title:'',description:''});

    const handleNewTask = (e)=>{
        e.preventDefault();
        addNewTask(newTask);
        setNewTask({title:'',description:''});
    }

    return(
        <>
        <Grid>
				<Paper elevation={10} className={classes.paperStyle}>
					<Grid align="center">
						<Typography variant="h6" className={classes.text}>
							Add New Task
						</Typography>
					</Grid>
					<Grid>
						<form>
							<label htmlFor="title" className={classes.labelStyle}>Title</label>
							<TextField
                                type="text"
								placeholder=" Title"
								onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
								className={classes.textFieldStyle}
								value={newTask.title}
								fullWidth
								required
							/>
							<label htmlFor="description" className={classes.labelStyle}>Description</label>
							<TextField
								type="text"
								placeholder=" Description"
								onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
								className={classes.textFieldStyle}
								value={newTask.description}
								fullWidth
								required
							/>
							<Button
								type="submit"
								variant="contained"
								onClick={(e)=>handleNewTask(e)}
								fullWidth
								className={classes.buttonStyle}
							>
								Add Task
							</Button>
						</form>
					</Grid>
				</Paper>
			</Grid>
        </>
    )

}
export default AddTask;