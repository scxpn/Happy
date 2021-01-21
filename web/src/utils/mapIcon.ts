import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [54, 64],
    iconAnchor: [27,64],
    popupAnchor: [172, 2]
})

export default mapIcon;