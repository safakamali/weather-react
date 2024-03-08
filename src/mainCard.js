import assets from "./assets"

const TopBar = ({ reloadAction }) => {
    return (
        <div className="TopBar">
            <button style={{ width: 40, height: 40 }} onClick={reloadAction}><i className="bi bi-arrow-clockwise"></i></button>
            <span><i className="bi bi-geo-alt-fill"></i> Mashhad</span>
            <i className="bi bi-three-dots-vertical"></i>
        </div>
    )
}

const BigWeatherShower = ({ weatherData }) => {
    if (weatherData) {
        return (
            <div className='BigWeatherShower'>
                <img src={assets['img'+(weatherData.isDay?'Day':'Night')+weatherData.phase]} alt="weather day storm" />
                <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center', position: 'relative', transform: 'translateY(-40px)' }}>
                    <span className='tempDisplay'>{weatherData.temp}°</span>
                    <span className='weatherDisplay'>{weatherData.text}</span>
                    <span className='dateDisplay'>{weatherData.date.dayOfWeek}, {weatherData.date.dayOfMonth} {weatherData.date.monthName}</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className="BigWeatherShower" style={{ height: '50vh', justifyContent: 'center', 'alignItems': 'center' }}>
                <div className="custom-loader"></div>
            </div>
        )
    }
}

const InfoBar = ({ weatherData }) => {
    const ItemBox = ({ icon, data, title }) => {
        return (
            <div className='ItemBox'>
                <i className={icon}></i>
                <span>{data}</span>
                <span style={{ color: '#c5c5c5' }}>{title}</span>
            </div>
        )
    }
    
    if (weatherData) {
        return (
            <div className='InfoBar'>
                <ItemBox icon={"bi bi-wind"} title={"Wind"} data={weatherData.windSpeed+" km/h"} />
                <ItemBox icon={"bi bi-droplet-fill"} title={"Humidity"} data={weatherData.humidity+"%"} />
                <ItemBox icon={"bi bi-cloud-drizzle-fill"} title={"Precipitation"} data={weatherData.precipitation+' mm'} />
            </div>
        )
    } else {
        return <></>
    }
}

const MainCard = ({ weatherData, reloadAction }) => {
    return (
        <div className="MainCard">
            <TopBar reloadAction={reloadAction}/>
            <BigWeatherShower weatherData={weatherData} />
            <hr />
            <InfoBar weatherData={weatherData} />
        </div>
    )
}

export default MainCard;