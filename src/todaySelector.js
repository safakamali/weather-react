import assets from "./assets"
import { useState } from 'react'

const TodaySelector = () => {
    const data = [
        [21, 'Storm', '10:00'],
        [25, 'Rain', '11:00'],
        [22, 'Sun', '12:00'],
        [18, 'Wind', '13:00'],
    ]

    const [itemActiveIndex, setItemActiveIndex] = useState(0);

    const ItemBox = ({ temp, weather, time, isActive, onClicked }) => {
        return (
            <div className={"ItemBox" + (isActive?' active':'')} onClick={onClicked}>
                <span className="tempDisplay">{temp}°</span>
                <img src={assets['imgDay' + weather]} alt="weather" />
                <span className="timeDisplay">{time}</span>
            </div>
        )
    }

    return (
        <div className="TodaySelector">
            <h2>Today</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {
                    data.map((item, index) => <ItemBox
                        temp={item[0]}
                        weather={item[1]}
                        time={[item[2]]}
                        isActive={itemActiveIndex === index?true:false}
                        key={index}
                        onClicked={() => setItemActiveIndex(index)}
                    />)
                }

            </div>
        </div>
    )
}

export default TodaySelector;