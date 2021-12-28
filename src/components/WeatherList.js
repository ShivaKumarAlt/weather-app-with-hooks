import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({ weathers,data }) => {
    console.log("weather card", weathers)
    return (
        <Row>
            {weathers.map(({ dt, main, name, weather }) => (
                <Col key={dt}>
                    <WeatherCard data={data} weather={weather} temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000}
                     main={weather[0].main} icon={weather[0].icon} humidity={main.humidity} />
                </Col>
            ))}
        </Row>
    )
}

export default WeatherList;

