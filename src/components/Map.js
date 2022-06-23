


import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
//import LocationInfoBox from './LocationInfoBox'

const WILDFIRE = 8;

const Map = ({center, eventData, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null);
    
    /*const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id ===WILDFIRE) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })
    
   // const mapRef = useRef(Map);*/
    //const [zoom, setZoom] = useState(5);
    

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
            
        </div>
    );
}

Map.defaultProps = {
    center: {
        lat: 39.7392,
        lng: -104.9903
    },
    zoom:5
}

export default Map;