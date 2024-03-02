import { type ComponentProps, useContext } from 'react';
import classNames from 'classnames';

import { SliderContext } from './Slider';

export const SliderNavigation = ({ className }: ComponentProps<any>) => {
    const { slides, setCurrent, current } = useContext(SliderContext);

    const setPrev = () => {
        setCurrent((prevState: number) => (prevState === 0 ? prevState : prevState - 1));
    };

    const setNext = () => {
        setCurrent((prevState: number) =>
            prevState === slides.length - 1 ? prevState : prevState + 1,
        );
    };

    return (
        <div className={classNames('slider-navigation', className)}>
            <button
                type="button"
                className={classNames('prev', { disabled: current === 0 })}
                onClick={setPrev}
            >
                &lt;
            </button>
            <button
                type="button"
                className={classNames('next', { disabled: current === slides.length - 1 })}
                onClick={setNext}
            >
                &gt;
            </button>
        </div>
    );
};
