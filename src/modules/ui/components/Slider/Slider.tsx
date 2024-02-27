import { type ComponentProps, createContext, useState } from 'react';
import classNames from 'classnames';

import './styles.css';

export type SliderContextType = {
    slides: any[];
    current: number;
    setCurrent: CallableFunction;
    setSlides: CallableFunction;
};

export const SliderContext = createContext<SliderContextType>({} as any);

export const Slider = ({ className, children }: ComponentProps<any>) => {
    const [slides, setSlides] = useState([]);
    const [current, setCurrent] = useState(1);

    return (
        <SliderContext.Provider value={{ current, setCurrent, slides, setSlides }}>
            <div className={classNames('slider', className)}>{children}</div>
        </SliderContext.Provider>
    );
};
