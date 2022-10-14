import { useEffect, useRef } from "react";
import GraphPresenter from "../presenters/GraphPresenter";

function GraphContainer() {
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const dots: Dot[] = [];

  useEffect(() => {
    const canvasWrap = canvasWrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvasWrap || !canvas || !ctx) return;

    const resize = () => {
      canvas.width = canvasWrap.clientWidth;
      canvas.height = canvasWrap.clientHeight;
    }
    window.addEventListener('resize', resize);


    const interval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 1000 / 30);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    }
  }, []);

  return (
    <GraphPresenter
      canvasWrapRef={canvasWrapRef}
      canvasRef={canvasRef}
    />
  )
}

export default GraphContainer;

class Dot {
  public x: number;
  public y: number;
  private r: number;
  private fillColor: string;
  private strokeColor: string;
  constructor(x: number, y: number, r: number) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.fillColor = '#000';
    this.strokeColor = "#477CFF";
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.strokeColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  update(ctx: CanvasRenderingContext2D) {
    this.draw(ctx);
  }
}

class Line {
  private dots: Dot[];
  private height: number;

  constructor(dots: Dot[], height: number) {
    this.dots = dots;
    this.height = height;
  }

  getCenter(x1: number, y1: number, x2: number, y2: number) {
    return { x: (x2 + x1)/2, y: (y2 + y1)/2 };
  }

  draw(ctx: CanvasRenderingContext2D) {
    let prevX = this.dots[0].x;
    let prevY = this.dots[0].y;
    ctx.moveTo(prevX, prevY);
  }

  update(ctx: CanvasRenderingContext2D) {
    this.draw(ctx);
  }
}