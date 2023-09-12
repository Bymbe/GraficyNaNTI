import React from 'react'
import DevlogList from "../Helpers/DevlogList.json";
import Logo from "../Assets/LogoNavBar.png";

import ListDevlog from "../Components/DataBaseDevlog/ListDevlog";
import AddDevlog from "../Components/DataBaseDevlog/AddDevlog";
import EditDevlog from "../Components/DataBaseDevlog/EditDevlog";

import Style from "../styles/Devlog.module.css"


/*React nie moze przeglądać prywatnych plików więc jako ścieżkę do jsona trzeba podać albo scieżkę do Public albo link z internetu*/
function Devlog(props) {

    const sizeFlag = props.fontSize
    const colorFlag = props.color
    const speachFlag = props.speach;

    const styl = (x,y) => ({

    })

    return (
        <div className={Style.Devlog}>
            <div className="DevLogList">
                <ListDevlog fontSize={sizeFlag} color={colorFlag} speach={speachFlag}/>
                {/*<AddDevlog/>*/}
                {/*<EditDevlog/>*/}
            </div>
        </div>
    )
}

export default Devlog;