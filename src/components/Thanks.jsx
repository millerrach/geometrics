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
    const [touchscreen, setTouchscreen] = useState(false);
    useEffect(() => {
        setConHeight(document.getElementsByClassName("tContainer")[0].clientWidth)
    }, []);
    window.addEventListener('touchstart', function () {
        setTouchscreen(true);
    });
    const socialWidth = 20;
    const styles = {
        Thanks: {
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: xs ? "1fr 1fr 1fr .5fr 1fr 1fr .5fr" : sm ? "1fr 1fr 1fr 5rem 1fr 1fr 5rem" : "repeat(6, 1fr)",
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
            alignSelf: xs ? "center" : "end",
            paddingBottom: sm ? "5rem" : null,
            position: xs || sm ? null : "relative",
            top: xs || sm ? null : 30,
            fontWeight: 900,
            fontSize: xs ? "3rem" : sm || md || lg ? "5rem" : xl ? "3.5rem" : "5rem",
            zIndex: 2,
        },
        container: {
            backgroundColor: "#fff",
            width: xs || sm ? null : "90%",
            height: conHeight,
            position: "relative",
            display: "grid",
            gridTemplateColumns: ".25fr min-content 1fr .25fr",
            gridTemplateRows: "1fr min-content 1fr",
            gridTemplateAreas:
                `
            ". .    .    ."
            ". avat info ."
            ". .    .    ."
            `
        },
        tContainer: {
            gridArea: "tCon",
        },
        rContainer: {
            gridArea: "rCon",
            justifySelf: xs || sm ? null : "end",
        },
        avatar: {
            display: xs ? "none" : null,
            height: xs || sm ? "2.5rem" : "4rem",
            gridArea: "avat",
            width: "auto",
        },
        tony: {
            transform: "scaleX(-1)",
        },
        rachel: {
            justifySelf: xs || sm ? null : "end",
        },
        inner: {
            gridArea: "info",
            paddingLeft: "3rem",
        },
        name: {
            fontSize: "2rem",
            fontWeight: 700,
            paddingBottom: ".75rem",
        },
        email: {
            fontSize: "1.25rem",
            fontWeight: 700,
            margin: "10rem 0",
        },
        skills: {
            fontSize: "1.25rem",
            fontWeight: 500,
            padding: xs || sm ? "1rem 0" : "1rem 0 2rem 0",
        },
        links: {
            display: "grid",
            gridAutoColumns: "1fr",
            gridTemplateAreas: `"gith . link . inst . twit"`,
        },
    }
    return (
        <div className="Thanks" style={styles.Thanks} >
            <div style={styles.heading}>Thanks.</div>
            <div className="tContainer" style={{ ...styles.container, ...styles.tContainer }}>
                <img src={Tony} className="tony" style={{ ...styles.avatar, ...styles.tony }} alt="Tony" />
                <div className="inner" style={styles.inner}>
                    <div className="name" style={styles.name}>Tony</div>
                    <a className="email" style={styles.email} href="mailto:mail@tonyschmidt.io" target="_blank" rel="noopener noreferrer">mail@tonyschmidt.io</a>
                    <div className="skills" style={styles.skills}>{tonySkills}</div>
                    <div className="links" style={styles.links}>
                        <Github style={{ gridArea: "gith" }} width={socialWidth} absolute={true} touchscreen={touchscreen} url="https://github.com/antschmidt" />
                        <LinkedIn style={{ gridArea: "link" }} width={socialWidth} absolute={true} touchscreen={touchscreen} url="https://www.linkedin.com/in/4anthonyschmidt/" />
                        <Instagram style={{ gridArea: "inst" }} width={socialWidth} absolute={true} touchscreen={touchscreen} url="https://www.instagram.com/antschmidt/" />
                        <Twitter style={{ gridArea: "twit" }} width={socialWidth} absolute={true} touchscreen={touchscreen} url="https://twitter.com/tonyschmidt" />
                    </div>
                </div>
            </div>
            <div className="rContainer" style={{ ...styles.container, ...styles.rContainer }}>
                <img src={Rachel} className="rachel" style={{ ...styles.avatar, ...styles.rachel }} alt="Rachel" />
                <div className="inner" style={styles.inner}>
                    <div className="name" style={styles.name}>Rachel</div>
                    <a className="email" style={styles.email} href="mailto:mail@rachelmiller.io" target="_blank" rel="noopener noreferrer">mail@rachelmiller.io</a>
                    <div className="skills" style={styles.skills}>{rachelSkills}</div>
                    <div className="links" style={styles.links}>
                        <Github style={{ gridArea: "git" }} width={socialWidth} absolute={true} touchscreen={touchscreen} url="https://github.com/millerrach" />
                        <Codepen style={{ gridArea: "link" }} width={socialWidth} absolute={true} touchscreen={touchscreen} url="https://codepen.io/rachelmiller_io/" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Thanks;