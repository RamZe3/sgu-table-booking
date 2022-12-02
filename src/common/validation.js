

function validPhone(phone) {
    //^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$
    var reg = new RegExp("^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$");
    if (reg.test(phone)){
        return ""
    }
    else {
       return  "Неверно указан телефон\n "
    }
}

function validLogin(login) {
    if (login.length > 0){
        return ""
    }
    else {
        return  "Укажите логин\n "
    }
}

function validUser(user) {
    let errors = ''
    errors = validPhone(user.phone) + validLogin(user.login)
    console.log(errors)
    return errors
}

export {validUser}