


import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
//import LocationInfoBox from './LocationInfoBox'

//const WILDFIRE = 8;

const Map = ({center, eventData, zoom, 
    marker1,
    marker2,
    marker3,
    marker4,
    marker5}) => {
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
                bootstrapURLKeys={{key: "AIzaSyCedTzkETAn138TqyaiXGKDh4nhCp45gls"}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
                <LocationMarker lat={marker1.lat} lng={marker1.lng} />
                <LocationMarker lat={marker2.lat} lng={marker2.lng} />
                <LocationMarker lat={marker3.lat} lng={marker3.lng} />
                <LocationMarker lat={marker4.lat} lng={marker4.lng} />
                <LocationMarker lat={marker5.lat} lng={marker5.lng} />
            </GoogleMapReact>
            
        </div>
    );
}

Map.defaultProps = {
    center: {
        lat: 38.08100,
        lng: -95.422
    },
    marker1: {
        lat: 61.57,
        lng: -158.006
    },
    marker2: {
        lat: 35.369999999999997,
        lng: -111.43600000000001
    },
    marker3: {
        lat: 36.058999999999997,
        lng: -100.95399999999999
    },
    marker4: {
        lat: 31.381,
        lng: -111.19799999999999
    },
    marker5: {
        lat: 35.281999999999996,
        lng: -111.681
    },
    zoom: 5
}

export default Map;