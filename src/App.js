import React, { useState, useEffect } from "react";
import Intro from "./components/Intro.jsx";
import WriteUp from "./components/WriteUp.jsx";
import JuicelineExamples from './components/JuicelineExamples.jsx';
import HondaExamples from './components/HondaExamples.jsx';
import JubeckExamples from './components/JubeckExamples.jsx';
import Thanks from './components/Thanks.jsx'


const App = () => {

  let [top, setTop] = useState(0);
  const [conWidth, setConWidth] = useState(0);
  const [conHeight, setConHeight] = useState(0);

  const getSize = () => {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    };
  }

  let [windowSize, setWindowSize] = useState(getSize());

  const handleResize = () => {
    setConHeight(document.getElementsByClassName("rContainer")[0].clientHeight);
    setConWidth(document.getElementsByClassName("rContainer")[0].clientWidth);
    setWindowSize(getSize());
  }

  useEffect(() => {
    setConHeight(document.getElementsByClassName("rContainer")[0].clientHeight);
    setConWidth(document.getElementsByClassName("rContainer")[0].clientWidth);
    setTop(window.scrollY);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const screenWidth = windowSize.innerWidth;
  const xs = screenWidth < 768;
  const sm = screenWidth >= 768 && screenWidth < 992;
  const md = screenWidth >= 992 && screenWidth < 1200;
  const lg = screenWidth >= 1200 && screenWidth < 2560;
  const xl = screenWidth >= 2560 && screenWidth < 4000;
  const lgAndUp = screenWidth > 1200;
  const transition = "transform 2s";
  const notTop = top !== 0;

  return (
    <div className="App">
      <Intro
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        lgAndUp={lgAndUp}
      />
      <WriteUp
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        index={0}
        notTop={notTop}
      />
      <JuicelineExamples
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        transition={transition}
        notTop={notTop}
      />
      <WriteUp
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        index={1}
        notTop={notTop}
      />
      <HondaExamples
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        transition={transition}
        notTop={notTop}
      />
      <WriteUp
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        index={2}
        notTop={notTop}
      />
      <JubeckExamples
        xs={xs}
        sm={sm}
        md={md}
        transition={transition}
        notTop={notTop}
      />
      <Thanks
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        conWidth={conWidth}
        conHeight={conHeight}
      />
    </div>
  );
}

export default App;
