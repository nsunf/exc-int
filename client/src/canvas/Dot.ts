class Dot {
  public x: number;
  public y: number;
  private cy: number;

  private r: number;

  private val: string;
  private date: string;

  private fillColor: string;
  private strokeColor: string;

  private timer?: NodeJS.Timeout;
  private animationReady = false;

  constructor(x: number, y: number, r: number, val: string, date: string) {
    this.x = x;
    this.y = 200;
    this.cy = y;

    this.r = r;

    this.fillColor = 'white';
    this.strokeColor = "#477CFF";

    this.val = val;
    this.date = date;
  }

  get toArray(): number[] {
    return [this.x, this.y];
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.strokeColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = this.strokeColor;
    ctx.textAlign = "center";
    ctx.font = '15px san serif';
    ctx.fillText(this.val, this.x, this.y - 40);
    ctx.fillText(this.date, this.x, 400);
  }

  update(ctx: CanvasRenderingContext2D) {
    if (!this.timer) {
      this.timer = setTimeout(() => {
        this.animationReady = true;
      }, 1000);
    }

    if (this.animationReady) {
      this.y += (this.cy - this.y)/20;
      if (Math.floor(this.cy) === Math.floor(this.y)) {
        this.animationReady = false;
        console.log("animation ended")
      }
    }
    this.draw(ctx);
  }
}

export default Dot;