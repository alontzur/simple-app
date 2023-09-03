import { useState, useEffect, useRef } from 'react';


export const useMousePos = () => {
    const timeout = useRef<NodeJS.Timeout>();
    const [isActive, setIsActive] = useState(false);
    const [mousePos, setMousePos] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        timeout.current = setTimeout(() => { setIsActive(false); }, 1000);
    }, [])

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            clearTimeout(timeout.current);
            setMousePos({ x: event.clientX, y: event.clientY });
            setIsActive(true);
            timeout.current = setTimeout(() => { setIsActive(false); }, 1000);
        });
    }, [])

    return [mousePos, isActive];
}