function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
   function array(n,k) {
    let array =new Array(k+1);
    for (i=n, array=[]; i<k+1; i++){
    array.push([i]);
    }  
    return array;
  }   
  let z=0;
function n() {
   set =Math.floor(document.getElementById('inp').value);
   radius = 200;
   width = 600;
   height = 600;
   angle = 300;
   schtk = 0;
   let arrayobj = array(1,set);  
  server = ``;  
  for (i = 0; i < arrayobj.length; i++) {
     server += `<div class='station' id='test'><p>`+'id:'+arrayobj[i]+`</p></div>`;      
    }
    $(".container1").html(server);
  $(".station").each(function coord(index) {         
    $(this).css({
      right: "350px",
      top: schtk + "px"    
    });
    
    schtk +=80;
  });
    //set2 = document.getElementById('inp').value;
    schtk2=0 ;
    user = ``;  
  for (i = 0; i < arrayobj.length; i++) {
     user += `<div class='user1'><p>`+arrayobj[i]+`</p></div>`; }
      $(".container2").html(user);
    $(".user1").each(function coord(index) {
    $(this).css({
      right: "250px",
      top: schtk2 + "px"
      }); 
    schtk2+=80; 
    });
    
    schtk3=0;
    let user2 = ``;
    
    //Math.floor(set)
    let arrayobj2 = array(set+1, set+2); 
    //arrayobj2.splice(1,1,'8'); 
  for (i = 0; i < arrayobj2.length; i++) {
     user2 += `<div class='user2'id='user22' style="right:10px;"><p>`+arrayobj2[i]+`</p></div>`; 
    
     }
     $(".container3").html(user2);
     $(".user2").each(function coord(index) {
      $(this).css({
      top: schtk3 + "px"
      }); 
    schtk3+=80; 
    });
    
    let User2=0;
// �������    
//for (x=1; x=15; x++){
//let v=-10000;
//setInterval(function() {
//v=v+10000;
let randTime =randomInteger(500,5000);  
//let timer = setInterval(
function ochered() {
console.log(User2)
let randUser1=randomInteger(0,3);
predZnach=arrayobj[randUser1]; // �������� �������� 1-�� ������� �� ���������
arrayobj.splice(randUser1,1,arrayobj2[User2]); 
    schtk2=0 ;
    user = ``;  
  for (i = 0; i < arrayobj.length; i++) {
     user += `<div class='user1'><p>`+arrayobj[i]+`</p></div>`; }
      $(".container2").html(user);
    $(".user1").each(function coord(index) {
    $(this).css({
      right: "250px",
      top: schtk2 + "px"
      }); 
    schtk2+=80; 
    });
arrayobj2.splice(User2,1,predZnach);
 user2 = ``;
 schtk3=0;
  for (i = 0; i < arrayobj2.length; i++) {
     user2 += `<div class='user2'id='user22' style="right:10px;"><p>`+arrayobj2[i]+`</p></div>`; 
     }
     $(".container3").html(user2);
     $(".user2").each(function coord(index) {
      $(this).css({
      top: schtk3 + "px"
      }); 
    schtk3+=80; 
    });
    if (User2<arrayobj2.length-1){
    User2=+1;
    }
    else{
    User2=0;
    }    
 
}; 

(function runInterval() {
    interval = randomInteger(500, 5000);
    setTimeout(function(){
       ochered();
       runInterval();
    }, interval);
})()

//,randTime);
 //timeset = 3 * randTime;
 // setTimeout(function() {
  // clearInterval(timer);
  //}, timeset); 
};