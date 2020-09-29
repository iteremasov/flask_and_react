
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textTransform: 'uppercase',
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));


function HeaderComponent({ location }) {
  const classes = useStyles();

  const logOut = () => {
    // localStorage.removeItem('token')
    window.location.replace('/login')
  }
  const inHome = () => {
    window.location.replace('/')
  }

  return (
    <div className={ classes.root }>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography className={ classes.title } variant="h6" noWrap>
            <Button
            onClick={inHome}
            >
              Registration on the service
            </ Button>
              
            </Typography>
            <Button
            onClick={logOut}
            >
              admin panel
            </ Button>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export const Header = withRouter(HeaderComponent);