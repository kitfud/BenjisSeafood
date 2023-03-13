var canvas = document.getElementById("myCanvas")
var context = canvas.getContext('2d')

function drawLogo(){
context.fillStyle = "orange";
context.beginPath();
context.moveTo(108/4, 0.0/4);
context.lineTo(141/4, 70/4);
context.lineTo(218/4, 78.3/4);
context.lineTo(162/4, 131/4);
context.lineTo(175/4, 205/4);
context.lineTo(108/4, 170/4);
context.lineTo(41.2/4, 205/4);
context.lineTo(55/4, 131/4);
context.lineTo(1/4, 78/4);
context.lineTo(75/4, 68/4);
context.lineTo(108/4, 0/4);
context.closePath();
context.fill();

context.font = "20px Arial";
context.fillStyle = "Red";
context.strokeStyle = "Red";
context.fillText("B.", 20, 35);
}


async function getInfo(){
   await fetch("https://restarauntapi.kitfuderich1.repl.co/info/photos")
  .then((response) => response.json())
  .then((data) =>{
    console.log(data)
    let photo1 = document.getElementById("location")
    let photo2 = document.getElementById("venu")
    let photo3 = document.getElementById("scenery")

    if(photo1){
    photo1.src = data.Venu
    photo2.src = data.Scenery
    photo3.src = data.Dining_Room

    }
   })


}

getInfo()

async function getDescription(){
    await fetch("https://restarauntapi.kitfuderich1.repl.co/info/description")
  .then((response) => response.json())
  .then((data) =>{
  let description = document.getElementById("description")
  if(description){
  description.innerHTML = data
  }
   })
}

getDescription()

async function getMenuData(){
   await fetch("https://restarauntapi.kitfuderich1.repl.co/menu")
  .then((response) => response.json())
  .then((data) =>{
    console.log(data)
    formatImages(data)
   })
}


function formatImages(menu){
  //console.log("image")
  let image1 = document.getElementById("dish1")
  let image2 = document.getElementById("dish2")
  let image3 = document.getElementById("dish3")

  if(image1){
  image1.src = menu.Chips.image
  image2.src = menu.Fish.image
  image3.src = menu.Combo.image
  


  let title1 = document.getElementById("dish1Title")
  let title2 = document.getElementById("dish2Title")
  let title3 = document.getElementById("dish3Title")

  title1.innerHTML = "Chips"
  title2.innerHTML = "Fish"
  title3.innerHTML ="Combo"

  let desc1 = document.getElementById("dish1Description")
  let desc2 = document.getElementById("dish2Description")
  let desc3 = document.getElementById("dish3Description")

  desc1.innerHTML = menu.Chips.description
  desc2.innerHTML = menu.Fish.description
  desc3.innerHTML = menu.Combo.description

  let price1 = document.getElementById("price1")
  let price2 = document.getElementById("price2")
  let price3 = document.getElementById("price3")

  price1.innerHTML = menu.Chips.price + "$"
  price2.innerHTML = menu.Fish.price + "$"
  price3.innerHTML = menu.Combo.price + "$"
  }
  
}

window.onload = function(){
drawLogo()
getMenuData()
}