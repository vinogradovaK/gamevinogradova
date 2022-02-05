for (let i = 0; i < JSON.parse(localStorage.getItem('arrIndex')).length ; i++) {
        if ((JSON.parse(localStorage.getItem('arrIndex'))[i].name!="Unknown Player")||(JSON.parse(localStorage.getItem('arrIndex'))[i].name=="Unknown Player" && JSON.parse(localStorage.getItem('arrIndex'))[i].max!=0)) {
            recordRowCreate(JSON.parse(localStorage.getItem('arrIndex'))[i].name,JSON.parse(localStorage.getItem('arrIndex'))[i].max);
        }
    }

function recordRowCreate(name, max) {
            var table = document.getElementById('tab');
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = name;
            cell2.innerHTML = max;
            }

function dwnld(){
let text="";
for (let i = 0; i < JSON.parse(localStorage.getItem('arrIndex')).length ; i++) {
        if ((JSON.parse(localStorage.getItem('arrIndex'))[i].name!="Unknown Player")||(JSON.parse(localStorage.getItem('arrIndex'))[i].name=="Unknown Player" && JSON.parse(localStorage.getItem('arrIndex'))[i].max!=0)) {
            text = text+JSON.stringify(JSON.parse(localStorage.getItem('arrIndex'))[i].name)+ " -- "+ JSON.stringify(JSON.parse(localStorage.getItem('arrIndex'))[i].max) + "\n";
        }
    }
downloadAsFile(text);
}

function downloadAsFile(data) {
  let a = document.createElement("a");
  let file = new Blob([data], {type: 'application/json'});
  a.href = URL.createObjectURL(file);
  a.download = "records.txt";
  a.click();
}
