import React, { useState, useEffect } from "react";
import Tony from '../images/us/Tony.svg';
import Rachel from '../images/us/Rachel.svg';
import Github from './social/Github.jsx';
import Twitter from './social/Twitter.jsx';
import Instagram from './social/Instagram.jsx';
import LinkedIn from './social/LinkedIn.jsx';
import Codepen from './social/Codepen.jsx';


const rachelSkills = "React, JavaScript, Redux, HTML5, CSS3, Sass, Material UI, Bootstrap, Git, Jira, Figma, Sketch";
const tonySkills = "Go, JS, React, PostgreSQL, Linux, Git";

const Thanks = props => {
    const { xs, sm, md, lg, xl } = props;
    const [conHeight, setConHeight] = useState(0);
    useEffect(() => {
        setConHeight(document.getElementsByClassName("tContainer")[0].clientWidth)
    }, []);
    const socialWidth = 20;
    const styles = {
        Thanks: {
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: xs || sm ? "1fr 1fr 1fr .25fr 1fr 1fr .25fr" : "repeat(6, 1fr)",
            backgroundColor: "#F2F2F2",
            gridTemplateAreas: xs || sm ?
                `
                    ". thxs thxs thxs thxs thxs thxs thxs thxs thxs thxs ."
                    ". tCon tCon tCon tCon tCon tCon tCon tCon tCon tCon ."
                    ". tCon tCon tCon tCon tCon tCon tCon tCon tCon tCon ."
                    ". .    .    .    .    .    .    .    .    .    .    ."
                    ". rCon rCon rCon rCon rCon rCon rCon rCon rCon rCon ."
                    ". rCon rCon rCon rCon rCon rCon rCon rCon rCon rCon ."
                    ". .    .    .    .    .    .    .    .    .    .    ."
            ` : md || lg || xl ?
                    `
                    ". thxs thxs thxs thxs thxs .    .    .    .    .    ."
                    ". tCon tCon tCon tCon tCon .    .    .    .    .    ."
                    ". tCon tCon tCon tCon tCon rCon rCon rCon rCon rCon ."
                    ". tCon tCon tCon tCon tCon rCon rCon rCon rCon rCon ."
                    ". .    .    .    .    .    rCon rCon rCon rCon rCon ."
                    ". .    .    .    .    .    .    .    .    .    .    ."
            ` :
                    `
                    ". thxs thxs thxs thxs thxs .    .    .    .    .    ."
                    ". tCon tCon tCon tCon tCon .    .    .    .    .    ."
                    ". tCon tCon tCon tCon tCon rCon rCon rCon rCon rCon ."
                    ". tCon tCon tCon tCon tCon rCon rCon rCon rCon rCon ."
                    ". .    .    .    .    .    rCon rCon rCon rCon rCon ."
                    ". .    .    .    .    .    .    .    .    .    .    ."
            ` ,
            lineHeight: 1.25,
        },
        heading: {
            gridArea: "thxs",
            alignSelf: xs || sm ? "center" : "end",
            position: xs || sm ? null : "relative",
            top: xs || sm ? null : 30,
            fontWeight: 900,
            fontSize: xs ? "3em" : sm || md || lg ? "5em" : xl ? "3.5em" : "5em",
        },
        tContainer: {
            gridArea: "tCon",
            backgroundColor: "#fff",
            width: xs || sm ? null : "80%",
            height: conHeight,
            position: "relative",
            display: "grid",
        },
        tony: {
            height: "2.5em",
            width: "auto",
            position: "absolute",
            top: -15,
            left: -15,
            transform: "scaleX(-1)",
        },
        rContainer: {
            gridArea: "rCon",
            backgroundColor: "#fff",
            width: xs || sm ? null : "80%",
            height: conHeight,
            position: "relative",
            display: "grid",
            justifySelf: xs || sm ? null : "end",
        },
        rachel: {
            height: "2.5em",
            width: "auto",
            position: "absolute",
            top: -15,
            left: -15,
        },
        inner: {
            width: "80%",
            placeSelf: "center",
        },
        name: {
            fontSize: "2em",
            fontWeight: 700,
            paddingBottom: ".75rem",
        },
        email: {
            fontSize: "1.25em",
            fontWeight: 700,
            margin: "10em 0",
        },
        skills: {
            fontSize: "1.25em",
            fontWeight: 500,
            padding: "1rem 0",
        },
        links: {
            display: "grid",
            gridAutoColumns: "1fr",
            gridTemplateAreas: `"gith . link . inst . twit"`,
        },
        siteBottom: {
            position: "absolute",
            height: 5,
            bottom: 0,
        }
    }
    return (
        <div className="Thanks" style={styles.Thanks} >
            <div style={styles.heading}>Thanks.</div>
            <div className="tContainer" style={styles.tContainer}>
                <div className="inner" style={styles.inner}>
                    <img src={Tony} className="tony" style={styles.tony} alt="Tony" />
                    <div className="name" style={styles.name}>Tony</div>
                    <a className="email" style={styles.email} href="mailto:mail@tonyschmidt.io" target="_blank" rel="noopener noreferrer">mail@tonyschmidt.io</a>
                    <div className="skills" style={styles.skills}>{tonySkills}</div>
                    <div className="links" style={styles.links}>
                        <Github style={{ gridArea: "gith" }} width={socialWidth} absolute={true} url="https://github.com/antschmidt" />
                        <LinkedIn style={{ gridArea: "link" }} width={socialWidth} absolute={true} url="https://www.linkedin.com/in/4anthonyschmidt/" />
                        <Instagram style={{ gridArea: "inst" }} width={socialWidth} absolute={true} url="https://www.instagram.com/antschmidt/" />
                        <Twitter style={{ gridArea: "twit" }} width={socialWidth} absolute={true} url="https://twitter.com/tonyschmidt" />
                    </div>
                </div>
            </div>
            <div className="rContainer" style={styles.rContainer}>
                <div className="inner" style={styles.inner}>
                    <img src={Rachel} className="rachel" style={styles.rachel} alt="Rachel" />
                    <div className="name" style={styles.name}>Rachel</div>
                    <a className="email" style={styles.email} href="mailto:mail@rachelmiller.io" target="_blank" rel="noopener noreferrer">mail@rachelmiller.io</a>
                    <div className="skills" style={styles.skills}>{rachelSkills}</div>
                    <div className="links" style={styles.links}>
                        <Github style={{ gridArea: "git" }} width={socialWidth} absolute={true} url="https://github.com/millerrach" />
                        <Codepen style={{ gridArea: "link" }} width={socialWidth} absolute={true} url="https://codepen.io/rachelmiller_io/" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Thanks;