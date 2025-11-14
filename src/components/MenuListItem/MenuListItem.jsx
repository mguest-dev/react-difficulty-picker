import React, {useState} from 'react';
export function MenuListItem(props) {
    const [isHovered, setHovered] = React.useState(false);

    function toggleHovered() {
        setHovered(!isHovered);
    }

    console.log(isHovered);

    return (
        <div onMouseEnter={toggleHovered} onMouseLeave={toggleHovered}>Set to : {props.difficulty}</div>
    )
}