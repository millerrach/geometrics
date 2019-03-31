import React, { useState, useEffect } from "react";
import down from "../images/down.svg";
import Tony from '../images/us/Tony.svg';
import Rachel from '../images/us/Rachel.svg';


const Intro = props => {
  const { xs, sm, md, lg, xl, lgAndUp } = props;
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  const areas = xs ?
    `
        ". pOne pOne pOne pOne pOne pOne pOne pOne pOne pOne ."
        ". rach rach rach rach .    .    tone tone tone tone ."
        ". pTwo pTwo pTwo pTwo pTwo pTwo pTwo pTwo pTwo pTwo ."
        ". .    .    .    .    .    .    .    .    .    arro arro"`
    : sm || md ?
      `
        ". .    .    .    .    .    .    .    .    .    .    ."
        ". pOne pOne pOne pOne pOne pOne .    tone tone tone ."
        ". rach rach rach .    pTwo pTwo pTwo pTwo pTwo pTwo ."
        ". .    .    .    .    .    .    .    .    .    .    arro"`
      : lg ?
        `
        ". . .    .    .    .    .    .    .    .    . ."
        ". . pOne pOne pOne pOne pOne .    tone tone . ."
        ". . rach rach .    pTwo pTwo pTwo pTwo pTwo . ."
        ". . .    .    .    .    .    .    .    .    . arro"` :
        xl ?
          `
        ". . .    .    .    .    .    .    . . . ."
        ". . . pOne pOne pOne pOne .    tone . . ."
        ". . . rach .    pTwo pTwo pTwo pTwo . . ."
        ". . .    .    .    .    .    .    . . . arro"` :
          `
        ". . .    .    .    .    .    .    . . . ."
        ". . . pOne pOne pOne pOne .    tone . . ."
        ". . . rach .    pTwo pTwo pTwo pTwo . . ."
        ". . .    .    .    .    .    .    . . . arro"`;
  const svgHeight = xs ? "8rem" : sm || md ? "13rem" : lg ? "15rem" : xl ? "25rem" : "30rem";
  const styles = {
    Intro: {
      backgroundColor: "rgba(168, 193, 200, 0.55)",
      color: "#fff",
      width: "100%",
      height: "100vh",
      display: "grid",
      fontSize: xs ? "2rem" : sm ? "2.25rem" : md || lg ? "4rem" : xl ? "5rem" : "8rem",
      fontWeight: 500,
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: xs ? "1.25fr 1fr 1fr .25fr" : "repeat(4, 1fr)",
      gridTemplateAreas: areas,
      alignContent: "center",
    },
    pOne: {
      gridArea: "pOne",
      opacity: loaded ? 1 : 0,
      transition: "opacity 1s",
      alignSelf: xs ? "end" : "center",
    },
    pTwo: {
      gridArea: "pTwo",
      opacity: loaded ? 1 : 0,
      transition: "opacity 1s",
      alignSelf: xs ? "start" : "end",
      padding: md ? "1rem 0 0 0" : lgAndUp ? "1.25rem 0 0 0" : null,
    },
    tony: {
      gridArea: "tone",
      height: svgHeight,
      width: "auto",
      // padding: xs ? "2rem 0" : null,
      opacity: loaded ? 1 : 0,
      transition: "opacity 2s",
      alignSelf: xs ? "center" : "start",
      justifySelf: "end",
    },
    rachel: {
      gridArea: "rach",
      height: svgHeight,
      width: "auto",
      // padding: xs ? "2rem 0" : md ? "1rem 0 0 0" : lgAndUp ? "1.25rem 0 0 0" : null,
      opacity: loaded ? 1 : 0,
      transition: "opacity 2s",
      alignSelf: xs ? "center" : "end",
    },
    arrowContainer: {
      display: "grid",
      gridArea: "arro",
      width: "100%",
      alignSelf: "end",
      transform: loaded ? "translateY(0)" : "translateY(-1000%)",
      opacity: loaded ? 1 : 0,
      transition: "all 2s",
      paddingBottom: xs ? "1rem" : sm || md ? "2rem" : lg ? "4rem" : "5rem",
    },
    arrow: {
      width: "auto",
      height: xs ? 20 : sm || md || lg ? 25 : xl ? 42 : 57,
      // justifySelf: lg ? "center" : null,
    },
  };
  return (
    <div id="Intro" style={styles.Intro}>
      <div
        style={styles.pOne}>
        Hello. We are Tony and Rachel and together we form Geometrics.
          </div>
      <img src={Rachel} className="rachel" style={styles.rachel} alt="Rachel" />
      <img src={Tony} className="tony" style={styles.tony} alt="Tony" />
      <div style={styles.pTwo}>
        We create web apps with a focus on React and Go.
      </div>
      <div className="arrowContainer" style={styles.arrowContainer}>
        <img src={down} alt="down" style={styles.arrow} />
      </div>
    </div >
  );
}

export default Intro;
