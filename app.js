

var name=prompt ('please enter ur weight?');
var age=prompt ('please enter ur height?');

var setUrPlane=prompt ('what is ur goal? lose fat or get fit?');

if (setUrPlane =='lose fat')
{
document.write('<h4> you are on ur way </h4>');
}

else if(setUrPlane =='get fit'){
document.write('<h4> here we go! </h4>');
}

else{

 document.write('<img src="https://cdn4.vectorstock.com/i/1000x1000/78/18/healthy-heart-cardio-icon-vector-12827818.jpg" width="50 px">')

}

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
}
