$(document).ready(function(){var t=$("#image")[0],e=new Raphael(t,300,482),i="belaDiagram/images/bela_pins_jun2016.jpg";e.image(i,0,0,300,482);var a="belaDiagram/json/data.json";$.getJSON(a,function(t){for(var i in t)for(var a in t[i].things){var n=t[i].things[a],s=n.elemclass+" tooltip",o=e.rect(n.x,n.y,n.width,n.height);o.node.setAttribute("class",s),o.node.id=n.id,$(".tooltip").tooltipster({content:$('<div class="tipText">'+n.text+"</div>")})}$("rect").mouseenter(function(){$(this).css("border","2px solid red")}),$("rect").mouseleave(function(){var t="span#z"+$(this).attr("id");$(t).attr("style",null)})})});