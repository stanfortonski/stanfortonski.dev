import { type ComponentProps, useContext } from 'react';
import classNames from 'classnames';

import { SliderContext } from './Slider';

export const SliderNavigation = ({ className }: ComponentProps<any>) => {
    const { slides, setCurrent, current } = useContext(SliderContext);

    const setPrev = () => {
        setCurrent((prevState: number) => {
            if (prevState === 0) return prevState;
            return prevState - 1;
        });
    };

    const setNext = () => {
        setCurrent((prevState: number) => {
            if (prevState === slides.length - 1) return prevState;
            return prevState + 1;
        });
    };

    return (
        <div className={classNames('slider-navigation', className)}>
            <button
                type="button"
                className={`prev ${current === 0 ? 'disabled' : ''}`}
                onClick={setPrev}
            >
                &lt;
            </button>
            <button
                type="button"
                className={`next ${current === slides.length - 1 ? 'disabled' : ''}`}
                onClick={setNext}
            >
                &gt;
            </button>
        </div>
    );
};
