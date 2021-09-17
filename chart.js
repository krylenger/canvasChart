// const canvas = document.getElementById('canvas')
// const ctx = canvas.getContext('2d')

// ctx.fillStyle = 'orange'
// ctx.fillRect(10, 10, 150, 100)


const draw = () => {
	const canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");

		// Y vector
		ctx.lineWidth = 3;
		ctx.beginPath();
		ctx.moveTo(56.5, 296);
		ctx.lineTo(56.5, 32);
		ctx.stroke();

		//X vector
		ctx.beginPath();
		ctx.moveTo(56.5, 295.5);
		ctx.lineTo(462, 295.5);
		ctx.stroke();

		const triangleY = new Path2D();
		triangleY.moveTo(56.5, 29);
		triangleY.lineTo(48, 44);
		triangleY.lineTo(65, 44);
		ctx.fill(triangleY)

		const triangleX = new Path2D();
		triangleX.moveTo(465, 295.5);
		triangleX.lineTo(450, 286.5);
		triangleX.lineTo(450, 303.5);
		ctx.fill(triangleX)


		//dashed line
		ctx.lineWidth = 2;
		ctx.setLineDash([5, 5]);
		ctx.beginPath();
		ctx.moveTo(57.5, 256);
		ctx.lineTo(448.5, 256);
		// ctx.lineTo(450, 303.5);
		ctx.stroke();



	}
}

draw()