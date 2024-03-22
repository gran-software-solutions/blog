import React from 'react';

function MyImg(props) {
    if (props.title !== undefined) {
        return (
            <figure>
                <center>
                    <img src={props.src} alt={props.alt}/>
                    <figcaption style={{textAlign: "center"}}>{props.title}</figcaption>
                </center>

            </figure>
        );
    } else {
        return <img src={props.src} alt={props.alt}/>;
    }
}

export default MyImg;
