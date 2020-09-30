import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { fetchPost } from '../api/services';


const useStyles = makeStyles((theme) => ({
    
    fail: {
      color: 'red'
    },
    succes: {
        color: 'green'
    }
  }));


export function AddForm() {
    const classes = useStyles()

    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [phone, setPhone] = useState('')
    const [adress, setAdress] = useState('')
    const [iin, setIin] = useState('')

    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)

    const [surnameFail, setSurnameFail] = useState(false)
    const [nameFail, setNameFail] = useState(false)
    const [patronymicFail, setPatronymicFail] = useState(false)
    const [phoneFail, setPhoneFail] = useState(false)
    const [adressFail, setAdressFail] = useState(false)
    const [iinFail, setIinFail] = useState(false)


    const changeSurname = (e) => {
        setSurname(e.target.value)
    }
    const changeName = (e) => {
        setName(e.target.value)
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
    const changeIin = (e) => {
        setIin(e.target.value)
    }
    const checkData = () => {
        let result = true
        if (surname === '') {setSurnameFail(true);result = false}
        if (name === '') {setNameFail(true);result = false}
        if (patronymic === '') { setPatronymicFail(true);result = false}
        if (phone === '') {setPhoneFail(true);result = false}
        if (adress === '') {setAdressFail(true);result = false}
        if (iin === '') {setIinFail(true);result = false}
        return result
    }

    const setDefaultFail = () => {
        setSurnameFail(false)
        setNameFail(false)
        setPatronymicFail(false)
        setPhoneFail(false)
        setAdressFail(false)
        setIinFail(false)
    }


    const clickForm = () => {
        const check = checkData()
        if(!check) return

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
            body: JSON.stringify(body)
        }
        )
            .then(response => {
                if (response.status === 200) {
                    clearForm()
                    setSuccess(true)
                    setFail(false)
                    setDefaultFail()
                }else {
                    setSuccess(false)
                    setFail(true)
                }
            })
    }
    const clearForm = () => {
        setAdress('')
        setIin('')  
        setName('')
        setPatronymic('')
        setSurname('')
        setPhone('')
    }
    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Заполните форму
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
                        value={surname}
                        onChange={changeSurname}
                        error={surnameFail}
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
                        value={name}
                        onChange={changeName}
                        error={nameFail}
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
                        value={patronymic}
                        onChange={changePatronymic}
                        error={patronymicFail}
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
                        value={phone}
                        onChange={changePhone}
                        error={phoneFail}
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
                        value={adress}
                        onChange={changeAdres}
                        error={adressFail}
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
                        value={iin}
                        onChange={changeIin}
                        error={iinFail}
                    />
                    {fail && <Typography component="h6" className={classes.fail}>
                        fail
                    </Typography>
                    }
                    {success && <Typography component="h6" className={classes.succes}>
                        success
                    </Typography>
                    }
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={clickForm}
                    >
                        Отправить
                    </Button>
                </div>
            </div>

        </Container>
    )
}