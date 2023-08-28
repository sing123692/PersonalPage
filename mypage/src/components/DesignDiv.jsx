import React, { useState } from 'react';
import DesignCard from './DesignCard';
import "./css/DesignDivStyle.css";
import Popup from './PopUp';

const DesignDiv = () => {
    const [showDetail, setshowDetail] = useState(false);//開啟DetailDiv
    const [selectedItem, setSelectedItem] = useState(null); // 新增狀態用於存儲選定的項目


    const handleClick = (item) => {
        setSelectedItem(item); // 設置選定的項目

        setshowDetail(!showDetail);
    }
    const handleClose = () => {
        setshowDetail(false);
    }


    const items = [
        {
            title: '作品集頁面一頁式設計',
            content: '使用React進行簡單，並部屬於GitHubPage ',
            image: 'img01.png',
            type: 'React'
        },
        {
            title: 'Title002',
            content: 'Content002',
            image: 'img02.png',
        },
        {
            title: '一頁式設計',
            content: '於資策會期間所學習到的Figma來運用製作',
            image: 'img03.png',
            type: 'UI/UX'
        }



    ];


    return (
        <div className='DesignDiv'>
            {items.map((item, index) => (
                <DesignCard
                    key={index}
                    // title={item.title}
                    // content={item.content}
                    // image={item.image}
                    // type={item.type}
                    {...item}// 使用展開操作符將 item 的所有屬性傳遞給 DesignCard
                    //items 然後用map遍歷傳進了item
                    onClick={() => { handleClick(item) }}

                />

            ))}
            {showDetail && (
                <Popup item={selectedItem} onClose={handleClose} /> //onClose是自己取名的隨便你取之後在元件用props就好
            )}


        </div>

    );

}

export default DesignDiv;