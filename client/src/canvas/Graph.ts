import Dot from "./Dot";

class Graph {
  private x: number;
  private y: number;

  private width: number;
  private height: number;

  private minPos: { x: number, y: number };
  private maxPos: { x: number, y: number };

  private dealBasArr: ExchangeDealBas[];
  private values: number[];
  private dots: Dot[];

  constructor(x: number, y: number, width: number, height: number, dealBasArr: ExchangeDealBas[]) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.minPos = { x: x - width/2, y: y - height/2 };
    this.maxPos = { x: x + width/2, y: y + height/2 };

    this.dealBasArr = dealBasArr;
    this.values = dealBasArr.map(deal => parseInt(deal.deal_bas_r.replace(',', '')));
    this.dots = this.getDots();
  }

  get minDotPosY(): number {
    const orderedArr = this.dots.sort((lhs, rhs) => lhs.y < rhs.y ? -1 : 1);
    return orderedArr[0].y;
  }

  get maxDotPosY(): number {
    const orderedArr = this.dots.sort((lhs, rhs) => lhs.y > rhs.y ? -1 : 1);
    return orderedArr[0].y;
  }

  getDots(): Dot[] {
    let reuslt: Dot[] = [];

    const orderedValues = this.values.sort();
    const minVal = orderedValues[0];
    const maxVal = orderedValues[orderedValues.length - 1];

    const dotRangeLength = this.height * 0.8;
    const xOffset = this.width / (this.values.length - 1);

    this.values.forEach((val, i) => {
      const dealBas = this.dealBasArr[i];
      let py = (val - minVal) / (maxVal - minVal) * dotRangeLength;
      const x = this.minPos.x + xOffset * i;
      const y = this.maxPos.y - (this.height - dotRangeLength) - py;

      reuslt.push(new Dot(x, y, 6, dealBas.deal_bas_r, dealBas.date, this.maxPos.y + 20));
    })

    return reuslt;
  }

  drawCurve(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = 'rgba(71, 124, 255, 1)';
    ctx.fillStyle = 'rgba(71, 124, 255, 0.4)';

    ctx.beginPath();

    const points = this.getCurvePoints();

    ctx.moveTo(points[0], points[1]);
    for (let i = 2; i < points.length - 1; i += 2) {
      ctx.lineTo(points[i], points[i + 1]);
    }

    ctx.stroke();

    ctx.lineTo(this.maxPos.x, this.maxPos.y);
    ctx.lineTo(this.minPos.x, this.maxPos.y);
    ctx.lineTo(points[0], points[1])
    ctx.closePath();

    ctx.fill();
  }

  getCurvePoints(): number[] {
    let curvePoints: number[] = [];
    let points: number[] = [];
    this.dots.forEach(dot => points = points.concat(dot.toArray));
    let _points = points.slice(0);

    _points.unshift(points[1]);
    _points.unshift(points[0]);
    _points.push(points[points.length - 2]);
    _points.push(points[points.length - 1]);

    let numOfSegments = 16;
    let tension = 0.5;

    for (let i = 2; i < _points.length - 4; i += 2) {
      for (let t = 0; t <= numOfSegments; t++) {
        let t1x = (_points[i+2] - _points[i-2]) * tension;
        let t2x = (_points[i+4] - _points[i]) * tension;
  
        let t1y = (_points[i+3] - _points[i-1]) * tension;
        let t2y = (_points[i+5] - _points[i+1]) * tension;
  
        let st = t / numOfSegments;
  
        let c1 =   2 * Math.pow(st, 3) 	- 3 * Math.pow(st, 2) + 1; 
        let c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2); 
        let c3 = 	   Math.pow(st, 3)	- 2 * Math.pow(st, 2) + st; 
        let c4 = 	   Math.pow(st, 3)	- 	  Math.pow(st, 2);
  
        let x = c1 * _points[i]	+ c2 * _points[i+2] + c3 * t1x + c4 * t2x;
        let y = c1 * _points[i+1]	+ c2 * _points[i+3] + c3 * t1y + c4 * t2y;
  
        curvePoints.push(x);
        curvePoints.push(y);
      }
    }

    return curvePoints;
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.drawCurve(ctx);
    this.dots.forEach(dot => dot.update(ctx));
  }

  update(ctx: CanvasRenderingContext2D) {
    this.draw(ctx);
  }
}

export default Graph;