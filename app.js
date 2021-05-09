

var weight =prompt ('please enter ur weight?');
var height =prompt ('please enter ur height?');

var setUrPlane=prompt ('what is ur goal? lose fat or get fit?');

if (setUrPlane =='lose fat')
{
document.write('<h4> you are on ur way </h4>');
}

else if(setUrPlane =='get fit')
{
document.write('<h4> here we go! </h4>');
}

function planeSetUp (weigh, height){

while (setUrPlane !== "lose fat" && setUrPlane !== "get fit"){
setUrPlane=prompt ('pls choose ur goal? lose fat or get fit?');
}
var plane=document.write("ur plane set up uploading");
return plane;
}



var getRating =function(){

var result='';
var rate= prompt('please rate our gym out of 5?');

for( var i=1; i<=rate; i++){

 if (i<=5){
  document.write('<img src="https://previews.123rf.com/images/travelman/travelman1610/travelman161000052/64334690-healthy-heart-icon-heart-with-healthy-status-check-mark-and-cardiogram-.jpg" width=50px>');
  }
  else {
    rate=prompt('please enter rate up to 5 only');
  }
}
return result;
}

planeSetUp("53","158");

getRating();