import React, { useState, useEffect } from "react";
import down from "../images/down.svg";
import Tony from '../images/us/Tony.svg';
import Rachel from '../images/us/Rachel.svg';

// `
// ". pOne pOne pOne pOne pOne pOne pOne pOne pOne pOne ."
// ". rach rach rach rach .    .    tone tone tone tone ."
// ". pTwo pTwo pTwo pTwo pTwo pTwo pTwo pTwo pTwo pTwo ."
// ". .    .    .    .    .    .    .    .    .    .    arrow"`




const Intro = props => {
  const { xs, sm, md, lg, xl, screenWidth } = props;
  const tablet = screenWidth > 760 && screenWidth < 1030;
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
    : sm ?
      `
    ".    .    .    .    .    .    .    .    .    .    .    ."
    ".    pOne pOne pOne pOne pOne pOne .    tone tone tone ."
    ".    rach rach rach .    pTwo pTwo pTwo pTwo pTwo pTwo ."
    "arro .    .    .    .    .    .    .    .    .    .    ."`
      : md ?
        `
        "arro pOne pOne pOne pOne . tone tone tone tone ."
        "arro rach rach rach rach . pTwo pTwo pTwo pTwo ."`
        : lg ?
          `
          "arro pOne pOne pOne pOne . tone tone tone tone ."
          "arro rach rach rach rach . pTwo pTwo pTwo pTwo ."`:
          `
          "arro pOne pOne pOne pOne . tone tone tone tone ."
          "arro rach rach rach rach . pTwo pTwo pTwo pTwo ."`;
  const svgHeight = xs ? "4em" : sm ? "6em" : "10em";
  const styles = {
    Intro: {
      backgroundColor: "rgba(168, 193, 200, 0.55)",
      color: "#fff",
      width: "100%",
      height: "100vh",
      display: "grid",
      fontSize: xs ? "2em" : sm ? "2.25em" : "3em",
      fontWeight: 500,
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: xs ? "1.25fr 1fr 1fr .25fr" : "repeat(4, 1fr)",
      gridTemplateAreas: areas,
      alignContent: "center",
    },
    arrow: {
      display: "grid",
      gridArea: "arro",
      width: "100%",
      alignSelf: "end",
      justifySelf: "center",
      transform: loaded ? "translateY(0)" : "translateY(-1000%)",
      opacity: loaded ? 1 : 0,
      transition: "all 2s",
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
    },
    rachel: {
      gridArea: "rach",
      height: svgHeight,
      width: "auto",
      padding: xs ? "2em 0" : null,
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
      justifySelf: !xs ? "end" : null,
    },
  };
  return (
    <div id="Intro" style={styles.Intro}>
      <div className="arrow" style={styles.arrow}>
        {screenWidth > 600 ? <img src={down} alt="down" style={{ justifySelf: "center", paddingBottom: "1em", width: xs ? 25 : sm || md ? 40 : lg ? 32 : xl ? 42 : 57 }} /> : null}
      </div>
      <div
        style={styles.pOne}>
        Hello. We are Tony and Rachel and together we form Geometrics.
          </div>
      <img src={Rachel} className="rachel" style={styles.rachel} alt="Rachel" />
      <img src={Tony} className="tony" style={styles.tony} alt="Tony" />
      <div style={styles.pTwo}>
        We create web apps with a focus on React and Go.
          </div>
    </div >
  );
}

export default Intro;
