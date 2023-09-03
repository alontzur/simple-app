import { useMousePos } from "./customHooks";
import './mousePositionWrapper.scss';

interface MousePosWrapperProps {
    children: JSX.Element,
}

export function MousePosWrapper({ children }: MousePosWrapperProps) {

    const [mousePos, isActive] = useMousePos();

    return (
        <>
            <div className="mouse-pos-wrapper">{children}</div>
            {isActive && <div className="mouse-pos-details">{JSON.stringify(mousePos)}</div>}
        </>
    )
}