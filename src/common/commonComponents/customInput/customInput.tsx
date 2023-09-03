import { forwardRef, useImperativeHandle, useRef } from "react";

interface CustomInputProps {
    placeholder?: string
}

interface CustomInputRef {
    focus: () => void
}

export const CustomInput = forwardRef<CustomInputRef, CustomInputProps>(({ placeholder }, outsideRef) => {

    const inputRef = useRef<HTMLInputElement>(null);
    //we don't want to export the entire <input> DOM node, but only the method: focus
    useImperativeHandle(outsideRef, () => {
        return {
            focus() {
                inputRef.current?.focus();
            }
        };
    }, []);

    return (
        <>
            <input ref={inputRef} placeholder={placeholder}></input>
        </>
    )
});