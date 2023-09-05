import { useState, useEffect, useRef, useCallback } from 'react';


export const useMousePos = () => {
    const timeout = useRef<NodeJS.Timeout>();
    const [isActive, setIsActive] = useState(false);
    const [mousePos, setMousePos] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

    const handleMouseMove = useCallback((event: MouseEvent) => {
        clearTimeout(timeout.current);
        setMousePos({ x: event.clientX, y: event.clientY });
        setIsActive(true);
        timeout.current = setTimeout(() => { setIsActive(false); }, 1000);
    }, []);

    useEffect(() => {
        timeout.current = setTimeout(() => { setIsActive(false); }, 1000);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeout.current);
        };
    }, [handleMouseMove]);

    return [mousePos, isActive];
}
