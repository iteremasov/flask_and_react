import React, { useState, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import { fetchGet } from '../api/services';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));


export function Admin(props, ctx) {
    console.log(props, ctx)
    const classes = useStyles();
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useLayoutEffect(() => {
        fetchGet({
            url: `${process.env.REACT_APP_SERVER_URL}admin/users`, headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                if (response.status === 401) {
                    localStorage.removeItem('token')
                    window.location.replace('/login')
                    return
                }
                if (response.status === 422) {
                    localStorage.removeItem('token')
                    window.location.replace('/login')
                    return
                }
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(response => {
                  setLoading(false)
                setUsers(response.users)
            })
            .catch(() =>{
                return
            })
    }, []);

      if (loading) return 'LOADING...';

    return (
        <List dense className={classes.root}>

            {users.map((user, index) => {
                return (
                    <Container maxWidth="md" key={index}>
                        <ListItem key={index} button>

                            <ListItemText id={index} >
                                <Typography variant="h5">
                                    {`${user.name} ${user.surname} ${user.patronymic}`}
                                </Typography>
                                <Typography variant="body1">
                                    Adres: {user.adress}
                                </Typography>
                                <Typography variant="body1">
                                    Phone: {user.phone}
                                </Typography>
                                <Typography align="right" variant="subtitle2">
                                    IIN: {user.iin}
                                </Typography>
                            </ListItemText>

                            <ListItemSecondaryAction>

                            </ListItemSecondaryAction>
                        </ListItem>
                    </Container>

                );
            })}
        </List>
    );
}