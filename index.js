const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.90;
canvas.height = window.innerHeight * 0.90;
const toolbarY = canvas.height * 0.92;

let tools = [
	{
		name: "Pen",
		icon: "P"
	},
	{
		name: "Eraser",
		icon: "E"
	},
	{
		name: "Coordinates",
		icon: "C"
	}
];
let selectedTool = 0;

window.addEventListener("keydown", event => {
	const code = event.code;
  if (code.startsWith("Digit")) {
  	const indexSelected = parseInt(code.replace("Digit", "")) - 1;
  	selectedTool = tools[indexSelected] ? indexSelected : selectedTool;
  }
});

function render() {
	ctx.fillStyle = "lightgray";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "black";
	ctx.fillRect(0, canvas.height, canvas.width, canvas.height * -0.15);
	
	ctx.font = `${canvas.height * 0.08}px sans-serif`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = "white";
	for (let index = 0; index < tools.length; index++) {
  	const toolbarRaisedY = selectedTool === index ? toolbarY - 15 : toolbarY;
  
		const item = tools[index];
		ctx.fillText(item.icon, index * 50 + canvas.width / 2 - ((tools.length - 1) * 25), toolbarRaisedY);
	}
	
	window.requestAnimationFrame(render);
}
window.requestAnimationFrame(render);
