
// var newNode = document.createElement("section");
// var node = document.createTextNode("This is an article.");
// newNode.appendChild(node);
// document.getElementById("p--main").appendChild(newNode);

//challenge 1
const articleRef = document.querySelector("#main")
console.log(articleRef)

let paragraphElement = document.createElement("p")
let paragraphTextNode = document.createTextNode("Made up mission statement")
paragraphElement.appendChild(paragraphTextNode)
console.log(paragraphTextNode)

// articleRef.appendChild(paragraphElement)

// var anchor = document.getElementById("congressional-district");
// console.log(anchor)  
// var att = document.createAttribute("article");        
// att.value = "5th Congressional District";     
// anchor.setAttributeNode(att)     

const congressionalDistAttr = document.createAttribute("congressional-district")
congressionalDistAttr.value = "5"

articleRef.setAttributeNode(congressionalDistAttr)