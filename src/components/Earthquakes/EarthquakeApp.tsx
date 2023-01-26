import { useState, useEffect } from 'react';
import Earthquakes from "./Earthquakes"

export default function EarthquakeApp() {
    const [eventData, setEventData] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson')
            const data = await res.json()
            setEventData(data.features)
        }
        fetchEvents()
    }, [])
    
    return (
        <>
            <Earthquakes eventData={eventData}></Earthquakes>
        </>
    )
}