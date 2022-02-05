function resultFunc_1(){

    result.value="Баллы: "+result.value+ " из 2";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/2_purple.png); opacity: 1;"
    document.getElementById('fig_2').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_5').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_6').style = "background-image:url(img/2_green.png); opacity: 1;"
    
}
function resetFunc_1(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/2_purple.png); opacity: 0.5;"
    document.getElementById('fig_2').style = "background-image:url(img/1_black.png); opacity: 0.5;"
    document.getElementById('fig_3').style = "background-image:url(img/3_green.png); opacity: 0.5;"
    document.getElementById('fig_4').style = "background-image:url(img/5_purple.png); opacity: 0.5;"
    document.getElementById('fig_5').style = "background-image:url(img/5_orange.png); opacity: 0.5;"
    document.getElementById('fig_6').style = "background-image:url(img/2_green.png); opacity: 0.5;"
}



function changeOpacity1_1() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
    result.value=roundPlus(parseFloat(result.value,10)+1.0,1);}
}
function changeOpacity2_1() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-0.5,1);}
}
function changeOpacity3_1() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-0.5,1);}
}
function changeOpacity4_1() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-0.5,1);}
}
function changeOpacity5_1() {
                 if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-0.5,1);}
}
function changeOpacity6_1() {
                if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+1.0,1);}
}
                
            function roundPlus(x, n) { 

  if(isNaN(x) || isNaN(n)) return false;
  var m = Math.pow(10,n);
  return Math.round(x*m)/m;

}    
function resultFunc_2(){

    result.value="Баллы: "+result.value+ " из 9";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/7_purple.png); background-size: 105%; opacity: 1;"
    document.getElementById('fig_2').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_5').style = "background-image:url(img/7_green.png); background-size: 98%; opacity: 1;"
    document.getElementById('fig_6').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_7').style = "background-image:url(img/7_black.png); background-size: 80.5%; opacity: 1;"
    document.getElementById('fig_8').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_9').style = "background-color: transparent; opacity: 0.4;"
    
}
function resetFunc_2(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/7_purple.png); background-size: 105%; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-image:url(img/3_black.png); background-size: 100%; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-image:url(img/9_green.png); background-size: 95%; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-image:url(img/6_orange.png); background-size: 100%; opacity: 0.5;"
    document.getElementById('fig_5').style = "background-image:url(img/7_green.png); background-size: 98%; opacity: 0.5;"
    document.getElementById('fig_6').style = "background-image:url(img/5_black.png); background-size: 95%; opacity: 0.5;"
    document.getElementById('fig_7').style = "background-image:url(img/7_black.png); background-size: 80.5%; opacity: 0.5;"
    document.getElementById('fig_8').style = "background-image:url(img/9_orange.png); background-size: 102%; opacity: 0.5;"
    document.getElementById('fig_9').style = "background-image:url(img/6_purple.png); background-size: 100%; opacity: 0.5;"
}



function changeOpacity1_2() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
    result.value=roundPlus(parseFloat(result.value,10)+3.0,1);}
}
function changeOpacity2_2() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}
function changeOpacity3_2() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}
function changeOpacity4_2() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}
function changeOpacity5_2() {
                 if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
  result.value=roundPlus(parseFloat(result.value,10)+3.0,1);}
}
function changeOpacity6_2() {
                if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}
function changeOpacity7_2() {
                if ((fig_7.style.opacity!="0.4")&&(fig_7.style.opacity!="1")){
            fig_7.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+3.0,1);}
}
function changeOpacity8_2() {
                if ((fig_8.style.opacity!="0.4")&&(fig_8.style.opacity!="1")){
            fig_8.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}
function changeOpacity9_2() {
                if ((fig_9.style.opacity!="0.4")&&(fig_9.style.opacity!="1")){
            fig_9.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}

                function resultFunc_3(){

    result.value="Баллы: "+result.value+ " из 12";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_2').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-image:url(img/5_black.png); background-size: 96%; opacity: 1;"
    document.getElementById('fig_4').style = "background-image:url(img/7_orange.png); background-size: 108%; opacity: 1;"
    document.getElementById('fig_5').style = "background-image:url(img/9_purple.png); background-size: 106%; opacity: 1;"
    document.getElementById('fig_6').style = "background-image:url(img/5_green.png); background-size: 90%; opacity: 1;"
    
}
function resetFunc_3(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/2_green.png); background-size: 100%; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-image:url(img/1_purple.png); background-size: 109%; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-image:url(img/5_black.png); background-size: 96%; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-image:url(img/7_orange.png); background-size: 108%; opacity: 0.5;"
    document.getElementById('fig_5').style = "background-image:url(img/9_purple.png); background-size: 106%; opacity: 0.5;"
    document.getElementById('fig_6').style = "background-image:url(img/5_green.png); background-size: 90%; opacity: 0.5;"
}


function changeOpacity1_3() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
    result.value=roundPlus(parseFloat(result.value,10)-6.0,1);}
}
function changeOpacity2_3() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-6.0,1);}
}
function changeOpacity3_3() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)+3.0,1);}
}
function changeOpacity4_3() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+3.0,1);}
}
function changeOpacity5_3() {
                 if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+3.0,1);}
}
function changeOpacity6_3() {
                if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+3.0,1);}
}
function resultFunc_4(){

    result.value="Баллы: "+result.value+ " из 18";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/5_orange.png); background-size: 105%; opacity: 1;"
    document.getElementById('fig_2').style = "background-image:url(img/2_black.png); background-size: 100%; opacity: 1;"
    document.getElementById('fig_3').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_5').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_6').style = "background-image:url(img/4_purple.png); background-size: 107%; opacity: 1;"
    document.getElementById('fig_7').style = "background-image:url(img/3_orange.png); background-size: 105%; opacity: 1;"
    document.getElementById('fig_8').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_9').style = "background-image:url(img/1_green.png); background-size: 84%; opacity: 1;"
    
}
function resetFunc_4(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/5_orange.png); background-size: 105%; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-image:url(img/2_black.png); background-size: 100%; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-image:url(img/9_purple.png); background-size: 103%; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-image:url(img/6_green.png); background-size: 100%; opacity: 0.5;"
    document.getElementById('fig_5').style = "background-image:url(img/8_black.png); background-size: 98%; opacity: 0.5;"
    document.getElementById('fig_6').style = "background-image:url(img/4_purple.png); background-size: 107%; opacity: 0.5;"
    document.getElementById('fig_7').style = "background-image:url(img/3_orange.png); background-size: 105%; opacity: 0.5;"
    document.getElementById('fig_8').style = "background-image:url(img/8_purple.png); background-size: 102%; opacity: 0.5;"
    document.getElementById('fig_9').style = "background-image:url(img/1_green.png); background-size: 84%; opacity: 0.5;"
}



function changeOpacity1_4() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
    result.value=roundPlus(parseFloat(result.value,10)+3.6,1);}
}
function changeOpacity2_4() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+3.6,1);}
}
function changeOpacity3_4() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-4.5,1);}
}
function changeOpacity4_4() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-4.5,1);}
}
function changeOpacity5_4() {
                 if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
  result.value=roundPlus(parseFloat(result.value,10)-4.5,1);}
}
function changeOpacity6_4() {
                if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+3.6,1);}
}
function changeOpacity7_4() {
                if ((fig_7.style.opacity!="0.4")&&(fig_7.style.opacity!="1")){
            fig_7.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+3.6,1);}
}
function changeOpacity8_4() {
                if ((fig_8.style.opacity!="0.4")&&(fig_8.style.opacity!="1")){
            fig_8.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-4.5,1);}
}
function changeOpacity9_4() {
                if ((fig_9.style.opacity!="0.4")&&(fig_9.style.opacity!="1")){
            fig_9.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+3.6,1);}
}
          
function resultFunc_5(){

    result.value="Баллы: "+result.value+ " из 20";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    
    document.getElementById('fig_1').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_2').style = "background-image:url(img/6_orange.png); background-size: 100%; opacity: 1;"
    document.getElementById('fig_3').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-color: transparent; opacity: 0.4;"
    
}
function resetFunc_5(){
    
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/9_black.png); background-size: 90%; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-image:url(img/6_orange.png); background-size: 100%; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-image:url(img/5_green.png); background-size: 91%; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-image:url(img/1_purple.png); background-size: 108%; opacity: 0.5;"
}

function changeOpacity1_5() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
    result.value=roundPlus(parseFloat(result.value,10)-20.0,1);
            resultFunc_5();}
}
function changeOpacity2_5() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+20.0,1);
              resultFunc_5();}
}
function changeOpacity3_5() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-20.0,1);
               resultFunc_5();}
}
function changeOpacity4_5() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-20.0,1);
                 resultFunc_5();}
}

function resultFunc_6(){

    result.value="Баллы: "+result.value+ " из 22";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    
    document.getElementById('fig_1').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_2').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-image:url(img/1_green.png); background-size: 84%; opacity: 1;"
    document.getElementById('fig_4').style = "background-color: transparent; opacity: 0.4;"
    
}
function resetFunc_6(){
    
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/7_purple.png); background-size: 105%; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-image:url(img/8_black.png); background-size: 99%; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-image:url(img/1_green.png); background-size: 84%; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-image:url(img/9_orange.png); background-size: 102%; opacity: 0.5;"
}

function changeOpacity1_6() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
    result.value=roundPlus(parseFloat(result.value,10)-22.0,1);
            resultFunc_6();}
}
function changeOpacity2_6() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-22.0,1);
              resultFunc_6();}
}
function changeOpacity3_6() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)+22.0,1);
               resultFunc_6();}
}
function changeOpacity4_6() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-22.0,1);
                 resultFunc_6();}
}
function resultFunc_7(){

    result.value="Баллы: "+result.value+ " из 24";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    
    document.getElementById('fig_1').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_2').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-color: transparent; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-image:url(img/3_black.png); background-size: 100%; opacity: 1;"
    
}
function resetFunc_7(){
    
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/6_green.png); background-size: 100%; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-image:url(img/2_purple.png); background-size: 100%; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-image:url(img/4_orange.png); background-size: 103%; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-image:url(img/3_black.png); background-size: 100%; opacity: 0.5;"
}

function changeOpacity1_7() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
    result.value=roundPlus(parseFloat(result.value,10)-24.0,1);
            resultFunc_7();}
}
function changeOpacity2_7() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-24.0,1);
              resultFunc_7();}
}
function changeOpacity3_7() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-24.0,1);
               resultFunc_7();}
}
function changeOpacity4_7() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+24.0,1);
                 resultFunc_7();}
}

function resultFunc_8(){

    result.value="Баллы: "+result.value+ " из 30";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/balls.jpeg); opacity: 1;"
    document.getElementById('fig_2').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-image:url(img/birds.jpeg); opacity: 1;"
    document.getElementById('fig_5').style = "background-image:url(img/candy.png); background-color: white; opacity: 1;"
    document.getElementById('fig_6').style = "background-color: white; opacity: 0.4;"
    
}
function resetFunc_8(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/balls.jpeg); opacity: 0.5;"
    document.getElementById('fig_2').style = "background-image:url(img/bant.jpeg); opacity: 0.5;"
    document.getElementById('fig_3').style = "background-image:url(img/horse.jpeg); opacity: 0.5;"
    document.getElementById('fig_4').style = "background-image:url(img/birds.jpeg); opacity: 0.5;"
    document.getElementById('fig_5').style = "background-image:url(img/candy.png);background-color: white; opacity: 0.5;"
    document.getElementById('fig_6').style = "background-image:url(img/dogs.jpeg); opacity: 0.5;"

}



function changeOpacity1_8() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
     result.value=roundPlus(parseFloat(result.value,10)+10.0,1);}
}
function changeOpacity2_8() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-10.0,1);}
}
function changeOpacity3_8() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-10.0,1);}
}
function changeOpacity4_8() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+10.0,1);}
}
function changeOpacity5_8() {
                 if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+10.0,1);}
}
function changeOpacity6_8() {
                if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-10.0,1);}
}