
import React, { useRef, useEffect } from 'react';

const Canvas = (props) => {
    const ref = useRef();
    const dots = [];

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // Iinicia los puntos
        for (let i = 0; i < 20; i++) {
            dots.push({
                x: Math.floor(Math.random() * canvas.width),
                y: Math.floor(Math.random() * canvas.height),
                size: 2,
                color: '#555555',
                direction: {
                    x: Math.random() * 2 - 1,
                    y: Math.random() * 2 - 1,
                },
            });
        }

        const drawDots = () => {
            dots.forEach(dot => {
                ctx.fillStyle = dot.color;
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        const updateDots = () => {
            dots.forEach(dot => {
                dot.x += dot.direction.x;
                dot.y += dot.direction.y;

                if (dot.x <= 0 || dot.x >= canvas.width) {
                    dot.direction.x *= -1;
                }
                if (dot.y <= 0 || dot.y >= canvas.height) {
                    dot.direction.y *= -1;
                }
            });
        };

        const drawLines = (cursorX, cursorY) => {
            // comprueva que el cursor este dentro del canvas
            if (cursorX >= 0 && cursorX <= canvas.width && cursorY >= 0 && cursorY <= canvas.height) {
                dots.forEach(dot => {
                    const dist = Math.sqrt(Math.pow(cursorX - dot.x, 2) + Math.pow(cursorY - dot.y, 2));

                    if (dist < 100) { // dibuja la linea si el cursor esta serca
                        ctx.beginPath();
                        ctx.moveTo(cursorX, cursorY);
                        ctx.lineTo(dot.x, dot.y);
                        ctx.strokeStyle = '#555555';
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            }
        };

        // rastrea la posicion del mouse
        let cursorPos = { x: 0, y: 0 };
        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            cursorPos.x = event.clientX - rect.left;
            cursorPos.y = event.clientY - rect.top;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // limpia el canvas
            updateDots(); // actualiza la posicion de los puntos
            drawDots(); // dibuja los puntos actualizados
            drawLines(cursorPos.x, cursorPos.y); // dibuja las lineas
            requestAnimationFrame(animate); // loop
        };

        // inicia la animacion y el eventListenner
        canvas.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, [ref, dots]);

    return <canvas ref={ref} {...props} />;
};

export default Canvas;

