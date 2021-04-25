import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function Create() {
  return (
    <div>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create A New Note
      </Typography>
      <Button type="submit" color="secondary" variant="contained" endIcon={<NavigateNextIcon />}>
        Submit
      </Button>
    </div>
  );
}
