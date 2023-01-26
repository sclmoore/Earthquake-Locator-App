import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker';

export default function Earthquakes(props: any) {

    const markers = props.eventData.length ?  props.eventData.map((ev: { type: string; properties: object; geometry: { coordinates: any[]; }; id:string; }) => {
        return <LocationMarker lat={ev.geometry.coordinates[1]} lng={ev.geometry.coordinates[0]} info={ev.properties} key={ev.id}></LocationMarker>
    }) : []

    markers.splice(100)

    const center = {
        lat: 41, 
        lng: -71
    }

    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "";

    return (
        <div className='map'>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: GOOGLE_API_KEY}}
                defaultZoom={1}
                center={center}
            >
                {markers}
            </GoogleMapReact>
        </div>
    )
}