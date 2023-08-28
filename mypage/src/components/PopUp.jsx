import React from 'react';
import "./css/DesignDivStyle.css";

const Popup = (props) => {

    const handleStop = (event) => { //阻止點擊消失
        event.stopPropagation();
    }
    //https://ithelp.ithome.com.tw/articles/10198999


    console.log(props.item.image);


    return (


        <div className='DesignDetailOverlay' onClick={props.onClose}>
            <div className='DesignDetail' onClick={handleStop}>
                <div className='Img01'>
                    {props.item.image && (
                        <img src={require(`../images/${props.item.image}`)} alt='' />
                    )}
                </div>
            </div>
        </div>


    )
}

export default Popup;