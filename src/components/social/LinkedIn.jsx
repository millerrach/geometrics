import React, { useState } from 'react';


const LinkedIn = props => {
    const [hover, setHover] = useState(false);
    const { width, absolute, url, touchscreen } = props;
    const styles = {
        linkedIn: {
            position: absolute ? "absolute" : null,
            transition: "all 500ms",
            width: hover && !touchscreen ? width + 5 : width,
        }
    }
    return (
        <a onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)} target="_blank" rel="noopener noreferrer" href={url}>
        <svg style={styles.linkedIn} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16">
            <path fill={hover ? "#91AEB6" : "#A8C1C8"} id="color"
                d="M4.724,14H2.152V6.26h2.572V14z M3.438,5.204H3.422C2.559,5.204,2,4.609,2,3.867
                        c0-0.759,0.575-1.337,1.456-1.337c0.879,0,1.421,0.579,1.438,1.337C4.894,4.609,4.335,5.204,3.438,5.204z M14,14h-2.572V9.859
                        c0-1.04-0.37-1.75-1.302-1.75c-0.712,0-1.135,0.478-1.321,0.94C8.738,9.215,8.721,9.447,8.721,9.678V14H6.148
                        c0,0,0.034-7.014,0-7.74h2.573v1.097c0.342-0.527,0.953-1.278,2.316-1.278C12.73,6.079,14,7.185,14,9.562V14z" />
        </svg></a>
    )
}

export default LinkedIn;
