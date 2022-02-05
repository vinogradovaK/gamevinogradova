let bool=true;
document.getElementById("my_timer").innerHTML=31-JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index;
if (31-(JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index)<4){
    winRound();
}
else {
startTimer();}
function startTimer() {
    var my_timer = document.getElementById("my_timer");
    var s = my_timer.innerHTML;
    if (s == 0) {
        if(bool==true) {
            failRound();
        }
          return;
        }
    else s--;
    document.getElementById("my_timer").innerHTML = s;
    setTimeout(startTimer, 1000);
  }
document.getElementById('username').innerHTML= JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].name;

let figArr = ["square", "round", "triangle"];
let figName=figArr[randomInteger(0, figArr.length-1)];
let figNameRus;
switch (figName) {
  case "square":
    figNameRus="квадраты";
        break;
  case "round":
    figNameRus="круги";
        break;
  case "triangle":
    figNameRus="треугольники";
        break;
  default:
    figNameRus="фигуры";
}
document.getElementById('paragraph').innerHTML= figNameRus;
var arrResult=[0, 0, 0, 0, 0, 0];
for (let i=0;i<6;i++){
    let a = figArr[randomInteger(0, figArr.length-1)];
    if (a==figName) {
        arrResult[i]=1;
    }
    switch (i) {
    case 0:
    document.getElementById("fig1").className = a;
        break;
    case 1:
    document.getElementById("fig2").className = a;
        break;
    case 2:
    document.getElementById("fig3").className = a;
        break;
    case 3:
    document.getElementById("fig4").className = a;
        break;
    case 4:
    document.getElementById("fig5").className = a;
        break;
    case 5:
    document.getElementById("fig6").className = a;
        break;
    default:
    figName="фигуры";
}
    
}
function okEnter() {
    document.getElementById('input_str').style.display = "none";
    document.getElementById('ok').style.display = "none";
    document.getElementById('player').style.display = "block";
    var newName = document.getElementById('input_str').value;
    var arr=JSON.parse(localStorage.getItem('arrIndex'));
    arr[arr.length-1].last=0;
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i].name==newName) {
            arr[i].last=0;
            arr[i].index=0;
            arr.push(arr[i]);
            arr.splice(i, 1);
            break;
        }
        else
            {
                if (i==arr.length-1) {
                    var userProgressNew = {
                        name: newName,
                        max: 0,
                        last: 0,
                        index: 0
                    }
                arr.push(userProgressNew);   
                break;
                }
            }
    }
    
    localStorage.setItem('arrIndex', JSON.stringify(arr));
    document.getElementById('username').innerHTML= JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].name;
}
function changeUser() {
    document.getElementById('input_str').style.display = "block";
    document.getElementById('ok').style.display = "block";
    document.getElementById('player').style.display = "none";
}
function winRound(){
    document.getElementById("my_timer").innerHTML="";
    document.getElementById("task").innerHTML="Спасибо за игру! Баллы: "+ JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].last;
    document.getElementById('calc').style.display = "none";
}
function failRound(){
    document.getElementById("my_timer").innerHTML="";
    document.getElementById("task").innerHTML="Время вышло! Баллы: "+ JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].last;
    document.getElementById('calc').style.display = "none";
}
function newRound() {
        document.getElementById("my_timer").innerHTML="";
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].index+=1;
        localStorage.setItem('arrIndex', JSON.stringify(arr));
    
}
function checkResult() {
    bool=false;
    document.getElementById("my_timer").innerHTML="";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result_p').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('result_a').innerHTML= JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].last+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index;
    if (arrResult[0]==0) {
        document.getElementById("fig1").className="";
    }
    if (arrResult[1]==0) {
        document.getElementById("fig2").className="";
    }
    if (arrResult[2]==0) {
        document.getElementById("fig3").className="";
    }
    if (arrResult[3]==0) {
        document.getElementById("fig4").className="";
    }
    if (arrResult[4]==0) {
        document.getElementById("fig5").className="";
    }
    if (arrResult[5]==0) {
        document.getElementById("fig6").className="";
    }
    if (JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].last>JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].max)
        {
            let arr=JSON.parse(localStorage.getItem('arrIndex'));
            arr[arr.length-1].max=arr[arr.length-1].last;
            localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
//1
let currentDroppable = null;
function changeLocation1() {
      let shiftX = event.clientX - outside1.getBoundingClientRect().left;
      let shiftY = event.clientY - outside1.getBoundingClientRect().top;

      outside1.style.position = 'absolute';
      outside1.style.zIndex = 1000;
      document.body.append(outside1);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        outside1.style.left = pageX - shiftX + 'px';
        outside1.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove1(event) {
        moveAt(event.pageX, event.pageY);

        outside1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        outside1.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { 
            leaveDroppable1(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { 
            enterDroppable1(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove1);

      outside1.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove1);
        outside1.onmouseup = null;
      };

    };

    function enterDroppable1(elem) {
        if (arrResult[0]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
           
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
            
        }
    }

    function leaveDroppable1(elem) {
      if (arrResult[0]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
          
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
            
        }
    }

    outside1.ondragstart = function() {
      return false;
    };

//2
function changeLocation2() {
    currentDroppable = null;
      let shiftX = event.clientX - outside2.getBoundingClientRect().left;
      let shiftY = event.clientY - outside2.getBoundingClientRect().top;

      outside2.style.position = 'absolute';
      outside2.style.zIndex = 1000;
      document.body.append(outside2);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        outside2.style.left = pageX - shiftX + 'px';
        outside2.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove2(event) {
        moveAt(event.pageX, event.pageY);

        outside2.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        outside2.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { 
            leaveDroppable2(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { 
            enterDroppable2(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove2);

      outside2.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove2);
        outside2.onmouseup = null;
      };

    };

    function enterDroppable2(elem) {
        if (arrResult[1]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
            
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
            
        }
    }

    function leaveDroppable2(elem) {
      if (arrResult[1]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
          
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
            
        }
    }

    outside2.ondragstart = function() {
      return false;
    };
//3

function changeLocation3() {
    currentDroppable = null;
      let shiftX = event.clientX - outside3.getBoundingClientRect().left;
      let shiftY = event.clientY - outside3.getBoundingClientRect().top;

      outside3.style.position = 'absolute';
      outside3.style.zIndex = 1000;
      document.body.append(outside3);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        outside3.style.left = pageX - shiftX + 'px';
        outside3.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove3(event) {
        moveAt(event.pageX, event.pageY);

        outside3.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        outside3.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { 
            leaveDroppable3(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { 
            enterDroppable3(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove3);

      outside3.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove3);
        outside3.onmouseup = null;
      };

    };

    function enterDroppable3(elem) {
        if (arrResult[2]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
            
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
            
        }
    }

    function leaveDroppable3(elem) {
      if (arrResult[2]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
          
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
           
        }
    }

    outside3.ondragstart = function() {
      return false;
    };
//4

function changeLocation4() {
    currentDroppable = null;
      let shiftX = event.clientX - outside4.getBoundingClientRect().left;
      let shiftY = event.clientY - outside4.getBoundingClientRect().top;

      outside4.style.position = 'absolute';
      outside4.style.zIndex = 1000;
      document.body.append(outside4);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        outside4.style.left = pageX - shiftX + 'px';
        outside4.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove4(event) {
        moveAt(event.pageX, event.pageY);

        outside4.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        outside4.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { 
            leaveDroppable4(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { 
            enterDroppable4(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove4);

      outside4.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove4);
        outside4.onmouseup = null;
      };

    };

    function enterDroppable4(elem) {
        if (arrResult[3]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
    }

    function leaveDroppable4(elem) {
      if (arrResult[3]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
    }

    outside4.ondragstart = function() {
      return false;
    };
//5

function changeLocation5() {
    currentDroppable = null;
      let shiftX = event.clientX - outside5.getBoundingClientRect().left;
      let shiftY = event.clientY - outside5.getBoundingClientRect().top;

      outside5.style.position = 'absolute';
      outside5.style.zIndex = 1000;
      document.body.append(outside5);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        outside5.style.left = pageX - shiftX + 'px';
        outside5.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove5(event) {
        moveAt(event.pageX, event.pageY);

        outside5.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        outside5.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { 
            leaveDroppable5(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { 
            enterDroppable5(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove5);

      outside5.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove5);
        outside5.onmouseup = null;
      };

    };

    function enterDroppable5(elem) {
        if (arrResult[4]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
    }

    function leaveDroppable5(elem) {
      if (arrResult[4]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
    }

    outside5.ondragstart = function() {
      return false;
    };
//6

function changeLocation6() {
    currentDroppable = null;
      let shiftX = event.clientX - outside6.getBoundingClientRect().left;
      let shiftY = event.clientY - outside6.getBoundingClientRect().top;

      outside6.style.position = 'absolute';
      outside6.style.zIndex = 1000;
      document.body.append(outside6);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        outside6.style.left = pageX - shiftX + 'px';
        outside6.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove6(event) {
        moveAt(event.pageX, event.pageY);

        outside6.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        outside6.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { 
            leaveDroppable6(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { 
            enterDroppable6(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove6);

      outside6.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove6);
        outside6.onmouseup = null;
      };

    };

    function enterDroppable6(elem) {
        if (arrResult[5]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
    }

    function leaveDroppable6(elem) {
      if (arrResult[5]==1) {
        var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last-=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
        else {
            var arr=JSON.parse(localStorage.getItem('arrIndex'));
        arr[arr.length-1].last+=(1+JSON.parse(localStorage.getItem ('arrIndex'))[JSON.parse(localStorage.getItem ('arrIndex')).length-1].index);
        arr.push(arr[arr.length-1]);
        arr.splice(arr.length-2, 1);
        localStorage.setItem('arrIndex', JSON.stringify(arr));
        }
    }

    outside6.ondragstart = function() {
      return false;
    };