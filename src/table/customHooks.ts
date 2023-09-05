import { useCallback, useEffect, useRef } from 'react';
import { CustomInputRef } from '../common/commonComponents/customInput/customInput';


export const usefocusOnInputRef = () => {
    const inputRef = useRef<CustomInputRef>(null);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.ctrlKey && event.code === "KeyK") {
            event.preventDefault();
            inputRef.current?.focus?.();
        } else if (event.code === "Escape" && inputRef.current?.isFocused()) {
            event.preventDefault();
            event.stopPropagation();
            inputRef.current?.blur?.();
        }
    }, [inputRef]);

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [onKeyDown]);

    return inputRef;
};
