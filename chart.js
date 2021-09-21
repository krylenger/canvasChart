

const ammendments1 = [
	{
		"distance": 5000,
		"distanceAmendment": -102.92796325683594,
		"reversalAmendment": 0.005912350490689278
	},
	{
		"distance": 7000,
		"distanceAmendment": -187.98590087890625,
		"reversalAmendment": 0.009630651213228703
	},
	{
		"distance": 9000,
		"distanceAmendment": -266.783447265625,
		"reversalAmendment": 0.012784276157617569
	}
]

const ammendments2 = [
	{
		"distance": 5000,
		"distanceAmendment": 129.80615234375,
		"reversalAmendment": -0.10146798938512802
	},
	{
		"distance": 7000,
		"distanceAmendment": 238.06939697265625,
		"reversalAmendment": -0.1482882797718048
	},
	{
		"distance": 9000,
		"distanceAmendment": 370.0867919921875,
		"reversalAmendment": -0.2005189210176468
	}
]

const ammendments3 = [
	{
		"distance": 5000,
		"distanceAmendment": 311.75286865234375,
		"reversalAmendment": 0.004098575096577406
	},
	{
		"distance": 7000,
		"distanceAmendment": 460.9224853515625,
		"reversalAmendment": 0.01384762953966856
	},
	{
		"distance": 9000,
		"distanceAmendment": 675.8667602539062,
		"reversalAmendment": 0.035481490194797516
	}
]

const ammendments4 = [
	{
		"distance": 6000,
		"distanceAmendment": 697.268310546875,
		"reversalAmendment": 0.06323515623807907
	},
	{
		"distance": 8000,
		"distanceAmendment": 1042.09521484375,
		"reversalAmendment": 0.09230849891901016
	},
	{
		"distance": 10000,
		"distanceAmendment": 1475.873779296875,
		"reversalAmendment": 0.1902010291814804
	}
]

const ammendments5 = [
	{
		"distance": 3000,
		"distanceAmendment": 854.1798095703125,
		"reversalAmendment": 1.5700048208236694
	},
	{
		"distance": 5000,
		"distanceAmendment": 1010.1925048828125,
		"reversalAmendment": 0.8868964314460754
	},
	{
		"distance": 7000,
		"distanceAmendment": 1189.7080078125,
		"reversalAmendment": 0.528669536113739
	}
]


/////


const distanceToRender = (amendment) => amendment.distance / 1000
const distanceAmendmentToRender = (amendment) => Number(amendment.distanceAmendment.toFixed(0))
const reversalAmendmentToRender = (amendment) => Number(amendment.reversalAmendment.toFixed(2))

const amendmentsToRender = ammendments3.map(amendment => ([
	distanceToRender(amendment),
	distanceAmendmentToRender(amendment),
	reversalAmendmentToRender(amendment),
]))
console.log('amendmentsToRender', amendmentsToRender);

const distances = [amendmentsToRender[0][0], amendmentsToRender[1][0], amendmentsToRender[2][0]]
const distanceAmendments = [amendmentsToRender[0][1], amendmentsToRender[1][1], amendmentsToRender[2][1]]

const rangeXmax = Math.max(...distances)
const rangeXmin = Math.min(...distances)
const rangeX = rangeXmax - rangeXmin;

// console.log('distances', distances);
// console.log('rangeX', rangeX);


const rangeYmax = Math.max(...distanceAmendments)
const rangeYmin = Math.min(...distanceAmendments)
const rangeY = rangeYmax - rangeYmin;

// console.log('distances', distances);
// console.log('rangeY', rangeY);

const rangeXpoints = (rangeX, rangeXmin) => {
	if (rangeX <= 5) {
		rangeXmin = rangeXmin >= 25 ? 25 : rangeXmin
		return [rangeXmin, rangeXmin + 1, rangeXmin + 2, rangeXmin + 3, rangeXmin + 4]
	} else if (rangeX <= 10) {
		rangeXmin = rangeXmin >= 20 ? 20 : rangeXmin
		return [rangeXmin, rangeXmin + 2, rangeXmin + 4, rangeXmin + 6, rangeXmin + 8]
	} else if (rangeX <= 15) {
		rangeXmin = rangeXmin >= 15 ? 15 : rangeXmin
		return [rangeXmin, rangeXmin + 3, rangeXmin + 6, rangeXmin + 9, rangeXmin + 12]
	} else if (rangeX <= 20) {
		rangeXmin = rangeXmin >= 10 ? 10 : rangeXmin
		return [rangeXmin, rangeXmin + 4, rangeXmin + 8, rangeXmin + 12, rangeXmin + 16]
	} else if (rangeX <= 25) {
		rangeXmin = rangeXmin >= 5 ? 5 : rangeXmin
		return [rangeXmin, rangeXmin + 5, rangeXmin + 10, rangeXmin + 15, rangeXmin + 20]
	} else if (rangeX <= 30)
		return [0, 8, 16, 24, 32]
}

const rangeYpoints = (rangeY, rangeYmin) => {
	if (rangeY <= 500) {
		rangeYmin = rangeYmin >= 1500 ? 500 : rangeYmin
		return [rangeYmin, rangeYmin + 100, rangeYmin + 200, rangeYmin + 300, rangeYmin + 400]
	} else if (rangeY <= 1000) {
		rangeYmin = rangeYmin >= 1000 ? 0 : rangeYmin
		return [rangeYmin, rangeYmin + 200, rangeYmin + 400, rangeYmin + 600, rangeYmin + 800]
	} else if (rangeY <= 1500) {
		rangeYmin = rangeYmin >= 1500 ? -500 : rangeYmin
		return [rangeYmin, rangeYmin + 300, rangeYmin + 600, rangeYmin + 900, rangeYmin + 1200]
	} else if (rangeY <= 2000)
		return [-1000, -500, 0, 500, 1000]
}


const xPoints = rangeXpoints(rangeX, rangeXmin);
const yPoints = rangeYpoints(rangeY, Math.floor(rangeYmin / 100) * 100);

const valueOfPixelX = (xPoints[1] - xPoints[0]) / 66
const valueOfPixelY = (yPoints[1] - yPoints[0]) / 44




console.log('valueOfPixelX', valueOfPixelX);
console.log('valueOfPixeY', valueOfPixelY);
console.log('yPoihts', yPoints);
// console.log('distanceAmendments', distanceAmendments);
// console.log('rangeXmax', rangeXmax);
// console.log('rangeXmin', rangeXmin);
// console.log('distances', distances);
// console.log('rangeX', rangeX);
// console.log('rangeY', rangeY);



/// DRAW

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

		//X triangle
		const triangleY = new Path2D();
		triangleY.moveTo(56.5, 29);
		triangleY.lineTo(48, 44);
		triangleY.lineTo(65, 44);
		ctx.fill(triangleY)

		//X triangle
		const triangleX = new Path2D();
		triangleX.moveTo(465, 295.5);
		triangleX.lineTo(450, 286.5);
		triangleX.lineTo(450, 303.5);
		ctx.fill(triangleX)


		ctx.font = '16px openSans'
		//Y legenda
		ctx.fillText(`ΔДΣ`, 17, 30);

		//Y legenda
		ctx.fillText(`Дт, км`, 468, 312);

		//loop for draw dashed lineY
		for (let i = 0, p = 44; i < 5; i++, p = p + 44) {
			ctx.lineWidth = 2;
			ctx.setLineDash([5, 5]);
			ctx.beginPath();
			ctx.moveTo(57.5, 295 - p);
			ctx.lineTo(448.5, 295 - p);
			ctx.stroke();

			ctx.fillText(yPoints[i] > 0 ? `+${yPoints[i]}` : `${yPoints[i]}`, 10.5, 301 - p);
		}

		//loop for draw dashed lineX
		for (let i = 0, p = 66; i < 5; i++, p = p + 66) {
			ctx.lineWidth = 2;
			ctx.setLineDash([5, 5]);
			ctx.beginPath();
			ctx.moveTo(56.5 + p, 296);
			ctx.lineTo(56.5 + p, 32);
			ctx.stroke();

			ctx.fillText(`${xPoints[i]}`, 52.5 + p, 312);
		}

		//draw points 

		//calculate point
		let points = []
		amendmentsToRender.forEach(amendment => {
			const distaneFromBeginningY = (amendment[1] - yPoints[0]) / valueOfPixelY
			const distaneFromBeginningX = (amendment[0] - xPoints[0]) / valueOfPixelX

			points.push([122.5 + distaneFromBeginningX, 251.5 - distaneFromBeginningY])
		})

		//draw lines
		ctx.lineWidth = 3;
		ctx.setLineDash([0, 0]);
		ctx.beginPath()
		ctx.moveTo(...points[0])
		ctx.lineTo(...points[1])
		ctx.lineTo(...points[2])
		ctx.stroke()


		//draw point
		ctx.fillStyle = '#D87C10';

		points.forEach(point => {
			ctx.beginPath()
			ctx.arc(point[0], point[1], 7.5, 0, (Math.PI / 180) * 360, true)
			ctx.fill()
			ctx.closePath()
		})

	}
}



draw()