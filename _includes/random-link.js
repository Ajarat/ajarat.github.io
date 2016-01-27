var randomlinks=new Array()

randomlinks[0]="http://www.station26brewing.co/"
randomlinks[1]="http://www.comradebrewing.com/"
randomlinks[2]="http://www.barnettandsonbrewing.com/"
randomlinks[3]="http://www.fremontbrewing.com/"
randomlinks[4]="http://www.horseanddragonbrewing.com/"
randomlinks[5]="http://fatebrewingcompany.com/"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}

/* 
<form method="post">
  <input type="button" name="B1" value="Random Link >>" onclick="randomlink()">
</form>
*/