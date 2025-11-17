import s from './style.module.css';
import { MenuListItem } from "../MenuListItem/MenuListItem.jsx";
import {DIFFICULTIES} from "./constant.jsx";

export function MenuList(props) {
    return (
        <>
            <div className={s.container}>
                {
                    DIFFICULTIES.map((diff) => {
                        return (
                            <MenuListItem isSelected={props.difficulty === diff}  onClick={props.onItemClick}  difficulty={diff}/>
                        )
                    })
                }
            </div>

        </>
    )
}