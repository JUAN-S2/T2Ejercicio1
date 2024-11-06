let userName = 'Juan';
let userSurname = 'Narvaez';


function getMessage(Edad){
    let message;
    if(Edad >= 18){
        
        message = "Bienvenid@" + userName + userSurname;
    } else{
        message = "Lo sentimos" + userName + userSurname + 'debe der mayor de edad.';
    }
    console.log(message);
}

getMessage(30);
