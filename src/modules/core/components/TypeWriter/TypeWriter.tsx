import { useState, useEffect } from 'react';

export type TypeWriterProps = {
    text: string;
    duration: number;
    delay: number;
    cursor: string;
};

export const TypeWriter = ({ text, duration, delay, cursor }: TypeWriterProps) => {
    const [typed, setTyped] = useState('');

    useEffect(() => {
        const doType = () => {
            setTimeout(() => {
                if (typed.length < text.length) {
                    setTyped(text.substring(0, typed.length + 1));
                }
            }, duration);
        };

        if (typed.length === 0) {
            setTimeout(() => {
                doType();
            }, delay);
        } else doType();
    }, [typed, text, duration, delay]);

    return (
        <>
            {typed}
            <span className="blink">{cursor}</span>
        </>
    );
};
