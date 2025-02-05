import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface CrashChartProps {
  multiplier: number;
  gameState: 'waiting' | 'playing' | 'crashed';
}

export const CrashChart = ({ multiplier, gameState }: CrashChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rocketRef = useRef<HTMLImageElement | null>(null);
  const lastPointRef = useRef<{x: number, y: number} | null>(null);

  // Función para lanzar el confetti
  const launchConfetti = (x: number, y: number) => {
    confetti({
      particleCount: 100,
      spread: 35,
      origin: { 
        x: x / window.innerWidth,
        y: y / window.innerHeight 
      },
      colors: ['#ff0000', '#ff4444', '#ff8888'], // Colores rojizos para simular explosión
      startVelocity: 30,
      gravity: 0.5,
      shapes: ['circle'],
      scalar: 0.2
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Ajustar el tamaño del canvas para mantener proporción 16:9
    const container = canvas.parentElement;
    if (container) {
      const containerWidth = container.clientWidth;
      canvas.width = containerWidth;
      canvas.height = containerWidth * (4/10);
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Crear imagen del cohete
    if (!rocketRef.current) {
      const rocket = new Image();
      rocket.src = '/rocket.svg';
      rocketRef.current = rocket;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar la línea comenzando desde la mitad
    const startX = canvas.width * 0.0;
    const startY = canvas.height * 1.0;
    
    const points = [];
    points.push({ x: startX, y: startY });

    for (let i = 0; i <= multiplier; i += 0.1) {
      const x = startX + (i / multiplier) * (canvas.width * 0.8);
      const y = startY - (Math.pow(1.0718, i * 10) - 1) * 50;
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

    // Dibujar el cohete o lanzar confetti
    if (points.length > 0) {
      const lastPoint = points[points.length - 1];
      lastPointRef.current = lastPoint;

      if (gameState !== 'crashed') {
        // Dibujar cohete
        if (rocketRef.current) {
          const rocketSize = 20;
          const prevPoint = points[points.length - 2] || points[0];
          const angle = Math.atan2(lastPoint.y - prevPoint.y, lastPoint.x - prevPoint.x);
          
          ctx.save();
          ctx.translate(lastPoint.x, lastPoint.y);
          ctx.rotate(angle - Math.PI / -4);
          ctx.drawImage(
            rocketRef.current,
            -rocketSize / 2,
            -rocketSize / 2,
            rocketSize,
            rocketSize
          );
          ctx.restore();
        }
      } else if (lastPointRef.current) {
        // Obtener la posición real en la pantalla
        const rect = canvas.getBoundingClientRect();
        const x = rect.left + lastPointRef.current.x;
        const y = rect.top + lastPointRef.current.y;
        
        // Lanzar confetti solo una vez cuando cambia a crashed
        launchConfetti(x, y);
      }
    }

  }, [multiplier, gameState]);

  return (
    <div 
      className="relative w-full h-auto aspect-video rounded-lg overflow-hidden"
      style={{
        backgroundImage: 'url("https://media.istockphoto.com/id/504110140/es/vector/cielo-nocturno-estrellas-en-cielo-nocturno.jpg?s=612x612&w=0&k=20&c=C48MzhP9jrwBlwxCxPQK7do6IebM1RCgfQV5HGpkCkw=")',
        backgroundSize: '100% 100%',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ backgroundColor: 'rgba(10, 10, 42, 0.3)' }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
        {multiplier.toFixed(2)}x
      </div>
    </div>
  );
};
