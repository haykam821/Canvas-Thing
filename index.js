const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.90;
canvas.height = window.innerHeight * 0.90;
const toolbarY = canvas.height * 0.92;

let tools = [
	{
		name: "Pen",
		icon: "🖋️"
	},
	{
		name: "Eraser",
		icon: "E"
	},
	{
		name: "Test",
		icon: "C"
	}
];
let selectedTool = 0;

function render() {
	ctx.fillStyle = "lightgray";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "black";
	ctx.fillRect(0, canvas.height, canvas.width, canvas.height * -0.15);
	
	ctx.fillStyle = "pink";
	ctx.fillRect(canvas.width / 2, 0, 5, canvas.height)
	
	ctx.font = `${canvas.height * 0.08}px sans-serif`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = "white";
	for (let index = 0; index < tools.length; index++) {
		const item = tools[index];
		ctx.fillText(item.icon, canvas.width / 2 + (index / (tools.length + 1)), toolbarY);
	}
	
	window.requestAnimationFrame(render);
}
render();
