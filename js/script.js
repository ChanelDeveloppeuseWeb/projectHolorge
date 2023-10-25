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

let days = ["dimanche","Lundi","Mardi","Mercredi","Jeudi","vendredi","samedi"]
let mois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"]
  const d = new Date()
    days = days[d.getDay()];
  let date = showDays(d.getDate());
     month = mois[d.getMonth()]
  let show = days + "." + date +"." + month 
document.getElementById("showDay").innerHTML = show;
function showDays(i){
    if (i < 10) {i = + i}
    return  i
}