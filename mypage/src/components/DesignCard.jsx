import React from 'react';
import "./css/DesignDivStyle.css";


const DesignCard = (props) => {

    const typeArray = Object.values(props.type);
    console.log(props.type);
    // // 检查 props.type 是否存在
    // if (!props.type || typeof props.type !== 'object') {
    //     return null; 
    // }
    //type沒有東西的話會爆要用這個

    return (
        <div>
            <div className='DesignStyle' onClick={props.onClick}>
                <div className='buttonStyle'>
                    {typeArray.map((typeItem, index) => (
                        <p className='mycontainer' key={index}>
                            {typeItem}
                        </p>
                    ))

                    }


                </div>

                <div className='DesignImg' >
                    {props.image && (

                        <img className='Contentimg' src={require(`../images/${props.image.default}`)} alt={props.title} />

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