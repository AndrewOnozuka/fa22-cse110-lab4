function dateTime() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}
setInterval(dateTime, 1000);