import { useEffect, useRef } from 'react';


export const usefocusOnInputRef = () => {
    const inputRef = useRef<HTMLInputElement>();
    useEffect(() => {
        window.addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "k") {
                inputRef.current?.focus();
            }
        });
    }, [])

    return inputRef;
}