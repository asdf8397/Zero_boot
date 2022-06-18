import {useState} from "react";
import "./2.프론트엔드 제어를 위한 JS와 리액트코드 비교.css"

export default function App() {
    const [key, setKey] = useState("메일");
    const dataMap = {
        메일: "메일함을 확인하세요.",
        카페: "즐겨찾는 카페의 새 소식을 확인해보세요.",
        블로그: "오늘을 기록해보세요."
    };

    function clickTabItem(e) {
        setKey(e.target.id);
    }

    return (
        <div className= "App">
            <div className="container">
                <div className="tab_item">
                    <div className="tab_item" id="메일" onClick={clickTabItem}>
                        메일
                    </div>
                    <div className="tab_item" id="카페" onClick={clickTabItem}>
                        카페
                    </div>
                    <div className="tab_item" id="블로그" onClick={clickTabItem}>
                        블로그
                    </div>
                </div>
                <div className="tab_content_wrapper">{dataMap[key]}</div>
            </div>
        </div>
    );
}