

const ammendmentsOne = [
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

const ammendmentsTwo = [
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

const ammendmentsThree = [
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

const ammendmentsFour = [
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

const ammendmentsFive = [
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

const amendmentsToRender = ammendmentsOne.map(amendment => ([
	distanceToRender(amendment),
	distanceAmendmentToRender(amendment),
	reversalAmendmentToRender(amendment),
]))
console.log('amendmentsToRender', amendmentsToRender);

const distances = [amendmentsToRender[0][0], amendmentsToRender[1][0], amendmentsToRender[2][0]]
const distanceAmendments = [amendmentsToRender[0][1], amendmentsToRender[1][1], amendmentsToRender[2][1]]

const rangeXmax = Math.max(...distances)
const rangeXmin = Math.min(...distances)
const rangeX = rangeXmax - rangeXmin + 2;

const rangeYmax = Math.max(...distanceAmendments)
const rangeYmin = Math.min(...distanceAmendments)
const rangeY = rangeYmax - rangeYmin + 200;

const rangeXpoints = (rangeX) => {
	let rangeXpointsArr = []
	switch (rangeX) {
		case rangeX <= 5:
			rangeXpointsArr = [1, 2, 3, 4, 5]
			return rangeXpointsArr
		case rangeX <= 10:
			rangeXpointsArr = [2, 4, 6, 8, 10]
			return rangeXpointsArr
		case rangeX <= 15:
			rangeXpointsArr = [3, 6, 9, 12, 15]
			return rangeXpointsArr
		case rangeX <= 20:
			rangeXpointsArr = [4, 8, 12, 14, 18]
			return rangeXpointsArr
	}
}


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