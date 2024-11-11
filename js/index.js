function randomText(){
    var userNames=["― Pablo Picasso","― Mae West","― Oscar Wilde","― Robert Frost","― Allen Saunders"]
    var text =[ "“Everything you can imagine is real.”","“You only live once, but if you do it right, once is enough.”","“To live is the rarest thing in the world. Most people exist, that is all.”","“In three words I can sum up everything I've learned about life: it goes on.”","“Life is what happens to us while we are making other plans.”"]
    var num=  Math.floor(Math.random()*userNames.length)
 
        document.getElementById("demo").innerHTML= (text[num]+" <br>"+userNames[num])
    
  
    
}

