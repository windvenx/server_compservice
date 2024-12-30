'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import arista from '../../../public/next.svg';

const getCoordinates = async (address) => {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  if (data && data[0]) {
    const lat = data[0].lat;
    const lon = data[0].lon;
    return [lat, lon]; 
  } else {
    console.error("Ошибка геокодирования");
    return null;
  }
};

export default function Map() {
  const [position, setPosition] = useState([42.8806, 74.6578]);
  const [zoom, setZoom] = useState(16);
  const address = 'улица Лермонтова 12, Бишкек, Кыргызстан'; 
  const mapRef = useRef(null);  

  useEffect(() => {
    const fetchCoordinates = async () => {
      const coordinates = await getCoordinates(address);
      if (coordinates) {
        setPosition(coordinates);
        setZoom(16);
      }
    };

    fetchCoordinates();
  }, []);

  const customIcon = new L.Icon({
    iconUrl: arista.src, 
    iconSize: [42, 42],
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer 
      center={position} 
      zoom={zoom} 
      style={{ height: '400px', width: '100%' }} 
      whenCreated={(map) => { mapRef.current = map; }} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Это адрес: улица Лермонтова 12, Бишкек, Кыргызстан</Popup>
      </Marker>
    </MapContainer>
  );
}
