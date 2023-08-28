import React from 'react';
import "./css/DesignDivStyle.css";


const DesignCard = (props) => {

    return (
        <div>
            <div className='DesignStyle' onClick={props.onClick}>
                <div className='buttonStyle'>
                    <p className='mycontainer'>{props.type}</p>
                    <button onClick={(event) => event.stopPropagation()} >Download</button>

                </div>

                <div className='DesignImg' >
                    {props.image && (

                        <img className='Contentimg' src={require(`../images/${props.image}`)} alt={props.title} />

                    )}

                </div>

                <div className='Text'>
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                </div>


            </div>










        </div>
    );

}

export default DesignCard;