    const horloge = new Date();
    let h = hour(horloge.getHours());
    let m = hour(horloge.getMinutes());
    let time = h + ":" + m ;
    document.getElementById("showHour").innerHTML = time;

function hour(i) {
    if (i < 10) {i = "0" + i}
    return  i
  }
  

//   function pour afficher le jour
  
  const  days = date.getDay();
  let date = getDate() ;
  let month = getMonth()
  let show = days + "." + date +"." + month +"."
document.getElementById("showDay").innerHTML = show;