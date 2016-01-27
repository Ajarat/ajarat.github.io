var randomlinks=[
  "http://www.station26brewing.co/",
  "http://www.comradebrewing.com/",
  "http://www.barnettandsonbrewing.com/",
  "http://www.fremontbrewing.com/",
  "http://www.horseanddragonbrewing.com/",
  "http://fatebrewingcompany.com/"
]

function randomlink(){
  window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}

/* 
<form method="post">
  <input type="button" name="B1" value="Random Link >>" onclick="randomlink()">
</form>
*/