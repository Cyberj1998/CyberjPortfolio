import React, { useRef, useEffect } from 'react';

const Canvas = (props) => {
  const ref = useRef();
  const dots = [];

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    for (let i = 0; i < 50; i++) {
      dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: 2,
        color: '#555555'
      });
    }

    const drawDots = () => {
      dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    const drawLines = (cursorX, cursorY) => {
      dots.forEach(dot => {
        const dist = Math.sqrt(Math.pow(cursorX - dot.x, 2) + Math.pow(cursorY - dot.y, 2));
        
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(cursorX, cursorY);
          ctx.lineTo(dot.x, dot.y);
          ctx.strokeStyle = '#555555';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    }

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const cursorX = event.clientX - rect.left;
      const cursorY = event.clientY - rect.top;

      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      
      drawDots();
      drawLines(cursorX, cursorY);
    }

    const handleMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the lines when cursor moves out
      drawDots(); // Redraw dots to keep them on the canvas
    }

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseout', handleMouseOut);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseout', handleMouseOut);
    };
  }, [ref, dots]);

  return <canvas ref={ref} {...props} />;
}

export default Canvas;

