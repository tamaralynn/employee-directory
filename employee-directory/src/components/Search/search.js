import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function ContainedButtons() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Button variant="contained">Default</Button>
      </div>
    );
  }




export function BasicTextFields() {
  const classes = useStyles();
  
  return (
<form className={classes.root} noValidate autoComplete="off">
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />

</form>
  );
}
