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
  const svgHeight = xs ? "8rem" : sm || md || lg ? "13rem" : xl ? "25rem" : "30rem";
  const styles = {
    Intro: {
      backgroundColor: "rgba(168, 193, 200, 0.55)",
      color: "#fff",
      width: "100%",
      height: "100vh",
      display: "grid",
      fontSize: xs ? "2em" : sm ? "2.25em" : md || lg ? "3em" : xl ? "5em" : "8em",
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
      alignSelf: !xs ? "center" : null,
      padding: md ? "1em 0 0 0" : lgAndUp ? "1.25em 0 0 0" : null,
    },
    rachel: {
      gridArea: "rach",
      height: svgHeight,
      width: "auto",
      padding: xs ? "2em 0" : md ? "1em 0 0 0" : lgAndUp ? "1.25em 0 0 0" : null,
      opacity: loaded ? 1 : 0,
      transition: "opacity 2s",
      alignSelf: !xs ? "center" : null,
    },
    tony: {
      gridArea: "tone",
      height: svgHeight,
      width: "auto",
      padding: xs ? "2em 0" : null,
      opacity: loaded ? 1 : 0,
      transition: "opacity 2s",
      alignSelf: xs ? "end" : "center",
      justifySelf: "end",
    },
    arrowContainer: {
      display: "grid",
      gridArea: "arro",
      width: "100%",
      alignSelf: "end",
      transform: loaded ? "translateY(0)" : "translateY(-1000%)",
      opacity: loaded ? 1 : 0,
      transition: "all 2s",
    },
    arrow: {
      paddingBottom: xs || sm ? "1em" : md ? ".75em" : ".5em",
      width: "auto",
      height: xs ? 20 : sm || md || lg ? 25 : xl ? 42 : 57,
      justifySelf: lg ? "center" : null,
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
        <span style={{ gridColumn: -1, gridRow: 3 }}>We create web apps with a focus on React and Go.</span>
      </div>
      <div className="arrowContainer" style={styles.arrowContainer}>
        <img src={down} alt="down" style={styles.arrow} />
      </div>
    </div >
  );
}

export default Intro;
