import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddTaskForm from './AddTaskForm';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { red, green, yellow } from '@mui/material/colors';

export default function TodoListForm({ list, setList }) {
  const [selectedTask, setSelectedTask] = useState({});
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickAdd = () => {
    setSelectedTask({});
    setOpenDialog(!openDialog);
  };

  function handleDeleteTask(id) {
    setList(list.filter((a) => a.id !== id));
  }

  function handleEditTask(id) {
    const mySelectecTsk = list.find((a) => a.id === id);
    setSelectedTask(mySelectecTsk);
    setOpenDialog(!openDialog);
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#2b4259' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              todo system
            </Typography>
            <Button color="inherit" onClick={handleClickAdd}>
              Add New
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ width: '100%', p: 2 }}>
        <Grid
          container
          direction="row"
          columnGap={2}
          columns={24}
          sx={{
            justifyContent: 'space-evenly',
            alignItems: 'baseline',
            // overflow: 'hidden',
          }}
        >
          <Grid item size={7}>
            <Box
              sx={{
                width: '100%',
                color: '#fff',
                bgcolor: '#2b4259',
                textAlign: 'center',
                pt: 2,
                pb: 2,
              }}
            >
              TODO
            </Box>
            {list
              .filter((a) => a.status === '1')
              .map((a) => {
                return (
                  <Card
                    key={a.id}
                    sx={{
                      borderStyle: 'solid',
                      borderWidth: 2,
                      borderColor: red[300],
                      m: 2,
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        name:{a.name}
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDeleteTask(a.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <IconButton
                          aria-label="edit"
                          onClick={() => handleEditTask(a.id)}
                        >
                          <EditSquareIcon />
                        </IconButton>
                      </Typography>

                      <Typography variant="body1">owner:{a.owner}</Typography>

                      <Typography noWrap variant="body2">
                        task:{a.task}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}{' '}
          </Grid>
          <Grid item size={7}>
            <Box
              sx={{
                width: '100%',
                borderRadius: 1,
                bgcolor: '#2b4259',
                color: '#fff',
                textAlign: 'center',
                pt: 2,
                pb: 2,
              }}
            >
              DOING
            </Box>
            {list
              .filter((a) => a.status === '2')
              .map((a) => {
                return (
                  <Card
                    key={a.id}
                    sx={{
                      borderStyle: 'solid',
                      borderWidth: 2,
                      borderColor: yellow[300],
                      m: 2,
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        name:{a.name}
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDeleteTask(a.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <IconButton
                          aria-label="edit"
                          onClick={() => handleEditTask(a.id)}
                        >
                          <EditSquareIcon />
                        </IconButton>
                      </Typography>

                      <Typography variant="body1">owner:{a.owner}</Typography>

                      <Typography noWrap variant="body2">
                        task:{a.task}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}{' '}
          </Grid>
          <Grid item size={7} sx={{ justifyContent: 'center' }}>
            <Box
              sx={{
                width: '100%',
                borderRadius: 1,
                bgcolor: '#2b4259',
                color: '#fff',
                textAlign: 'center',
                pt: 2,
                pb: 2,
              }}
            >
              DONE
            </Box>
            {list
              .filter((a) => a.status === '3')
              .map((a) => {
                return (
                  <Card
                    key={a.id}
                    sx={{
                      borderStyle: 'solid',
                      borderWidth: 2,
                      borderColor: green[300],
                      m: 2,
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        name:{a.name}
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDeleteTask(a.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <IconButton
                          aria-label="edit"
                          onClick={() => handleEditTask(a.id)}
                        >
                          <EditSquareIcon />
                        </IconButton>
                      </Typography>

                      <Typography variant="body1">owner:{a.owner}</Typography>

                      <Typography noWrap variant="body2">
                        task:{a.task}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
          </Grid>
        </Grid>

        <Dialog open={openDialog} onClose={handleClickAdd}>
          <DialogTitle>AddEdit</DialogTitle>
          <DialogContent>
            {/* <form onSubmit={} id="subscription-form"> */}

            <AddTaskForm
              selectedTask={selectedTask}
              list={list}
              setList={setList}
              setOpenDialog={setOpenDialog}
            ></AddTaskForm>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickAdd}>Cancel</Button>
            {/* <Button type="submit" form="subscription-form"> 
              Subscribe
            </Button>*/}
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
TodoListForm.propTypes = {
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
};
