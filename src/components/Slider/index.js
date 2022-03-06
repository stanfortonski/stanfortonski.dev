import React, { createContext, useState } from 'react'
import PropTypes from "prop-types"
import Slide from './Slide'
import Content from './Content';
import Navigation from './Navigation';

export const SliderContext = createContext();

const Slider = ({ className, children }) => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(1);

  return (
    <SliderContext.Provider value={{ current, setCurrent, slides, setSlides }}>
      <div className={`slider ${className}`}>
        {children}
      </div>
    </SliderContext.Provider>
  )
}

Slider.defaultProps = {
  className: ''
}

Slider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Slider.Slide = Slide;
Slider.Content = Content;
Slider.Navigation = Navigation;

export default Slider