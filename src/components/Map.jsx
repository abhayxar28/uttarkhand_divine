import React from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PopUpCard from './PopUpCard';

export default function Map() {
    function EnableZoom() {
        const map = useMap();
    
        map.scrollWheelZoom.enable();
    
        map.doubleClickZoom.enable();
    
        return null;
    }

  return (
    <div className='leaflet-div'>
        <div className="root">
            <MapContainer center={[30.0668, 79.0193]} zoom={8} scrollWheelZoom={false}>
            <EnableZoom />
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png">
            </TileLayer>
            <PopUpCard />
            </MapContainer>
        </div>
    </div>

  )
}
