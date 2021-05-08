

/*var home = 'Home page';
var classes = 'classes we have';
var myLocation = 'MAP';
var join_us='welcome to our GYM';

alert(join_us);
*/

var name=prompt ('please enter ur weight?');
var age=prompt ('please enter ur height?');


var setUrPlane=prompt ('what is ur goal? lose fat or get fit?');
//  // console.log(setUrPlane);
if (setUrPlane =='lose fat')
{
document.write('<h2> you are on ur way </h2>');
}
//  // console.log(setUrPlane);

else if(setUrPlane =='get fit'){
document.write('<h4> here we go! </h4>');
}
else{
 document.write('<img src="https://app.retargetbot.com/upload/comboposter/2/2_image_1582136788872399.jpg" width="70 px">')
  }

/*var plan= prompt('hfh');
for(i=0;i<3;i++){
 plan=document.write('pls choose ur goal');
  plan=i
}*/


/*while(i<3){
 if (setUrPlane !== "lose fat" || "get fit") {
 document.write('pls choose ur goal');}
 consol.log('hey');
i++
}*/

/* 1- ask user whats ur goal?
2- keep asking until he answer of lose fat or get fat
3- how many stars do u give our gym
4-show number of stars based on user input
*/

while (setUrPlane !== "lose fat" && setUrPlane !== "get fit"){
setUrPlane=prompt ('pls choose ur goal? lose fat or get fit?');
}

var rate= prompt('please rate our gym out of 5?');

for( var i=1; i<=rate; i++){

  if (i<=5){
  document.write('<img src="https://previews.123rf.com/images/travelman/travelman1610/travelman161000052/64334690-healthy-heart-icon-heart-with-healthy-status-check-mark-and-cardiogram-.jpg" width=50px>');
  }
  else {
    var note=prompt('please enter rate up to 5 only');
  }
//while (i<=5);
 // document.write('<img src="https://spng.pngfind.com/pngs/s/61-617798_health-fitness-icon-healthy-food-icon-png-transparent.png" width=50px>')
  }

