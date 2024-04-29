import React from 'react';

function MyImg(props) {
    const imgStyle = props.width ? { width: `${props.width}px` } : {};
    if (props.title !== undefined) {
        return (
            <center>
                <figure>

                    <img src={props.src} alt={props.alt} style={imgStyle}/>
                    <figcaption style={{textAlign: "center"}}>{props.title}</figcaption>
                </figure>

            </center>

        );
    } else {
        return <img src={props.src} alt={props.alt} style={imgStyle}/>;
    }
}

export default MyImg;
