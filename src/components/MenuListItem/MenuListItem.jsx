import React from 'react';
import s from './style.module.css';
export function MenuListItem(props) {
    const [isHovered, setHovered] = React.useState(false);

    function toggleHovered() {
        setHovered(!isHovered);
    }

    console.log(isHovered);

    const getBackgroundColor = () => {
        if (isHovered) {
            return '#a5e9ff';
        } else {
            if (props.isSelected) {
                return '#26beae';
            }
        }
    }

    const onItemClick = () => {
        props.onClick(props.difficulty);
    }

    return (
        <div    onClick={onItemClick}
            className={s.container}
            onMouseEnter={toggleHovered}
             onMouseLeave={toggleHovered}
            style={{backgroundColor: getBackgroundColor()}}>Set to : {props.difficulty}</div>
    )
}