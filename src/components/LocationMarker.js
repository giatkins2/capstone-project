import React from 'react';
import {Icon} from '@iconify/react';
import fireIcon from '@iconify/icons-emojione/fire';
import volcanoIcon from '@iconify/icons-emojione/volcano';
import stormIcon from '@iconify/icons-emojione/cloud-with-lightning-and-rain';
import iceIcon from '@iconify/icons-emojione/snowflake';

function LocationMarker(lat, lng, onClick, id) {
    let renderIcon = null;
    if(id === 8){
        renderIcon = fireIcon;
    }
    else if(id === 10){
        renderIcon = stormIcon
    }
    else if(id === 12){
        renderIcon = volcanoIcon
    }
    else if(id === 15){
        renderIcon = iceIcon
    }
    
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={LocationMarker} className="location-icon" />
        </div>
    );
}

export default LocationMarker
/*import React from 'react'
import {Icon} from '@iconify/react';
import fireIcon from '@iconify/icons-emojione/fire';

const LocationMarker = ({ lat, lng, onClick, id}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={fireIcon} className="fire-icon" />
        </div>
    )
}

export default LocationMarker*/