const getHours = () =>{
    const clock = document.getElementById('hour');
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours < 10 ? `0${hours}`: hours;
    const minute = minutes < 10 ? `0${minutes}`: minutes;
    clock.innerHTML = `${hour}:${minute}`

    var saudacao = document.getElementById("saudacao");
    if(hour >=12 && hour < 18){
        saudacao.innerHTML = "Boa tarde"
    } else if (hour >= 18 && hour <23){
        saudacao.innerHTML = "Boa Noite"
    } else{
        saudacao.innerHTML = "Bom dia"
    }
}

setInterval(() =>{
    getHours()
}, 1000)


