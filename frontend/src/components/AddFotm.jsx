import React, { useState }from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { fetchPost } from '../api/services';

export function AddForm() {

    const [surname, setSurname] = useState('')
    const [name, setNme] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [phone, setPhone] = useState('')
    const [adress, setAdress] = useState('')
    const [iin, setIin] = useState('')

    const changeSurname = (e) => {
        setSurname(e.target.value)
    }
    const changeName = (e) => {
        setNme(e.target.value)
    }
    const changePatronymic = (e) => {
        setPatronymic(e.target.value)
    }
    const changePhone = (e) => {
        setPhone(e.target.value)
    }
    const changeAdres = (e) => {
        setAdress(e.target.value)
    }
    const changeIin = (e)=> {
        setIin(e.target.value)
    }


    const clickForm = () => {
        const body = {
            surname,
            name,
            patronymic,
            phone,
            adress,
            iin,

        }
        fetchPost({
            url: process.env.REACT_APP_SERVER_URL + 'add',
            body: JSON.stringify(body)}
             )
             .then(response => {
                 if (response.status !== 200){
                     console.log('fail')
                 }
             })
    }
    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Add your data
                </Typography>
                <div>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="surname"
                        label="Фамилия"
                        name="Фамилия"
                        autoFocus
                    onChange={changeSurname}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Имя"
                        label="Имя"
                        type="text"
                        id="name"
                    onChange={changeName}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="отчество"
                        label="Отчество"
                        type="text"
                        id="patronymic"
                    onChange={changePatronymic}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="телефон"
                        label="Телефон"
                        type="text"
                        id="phone"
                    onChange={changePhone}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Адрес"
                        label="Адрес"
                        type="text"
                        id="adres"
                    onChange={changeAdres}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="ИИН"
                        label="ИИН"
                        type="text"
                        id="iin"
                    onChange={changeIin}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        // className={classes.submit}
                    onClick={clickForm}
                    >
                        Отправить
                    </Button>
                </div>
            </div>

        </Container>
    )
}