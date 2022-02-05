

function resultFunc_1(){

    result.value="Баллы: "+result.value+ " из 2";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "border-bottom: 120px solid #feb386; opacity: 1;"
    document.getElementById('fig_2').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_5').style = "border-bottom: 120px solid #2a4fb5; opacity: 1;"
    document.getElementById('fig_6').style = "background-color: white; opacity: 0.4;"
    
}
function resetFunc_1(){
    document.getElementById('calc').style.display = "block";
    
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "border-bottom: 120px solid #feb386; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-color: #606060; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-color: #2a4fb5; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-color: #606060; opacity: 0.5;"
    document.getElementById('fig_5').style = "border-bottom: 120px solid #2a4fb5; opacity: 0.5;"
    document.getElementById('fig_6').style = "background-color: #feb386; opacity: 0.5;"
    
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
result.value=roundPlus(parseFloat(result.value,10)+1.0,1);}
}
function changeOpacity6_1() {
            if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-0.5,1);}
}
                
                function roundPlus(x, n) { 

  if(isNaN(x) || isNaN(n)) return false;
  var m = Math.pow(10,n);
  return Math.round(x*m)/m;

}
function resultFunc_2(){

    result.value="Баллы: "+result.value+ " из 4";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "border-bottom: 120px solid white; opacity: 0.4;"
    document.getElementById('fig_2').style = "border-bottom: 120px solid white; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-color: #606060; opacity: 1;"
    document.getElementById('fig_4').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_5').style = "background-color: #606060; opacity: 1;"
    document.getElementById('fig_6').style = "border-bottom: 120px solid white; opacity: 0.4;"
    document.getElementById('fig_7').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_8').style = "background-color: #2a4fb5; opacity: 1;"
    document.getElementById('fig_9').style = "background-color: #feb386; opacity: 1;"
    
}
function resetFunc_2(){
    document.getElementById('calc').style.display = "block";
    
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "border-bottom: 120px solid #2a4fb5; opacity: 0.5;"
    document.getElementById('fig_2').style = "border-bottom: 120px solid #feb386; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-color: #606060; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-color: #feb386; opacity: 0.5;"
    document.getElementById('fig_5').style = "background-color: #606060; opacity: 0.5;"
    document.getElementById('fig_6').style = "border-bottom: 120px solid #2a4fb5; opacity: 0.5;"
    document.getElementById('fig_7').style = "background-color: #606060; opacity: 0.5;"
    document.getElementById('fig_8').style = "background-color: #2a4fb5; opacity: 0.5;"
    document.getElementById('fig_9').style = "background-color: #feb386; opacity: 0.5;"
}



function changeOpacity1_2() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
     result.value=roundPlus(parseFloat(result.value,10)-0.8,1);}
}
function changeOpacity2_2() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-0.8,1);}
}
function changeOpacity3_2() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+1.0,1);}
}
function changeOpacity4_2() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-0.8,1);}
}
function changeOpacity5_2() {
                 if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+1.0,1);}
}
function changeOpacity6_2() {
                if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-0.8,1);}
}
function changeOpacity7_2() {
                  if ((fig_7.style.opacity!="0.4")&&(fig_7.style.opacity!="1")){
            fig_7.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-0.8,1);}
}
function changeOpacity8_2() {
                 if ((fig_8.style.opacity!="0.4")&&(fig_8.style.opacity!="1")){
            fig_8.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+1.0,1);}
}
function changeOpacity9_2() {
                 if ((fig_9.style.opacity!="0.4")&&(fig_9.style.opacity!="1")){
            fig_9.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+1.0,1);}
}
function resultFunc_3(){

    result.value="Баллы: "+result.value+ " из 4";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_2').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_5').style = "background-color: red; opacity: 1;"
    document.getElementById('fig_6').style = "background-color: white; opacity: 0.4;"
    
}
function resetFunc_3(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-color: yellow; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-color: purple; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-color: blue; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-color: black; opacity: 0.5;"
    document.getElementById('fig_5').style = "background-color: red; opacity: 0.5;"
    document.getElementById('fig_6').style = "background-color: green; opacity: 0.5;"
    
}



function changeOpacity1_3() {
             if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
     result.value=roundPlus(parseFloat(result.value,10)-0.8,1);}
}
function changeOpacity2_3() {
            if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-0.8,1);}
}
function changeOpacity3_3() {
             if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-0.8,1);}
}
function changeOpacity4_3() {
            if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-0.8,1);}
}
function changeOpacity5_3() {
            if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+4.0,1);}
}
function changeOpacity6_3() {
            if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-0.8,1);}
}
function resultFunc_4(){

    result.value="Баллы: "+result.value+ " из 9";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "border-bottom: 120px solid green; opacity: 1;"
    document.getElementById('fig_2').style = "border-bottom: 120px solid white; opacity: 0.4;"
    document.getElementById('fig_3').style = "border-bottom: 120px solid white; opacity: 0.4;"
    document.getElementById('fig_4').style = "border-bottom: 120px solid white; opacity: 0.4;"
    document.getElementById('fig_5').style = "border-bottom: 120px solid white; opacity: 0.4;"
    document.getElementById('fig_6').style = "border-bottom: 120px solid green; opacity: 1;"
    document.getElementById('fig_7').style = "border-bottom: 120px solid white; opacity: 0.4;"
    document.getElementById('fig_8').style = "border-bottom: 120px solid green; opacity: 1;"
    document.getElementById('fig_9').style = "border-bottom: 120px solid white; opacity: 0.4;"
    
}
function resetFunc_4(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "border-bottom: 120px solid green; opacity: 0.5;"
    document.getElementById('fig_2').style = "border-bottom: 120px solid blue; opacity: 0.5;"
    document.getElementById('fig_3').style = "border-bottom: 120px solid yellow; opacity: 0.5;"
    document.getElementById('fig_4').style = "border-bottom: 120px solid purple; opacity: 0.5;"
    document.getElementById('fig_5').style = "border-bottom: 120px solid blue; opacity: 0.5;"
    document.getElementById('fig_6').style = "border-bottom: 120px solid green; opacity: 0.5;"
    document.getElementById('fig_7').style = "border-bottom: 120px solid yellow; opacity: 0.5;"
    document.getElementById('fig_8').style = "border-bottom: 120px solid green; opacity: 0.5;"
    document.getElementById('fig_9').style = "border-bottom: 120px solid blue; opacity: 0.5;"
}


function changeOpacity1_4() {
             if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
     result.value=roundPlus(parseFloat(result.value,10)+3.0,1);}
}
function changeOpacity2_4() {
            if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}
function changeOpacity3_4() {
             if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}
function changeOpacity4_4() {
             if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}
function changeOpacity5_4() {
            if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}
function changeOpacity6_4() {
            if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+3.0,1);}
}
function changeOpacity7_4() {
             if ((fig_7.style.opacity!="0.4")&&(fig_7.style.opacity!="1")){
            fig_7.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}
function changeOpacity8_4() {
            if ((fig_8.style.opacity!="0.4")&&(fig_8.style.opacity!="1")){
            fig_8.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+3.0,1);}
}
function changeOpacity9_4() {
            if ((fig_9.style.opacity!="0.4")&&(fig_9.style.opacity!="1")){
            fig_9.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-1.5,1);}
}


function resultFunc_5(){

    result.value="Баллы: "+result.value+ " из 12";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-color: #606060; opacity: 1;"
    document.getElementById('fig_2').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-color: #feb386; opacity: 1;"
    document.getElementById('fig_4').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_5').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_6').style = "background-color: #606060; opacity: 1;"
    
}
function resetFunc_5(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-color: #606060; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-color: #feb386; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-color: #feb386; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-color: #2a4fb5; opacity: 0.5;"
    document.getElementById('fig_5').style = "background-color: #2a4fb5; opacity: 0.5;"
    document.getElementById('fig_6').style = "background-color: #606060; opacity: 0.5;"
    
}




function changeOpacity1_5() {
             if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
    result.value=roundPlus(parseFloat(result.value,10)+4.0,1);}
}
function changeOpacity2_5() {
            if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity3_5() {
             if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)+4.0,1);}
}
function changeOpacity4_5() {
             if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity5_5() {
            if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity6_5() {
            if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
result.value=roundPlus(parseFloat(result.value,10)+4.0,1);}
}
function resultFunc_6(){

    result.value="Баллы: "+result.value+ " из 18";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_2').style = "background-color: #feb386; opacity: 1;"
    document.getElementById('fig_3').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_5').style = "background-color: #2a4fb5; opacity: 1;"
    document.getElementById('fig_6').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_7').style = "background-color: #2a4fb5; opacity: 1;"
    document.getElementById('fig_8').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_9').style = "background-color: white; opacity: 0.4;"
    
}
function resetFunc_6(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-color: #606060; opacity: 0.5;"
    document.getElementById('fig_2').style = "background-color: #feb386; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-color: #feb386; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-color: #feb386; opacity: 0.5;"
    document.getElementById('fig_5').style = "background-color: #2a4fb5; opacity: 0.5;"
    document.getElementById('fig_6').style = "background-color: #606060; opacity: 0.5;"
    document.getElementById('fig_7').style = "background-color: #2a4fb5; opacity: 0.5;"
    document.getElementById('fig_8').style = "background-color: #606060; opacity: 0.5;"
    document.getElementById('fig_9').style = "background-color: #606060; opacity: 0.5;"
}



function changeOpacity1_6() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
     result.value=roundPlus(parseFloat(result.value,10)-3.0,1);}
}
function changeOpacity2_6() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+6.0,1);}
}
function changeOpacity3_6() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-3.0,1);}
}
function changeOpacity4_6() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-3.0,1);}
}
function changeOpacity5_6() {
                 if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+6.0,1);}
}
function changeOpacity6_6() {
                if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-3.0,1);}
}
function changeOpacity7_6() {
                  if ((fig_7.style.opacity!="0.4")&&(fig_7.style.opacity!="1")){
            fig_7.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+6.0,1);}
}
function changeOpacity8_6() {
                 if ((fig_8.style.opacity!="0.4")&&(fig_8.style.opacity!="1")){
            fig_8.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-3.0,1);}
}
function changeOpacity9_6() {
                 if ((fig_9.style.opacity!="0.4")&&(fig_9.style.opacity!="1")){
            fig_9.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-3.0,1);}
}
function resultFunc_7(){

    result.value="Баллы: "+result.value+ " из 28";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_2').style = "border-bottom: 60px solid blue; opacity: 1;"
    document.getElementById('fig_3').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_5').style = "border-bottom: 120px solid white; opacity: 0.4;"
    document.getElementById('fig_6').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_7').style = "border-bottom: 120px solid white; opacity: 0.4;"
    document.getElementById('fig_8').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_9').style = "border-bottom: 60px solid blue; opacity: 1;"
    
}
function resetFunc_7(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-color: yellow; opacity: 0.5;"
    document.getElementById('fig_2').style = "border-bottom: 60px solid blue; opacity: 0.5;"
    document.getElementById('fig_3').style = "background-color: red; opacity: 0.5;"
    document.getElementById('fig_4').style = "background-color: green; opacity: 0.5;"
    document.getElementById('fig_5').style = "border-bottom: 120px solid purple; opacity: 0.5;"
    document.getElementById('fig_6').style = "background-color: yellow; opacity: 0.5;"
    document.getElementById('fig_7').style = "border-bottom: 120px solid blue; opacity: 0.5;"
    document.getElementById('fig_8').style = "background-color: red; opacity: 0.5;"
    document.getElementById('fig_9').style = "border-bottom: 60px solid blue; opacity: 0.5;"
}



function changeOpacity1_7() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
     result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity2_7() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+14.0,1);}
}
function changeOpacity3_7() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity4_7() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity5_7() {
                 if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity6_7() {
                if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity7_7() {
                  if ((fig_7.style.opacity!="0.4")&&(fig_7.style.opacity!="1")){
            fig_7.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity8_7() {
                 if ((fig_8.style.opacity!="0.4")&&(fig_8.style.opacity!="1")){
            fig_8.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-4.0,1);}
}
function changeOpacity9_7() {
                 if ((fig_9.style.opacity!="0.4")&&(fig_9.style.opacity!="1")){
            fig_9.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+14.0,1);}
}
                
function resultFunc_8(){

    result.value="Баллы: "+result.value+ " из 36";
    document.getElementById('kn_sl').style.display = "block";
    document.getElementById('result').style.display = "block";
    document.getElementById('reset').style.display = "block";
    document.getElementById('calc').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/ball.jpeg); opacity: 1;"
    document.getElementById('fig_2').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_3').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_4').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_5').style = "background-image:url(img/mirror.jpeg); opacity: 1;"
    document.getElementById('fig_6').style = "background-image:url(img/plate.jpeg); opacity: 1;"
    document.getElementById('fig_7').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_8').style = "background-color: white; opacity: 0.4;"
    document.getElementById('fig_9').style = "background-image:url(img/wheel.jpeg); opacity: 1;"
    
}
function resetFunc_8(){
    document.getElementById('calc').style.display = "block";
    document.getElementById('result').style.display = "none";
    document.getElementById('kn_sl').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('fig_1').style = "background-image:url(img/ball.jpeg); opacity: 0.5;"
    document.getElementById('fig_2').style = "background-image:url(img/chess.jpeg); opacity: 0.5;"
    document.getElementById('fig_3').style = "background-image:url(img/cube.jpeg); opacity: 0.5;"
    document.getElementById('fig_4').style = "background-image:url(img/gift.jpeg); opacity: 0.5;"
    document.getElementById('fig_5').style = "background-image:url(img/mirror.jpeg); opacity: 0.5;"
    document.getElementById('fig_6').style = "background-image:url(img/plate.jpeg); opacity: 0.5;"
    document.getElementById('fig_7').style = "background-image:url(img/pyramid.jpeg); opacity: 0.5;"
    document.getElementById('fig_8').style = "background-image:url(img/ruler.jpeg); opacity: 0.5;"
    document.getElementById('fig_9').style = "background-image:url(img/wheel.jpeg); opacity: 0.5;"
}



function changeOpacity1_8() {
            if ((fig_1.style.opacity!="0.4")&&(fig_1.style.opacity!="1")){
            fig_1.style.opacity="1";
     result.value=roundPlus(parseFloat(result.value,10)+9.0,1);}
}
function changeOpacity2_8() {
                 if ((fig_2.style.opacity!="0.4")&&(fig_2.style.opacity!="1")){
            fig_2.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-7.2,1);}
}
function changeOpacity3_8() {
                 if ((fig_3.style.opacity!="0.4")&&(fig_3.style.opacity!="1")){
            fig_3.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-7.2,1);}
}
function changeOpacity4_8() {
                  if ((fig_4.style.opacity!="0.4")&&(fig_4.style.opacity!="1")){
            fig_4.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-7.2,1);}
}
function changeOpacity5_8() {
                 if ((fig_5.style.opacity!="0.4")&&(fig_5.style.opacity!="1")){
            fig_5.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+9.0,1);}
}
function changeOpacity6_8() {
                if ((fig_6.style.opacity!="0.4")&&(fig_6.style.opacity!="1")){
            fig_6.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+9.0,1);}
}
function changeOpacity7_8() {
                  if ((fig_7.style.opacity!="0.4")&&(fig_7.style.opacity!="1")){
            fig_7.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-7.2,1);}
}
function changeOpacity8_8() {
                 if ((fig_8.style.opacity!="0.4")&&(fig_8.style.opacity!="1")){
            fig_8.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)-7.2,1);}
}
function changeOpacity9_8() {
                 if ((fig_9.style.opacity!="0.4")&&(fig_9.style.opacity!="1")){
            fig_9.style.opacity="1";
 result.value=roundPlus(parseFloat(result.value,10)+9.0,1);}
}