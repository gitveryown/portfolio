const cursorTag = document.querySelector("div.cursor");
const ball = cursorTag.querySelector("div");

let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0
let speed = 0.01

const animate = () => {
	currentX += (aimX - currentX) * speed
    currentY += (aimY - currentY) * speed
    
    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    requestAnimationFrame(animate)
}

animate()

document.addEventListener("mousemove", function(e){
	aimX = e.pageX
    aimY = e.pageY
	
	console.log(ball.style.backgroundColor = "red")
})