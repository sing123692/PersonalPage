import React, { useState } from 'react';
import "./css/DesignDivStyle.css";

const Popup = (props) => {

    const handleStop = (event) => { //阻止點擊消失
        event.stopPropagation();
    }
    //https://ithelp.ithome.com.tw/articles/10198999


    // console.log(props.item.image); //test用

    const [currentIndex, setCurrentIndex] = useState(0);

    const imagesArray = Object.values(props.item.image); //把image物件轉成陣列
    const numImages = imagesArray.length; // 然後數有幾張圖



    // console.log(numImages);// 看一下是否運作用

    const handleText = () => { //輪播用
        setCurrentIndex((currentIndex + 1) % numImages);    // 使用餘數運算實現循環切換圖片
        // 在切換圖片時將滾動容器的位置回到頂部
        const container = document.querySelector('.Img01');
        if (container) {
            container.scrollTop = 0; //切換回到頂
        }
    }



    return (


        <div className='DesignDetailOverlay' onClick={props.onClose}>
            <div className='DesignDetail' onClick={handleStop}>
                <div className='Img01'>
                    <img src={require(`../images/${imagesArray[currentIndex]}`)} alt='' />
                    {/* 圖片陣列的第幾張圖 */}

                </div>
                <div className='DetailNextButton'>
                    <button onClick={handleText}> Next </button>
                </div>
                <div className='DetailText'>
                    <div className='Tape'></div>
                    <div className='Text'>
                        <h1>{props.item.title}</h1>
                        <h3>{props.item.detail}</h3>
                        <p>
                            <a href={props.item.url} target="_blank" rel="noopener noreferrer">
                                {props.item.url}
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Popup;