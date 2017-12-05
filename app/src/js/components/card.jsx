import React from 'react';

const Card = (props) => (
    <div style={{ margin: '1em' }}>
        <img width="75" src={props.avatar_url} />
        <div style={{ display: 'inline-block', marginLeft: 10, verticalAlign: 'top' }}>
            <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
                {props.name}
            </div>
            <div>{props.company}</div>
        </div>
    </div>
);

export default Card;