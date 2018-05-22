
var newNode = document.createElement("section")
var node = document.createTextNode("This is an article. This is a new article. This is a very new article")
newNode.appendChild(node)
document.getElementById("p--main").appendChild(newNode)


var anchor = document.getElementById("congressional-district");
console.log(anchor)  
var att = document.createAttribute("article");        
att.value = "5th Congressional District";     
anchor.setAttributeNode(att)     
