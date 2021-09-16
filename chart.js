// const canvas = document.getElementById('canvas')
// const ctx = canvas.getContext('2d')

// ctx.fillStyle = 'orange'
// ctx.fillRect(10, 10, 150, 100)


const draw = () => {
	const canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");

		ctx.beginPath();
		ctx.moveTo(75, 50);
		ctx.lineTo(100, 75);
		ctx.lineTo(100, 25);
		ctx.closePath()
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(75, 50);
		ctx.lineTo(10, 75);
		ctx.lineTo(10, 25);

		ctx.fill();
	}
}

draw()