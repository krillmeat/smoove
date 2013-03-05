var divList=new Array();
var isDiv=false;

function setUpArray()
{
    //GET ALL OF THE LINKS
    var divListStart = document.getElementsByTagName('div');
    for(var i=0; i<divListStart.length; i++)
    {
      divList.push(divListStart[i].id);
    }
}

function checkDivLink(linkCheck)
{
  for(var r=0; r<divList.length; r++)
  {
    if(linkCheck===divList[r])
    {
      isDiv=true;
    }
  }
}

$(document).ready(function(){
  
  setUpArray();
  
  //CLICKING LINKS
   $("a").click(function(){
      var preHash=$(this).attr("href");
      var postHash=preHash.substring(1);
      
      checkDivLink(postHash);
      
      var jumpTo = $(preHash).position();
      var divHeight = Math.abs(jumpTo.top-window.scrollY);
      
      
      if(isDiv){
        var linkInterval = setInterval(function(){
            if(window.scrollY<=jumpTo.top){
              if(window.scrollY+(divHeight/50)===jumpTo.top || window.scrollY+(divHeight/50)>jumpTo.top)
              {
                window.scrollTo(0,jumpTo.top);
                clearInterval(linkInterval);
              }
              else{window.scrollTo(0,window.scrollY+(divHeight/50));}
            }
            else if(window.scrollY>jumpTo.top){
              if(window.scrollY-(divHeight/50)===jumpTo.top || window.scrollY-(divHeight/50)<jumpTo.top)
              {
                window.scrollTo(0,jumpTo.top);
                clearInterval(linkInterval);
              }
              else{window.scrollTo(0,window.scrollY-(divHeight/50));}
            }
          },1);
    
        event.preventDefault();
      }
   });
 });