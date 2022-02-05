if (JSON.parse(localStorage.getItem ('arrIndex'))== undefined){
    var userProgress0 = {
    name: "Unknown Player",
    max: 0,
    last: 0,
    index: 0
  }
let users=[];
users.push(userProgress0);
localStorage.setItem('arrIndex', JSON.stringify(users));
}

function sbros() {
    var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].index=0;
        localStorage.setItem('arrIndex', JSON.stringify(arr));
}