import { useState } from 'react';
import { getShortTextToDisplay, isExpandable } from './renderersHelpers';
import './textFieldRenderer.scss';

interface TextFieldRendererProps {
    text: string
}

export function TextFieldRenderer({ text }: TextFieldRendererProps) {

    const [isExpanded, setExpanded] = useState(false);

    return (
        <>
            <div>{getShortTextToDisplay(isExpanded, text)}</div>
            {
                isExpandable(text) &&
                <div
                    className='expand-text-field-renderer-button'
                    onClick={() => setExpanded((prev) => !prev)}
                >
                    {!isExpanded ? 'more..' : 'less..'}
                </div>
            }
        </>
    )
}