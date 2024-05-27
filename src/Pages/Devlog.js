import React from 'react'
import ListDevlog from "../Components/DataBaseDevlog/ListDevlog";
import Style from "../styles/Devlog.module.css"
/*React nie moze przeglądać prywatnych plików więc jako ścieżkę do jsona trzeba podać albo scieżkę do Public albo link z internetu*/
function Devlog(props) {

    const sizeFlag = props.fontSize
    const colorFlag = props.color
    const speachFlag = props.speach;

    return (
        <div className={Style.Devlog}>
            <div className="DevLogList">
                <ListDevlog fontSize={sizeFlag} color={colorFlag} speach={speachFlag}/>
            </div>
        </div>
    )
}

export default Devlog;