import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  alpha: number;
  color: string;
}

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let particlesArray: Particle[] = [];

  // Função para ajustar o tamanho do canvas
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }
  };

  // Inicializa as partículas
  const initParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesArray = [];
    // Apenas 1 ou 2 partículas de cada vez
    const particleCount = Math.random() < 0.5 ? 4 : 5;
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(createParticle(canvas));
    }
  };

  // Cria uma nova partícula na parte de baixo da tela
  const createParticle = (canvas: HTMLCanvasElement): Particle => {
    return {
      x: Math.random() * canvas.width, // Aparece em uma posição aleatória na largura
      y: Math.random() * canvas.height, // Aparece na parte inferior
      size: Math.random() * 1 + 2, // Tamanhos um pouco maiores
      speedY: Math.random() * 1 + 0.3, // Partículas mais lentas
      alpha: 1,
      color: '#5d5c5c',
    };
  };

  // Atualiza a posição e o estado das partículas
  const updateParticles = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    particlesArray.forEach(particle => {
      particle.y -= particle.speedY; // As partículas sobem
      particle.alpha -= 0.005; // Desaparecimento gradual
      particle.color = `rgba(93, 92, 92, ${particle.alpha})`;

      // Reinicia partículas quando elas desaparecem no topo
      if (particle.y <= 0 || particle.alpha <= 0) {
        particle.alpha = 1;
        particle.y = Math.random() * canvas.height; // Reaparece na parte inferior
        particle.x = Math.random() * canvas.width;
      }
    });
  };

  // Desenha as partículas no canvas
  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    particlesArray.forEach(particle => {
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    });
  };

  // Função de animação
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateParticles(ctx, canvas);
    drawParticles(ctx);

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initParticles();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  );
};

export default ParticlesBackground;
