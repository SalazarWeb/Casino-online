import { useEffect, useRef } from 'react';

interface CrashChartProps {
  multiplier: number;
  gameState: 'waiting' | 'playing' | 'crashed';
}

export const CrashChart = ({ multiplier, gameState }: CrashChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    
    const points = [];
    for (let i = 0; i <= multiplier; i += 0.1) {
      const x = (i / multiplier) * canvas.width;
      const y = canvas.height - (Math.pow(1.0718, i * 10) - 1) * 50;
      points.push({ x, y });
    }

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(point => {
      ctx.lineTo(point.x, point.y);
    });

    ctx.strokeStyle = gameState === 'crashed' ? '#ff4444' : '#4CAF50';
    ctx.lineWidth = 3;
    ctx.stroke();

  }, [multiplier, gameState]);

  return (
    <div className="relative w-full h-[300px] bg-[#121225] rounded-lg overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        width={800}
        height={300}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
        {multiplier.toFixed(2)}x
      </div>
    </div>
  );
};
