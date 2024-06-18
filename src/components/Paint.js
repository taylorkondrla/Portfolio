import React, { useState, useRef, useEffect } from 'react';
import './Paint.css'; // Import your CSS file
import MinMax from '../images/minmax.png';

const Paint = () => {
    const [isActive, setIsActive] = useState(true); // Paint component is active by default
    const canvasRef = useRef(null);
    const [color, setColor] = useState('#000000');
    const [lineWidth, setLineWidth] = useState(5);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = 400;
        canvas.height = 400;

        let painting = false;
        let lastX = 0;
        let lastY = 0;

        const startPosition = (e) => {
            if (!canvasRef.current) return;
            painting = true;
            const bounds = canvasRef.current.getBoundingClientRect();
            lastX = e.clientX - bounds.left;
            lastY = e.clientY - bounds.top;
            draw(e);
        };

        const endPosition = () => {
            painting = false;
            context.beginPath();
        };

        const draw = (e) => {
            if (!painting) return;
            const bounds = canvasRef.current.getBoundingClientRect();
            context.lineWidth = lineWidth;
            context.lineCap = 'round';
            context.strokeStyle = color;
            context.lineTo(e.clientX - bounds.left, e.clientY - bounds.top);
            context.stroke();
            context.beginPath();
            context.moveTo(e.clientX - bounds.left, e.clientY - bounds.top);
        };

        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', endPosition);
        canvas.addEventListener('mousemove', draw);

        return () => {
            canvas.removeEventListener('mousedown', startPosition);
            canvas.removeEventListener('mouseup', endPosition);
            canvas.removeEventListener('mousemove', draw);
        };
    }, [color, lineWidth]);

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    return (
        <div className={`paint ${isActive ? 'active' : ''}`} id="paint">
            <div className="paint-header">
                <div className="title">Paint</div>
                <button onClick={() => setIsActive(false)} className="close-btn">
                    <img className="minmax" height="50" width="70" src={MinMax} alt="Close" />
                </button>
            </div>
            <div className="paint-container">
                <div id="painttoolbar">
                    <h1>Paint</h1>
                    <label htmlFor="stroke">Stroke</label>
                    <input id="stroke" name='stroke' type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                    <label htmlFor="lineWidth">Line Width</label>
                    <input id="lineWidth" name='lineWidth' type="number" value={lineWidth} onChange={(e) => setLineWidth(parseInt(e.target.value))} />
                    <button id="clear" onClick={clearCanvas}>Clear</button>
                </div>
                <div className="drawing-board">
                    <canvas id="drawing-board" ref={canvasRef}></canvas>
                </div>
            </div>
        </div>
    );
};

export default Paint;
