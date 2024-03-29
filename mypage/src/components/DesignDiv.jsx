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
            title: '本頁面_作品集頁面',
            content: '使用React撰寫，並部屬於GitHubPage',
            detail: '使用React撰寫，並部屬於GitHubPage，左圖的部分設計了一頁式以及RWD，最終修改了一些部分，使用了Router讓此網頁變得容易閱讀，RWD部分未完成因此建議使用手機瀏覽，資料的部分則是為了先暫時只使用靜態網頁渲染，因此資料於GitHub上都可以看見。',
            image: {
                default: 'img01.png',
                rwd: 'img01_rwd.png',
            },
            type: {
                type01: 'UI/UX',
                type02: 'React',
            },
            url: 'https://sing123692.github.io/PersonalPage/'
        },
        {
            title: '大專題_首頁設計',
            content: '大專題的首頁UIUX部分，使用Figma完成',
            detail: '大專題的首頁UIUX部分，使用Figma完成，為了讓組員更方便製作而修修改改成現今此圖，關於首圖文字太黑的部分，是由於後面成品放的是影片，這裡則是暫時放了圖片的緣故',
            image: {
                default: 'img02.png'
            },
            type: {
                type01: 'UI/UX',

            },
        },
        {
            title: '作業_一頁式設計',
            content: '於資策會期間所學習到的Figma來運用製作',
            detail: '在資策會期間，使用Figma試做的簡單一頁式網頁',
            image: {
                default: 'img03.png'
            },
            type: {
                type01: 'UI/UX',
            }
        },
        {
            title: '資策會專題_天氣頁面',
            content: '大專題，串接政府OpenData API取得36小時天氣所製作的頁面',
            detail: `製作大專題串接政府的OpenData API取得36小時天氣所製作的頁面，\n
            原先是使用jQuery撰寫(方便連AJAX一起使用)，後來依照小組需求改寫成React，時間所限因此略顯潦草，上方則是預留給NarBar的留白。`,
            url: 'https://sing123692.github.io/ReactTripal',
            image: {
                default: 'img04.png',
            },
            type: {
                type01: 'React',
                type02: 'OpenDataAPI',
                type03: 'Axios'

            }
        },
        {
            title: '一頁式設計個人網站',
            content: '用於放上自己的像素畫作品而設計的網站',
            detail: '用於放上自己的像素畫作品而設計的網站，目前想使用還在學習中的Vue來實作，RWD部分則想使用TailWind配合，想將學習中的部分運用在此專案',
            image: {
                default: 'img06.png'
            },
            type: {
                type01: 'UI/UX',
            }
        },
        {
            title: '早餐店頁面概念',
            content: 'Figma製作早餐店頁面',
            detail: 'Figma製作的早餐店頁面，設計了RWD樣式(新分頁開啟可以看大圖)，目前實作的想法是把描邊的食物用svg輸出讓他有動態效果，點選關鍵字(ABOUT、NEWS)會在本頁跳出新視窗，MENU則是導覽到MENU頁面。',
            image: {
                default: 'img07.png',
            },
            type: {
                type01: 'UI/UX',
            },
        },




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