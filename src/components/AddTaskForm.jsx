import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
export default function AddTaskForm({
  selectedTask,
  list,
  setList,
  setOpenDialog,
}) {
  const [form, setForm] = useState({
    id: '',
    name: '',
    owner: '',
    status: '1',
    task: '',
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (selectedTask?.id) setForm(selectedTask);
  }, [selectedTask]);

  function handleChangeForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function validateSubmit() {
    // const validateRet = Object.values(form).filter((a) => a === '');
    // return validateRet;
    if (!form.name.trim()) return false;
    if (!form.owner.trim()) return false;
    if (!form.task.trim()) return false;
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateSubmit()) {
      setMessage('please fill the form carefuly');
    } else {
      if (form.id === '') {
        const newFormForSave = { ...form, id: crypto.randomUUID() };
        console.log(form);
        setList([...list, newFormForSave]);
        setMessage('submit successful');
        setForm({
          id: '',
          name: '',
          owner: '',
          status: '1',
          task: '',
        });
      } else {
        setList(list.map((a) => (a.id === form.id ? { ...a, ...form } : a)));
      }
      setOpenDialog(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Add New Task</Typography>
      <Paper elevation={3} sx={{ m: 2 }}>
        <Box sx={{ width: '100%' }}>
          <div>{message}</div>

          <Grid container>
            <Grid size={{ xs: 6, md: 6 }}>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '90%' } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChangeForm}
                  label="task name"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '90%' } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="owner"
                  name="owner"
                  value={form.owner}
                  onChange={handleChangeForm}
                  label="task owner"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <FormControl>
                <FormLabel
                  sx={{ pl: 2 }}
                  id="demo-row-radio-buttons-group-label"
                >
                  task status
                </FormLabel>
                <RadioGroup
                  row
                  sx={{ pl: 2 }}
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="status"
                  onChange={handleChangeForm}
                  value={form.status}
                >
                  <FormControlLabel
                    id="status1"
                    value="1"
                    control={<Radio />}
                    label="todo"
                  />
                  <FormControlLabel
                    id="status2"
                    value="2"
                    control={<Radio />}
                    label="doing"
                  />
                  <FormControlLabel
                    id="status3"
                    value="3"
                    control={<Radio />}
                    label="done"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '90%' } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="task"
                  name="task"
                  value={form.task}
                  onChange={handleChangeForm}
                  label="task"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <Button variant="contained" type="submit" sx={{ m: 2 }}>
                submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </form>
  );
}
AddTaskForm.propTypes = {
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired,
};
