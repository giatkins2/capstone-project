
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox'

const WILDFIRE = 8;

const Map = ({center, eventData, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null);
    
    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id ===WILDFIRE) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })
    
    //const mapRef = useRef();
    //const [zoom, setZoom] = useState(5);
    
    //const eventDataIndex = {
        //8: "Wildfires",
        //10: "Severe Storms",
        //12: "Volcanos",
        //15: "Sea and Lake Ice"
    //}
    
    //Array of keys from object above
    //let eventDataIndexNum = Object.keys(eventDataIndex);
    //eventDataIndex = eventDataIndexNum.map(index => Number(index))

    
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                { markers }
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    );
}

Map.defaultProps = {
    center: {
        lat: 39.7392,
        lng: -104.9903

    },
    zoom: 5
}

export default Map;