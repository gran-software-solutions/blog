import React from 'react';

function MyImg(props) {
    if (props.title !== undefined) {
        return (
            <center>
                <figure>

                    <img src={props.src} alt={props.alt}/>
                    <figcaption style={{textAlign: "center"}}>{props.title}</figcaption>
                </figure>

            </center>

        );
    } else {
        return <img src={props.src} alt={props.alt}/>;
    }
}

export default MyImg;
