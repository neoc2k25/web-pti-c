import { useEffect, useRef, type JSX } from "react";

type CircleOptions = {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  radius: number;
  color: string;
};

const Snow = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext("2d");
    if (!c) return;

    // set size
    const resize = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const data: DrawingCircle[] = [];

    class DrawingCircle {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      radius: number;
      color: string;

      constructor({ x, y, speedX, speedY, radius, color }: CircleOptions) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.radius = radius;
        this.color = color;
      }

      draw(): void {
        c!.beginPath();
        c!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c!.fillStyle = this.color;
        c!.fill();
        c!.stroke();
      }

      update(): void {
        if (
          this.x - this.radius > window.innerWidth ||
          this.x - this.radius < 0
        ) {
          this.speedX *= -1;
        }

        if (
          this.y - this.radius > window.innerHeight ||
          this.y - this.radius < 0
        ) {
          this.speedY *= -1;
        }

        this.x += this.speedX;
        this.y += this.speedY;
        this.draw();
      }
    }

    const number: number = window.innerWidth > 750 ? 100 : 80;
    const colors: string[] = ["white"];

    for (let i = 0; i < number; i++) {
      data.push(
        new DrawingCircle({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          speedX: (Math.random() + 0.3) * 2,
          speedY: (Math.random() + 0.3) * 2,
          radius: Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      );
    }

    let animationId: number;

    const draw = (): void => {
      animationId = requestAnimationFrame(draw);

      c.clearRect(0, 0, canvas.width, canvas.height);

      data.forEach((circle) => circle.update());
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};
export default Snow;
