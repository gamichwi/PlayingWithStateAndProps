import React from 'react';

const userOutput = (props) => {
    return(
        <div>
            <p>This is where the username will change --> {props.username} </p>
            <p>Hopefully the username changed to --> {props.username} </p>
        </div>
    )
};

export default userOutput;



