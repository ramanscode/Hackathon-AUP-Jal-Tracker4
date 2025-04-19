
import { useEffect, useRef } from "react";

const HeroImage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      
      if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio: ratio = 1 } = window;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.scale(ratio, ratio);
        return true;
      }

      return false;
    };

    const circles: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }> = [];

    const createCircles = () => {
      const colors = [
        "rgba(58, 124, 165, 0.6)", // JalBlue-500
        "rgba(15, 76, 129, 0.5)",  // JalBlue-600
        "rgba(46, 139, 87, 0.4)",  // JalGreen-500
        "rgba(122, 194, 151, 0.3)" // JalGreen-400
      ];

      circles.length = 0;
      for (let i = 0; i < 15; i++) {
        const radius = Math.random() * 60 + 20;
        circles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          dx: (Math.random() - 0.5) * 1,
          dy: (Math.random() - 0.5) * 1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach(circle => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = circle.color;
        ctx.fill();

        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
          circle.dx = -circle.dx;
        }

        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
          circle.dy = -circle.dy;
        }

        circle.x += circle.dx;
        circle.y += circle.dy;
      });
    };

    window.addEventListener("resize", () => {
      if (resizeCanvas()) {
        createCircles();
      }
    });

    resizeCanvas();
    createCircles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full object-cover animate-float"
    />
  );
};

export default HeroImage;
