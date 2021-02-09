function check(){
	if((cell[1][1]==1)&&(cell[2][1]==1)&&(cell[3][1]==1)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[1][2]==2)&&(cell[2][2]==2)&&(cell[3][2]==2)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[4][1]==1)&&(cell[5][1]==1)&&(cell[6][1]==1)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[4][2]==2)&&(cell[5][2]==2)&&(cell[6][2]==2)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[7][1]==1)&&(cell[8][1]==1)&&(cell[9][1]==1)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[7][2]==2)&&(cell[8][2]==2)&&(cell[9][2]==2)){
	document.getElementById("demo").innerHTML="Winner";}
	
	if((cell[2][1]==1)&&(cell[5][1]==1)&&(cell[8][1]==1)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[2][2]==2)&&(cell[5][2]==2)&&(cell[8][2]==2)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[1][1]==1)&&(cell[4][1]==1)&&(cell[7][1]==1)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[1][2]==2)&&(cell[4][2]==2)&&(cell[7][2]==2)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[3][1]==1)&&(cell[6][1]==1)&&(cell[9][1]==1)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[3][2]==2)&&(cell[6][2]==2)&&(cell[9][2]==2)){
	document.getElementById("demo").innerHTML="Winner";}

	
	
	if((cell[1][1]==1)&&(cell[5][1]==1)&&(cell[9][1]==1)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[1][2]==2)&&(cell[5][2]==2)&&(cell[9][2]==2)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[3][1]==1)&&(cell[5][1]==1)&&(cell[7][1]==1)){
	document.getElementById("demo").innerHTML="Winner";}
	if((cell[3][2]==2)&&(cell[5][2]==2)&&(cell[7][2]==2)){
	document.getElementById("demo").innerHTML="Winner";}
	


	
	

}

	


function keyHit_a(){
if(event.key=='a'){chgtoPic12(2);document.getElementById("par1").value="testing";}	
	
}