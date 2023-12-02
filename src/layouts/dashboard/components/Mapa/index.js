import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import PropTypes from "prop-types";

// Componente funcional para manejar eventos de clic en el mapa
const MapClickHandler = ({ onMapClick }) => {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      console.log(`Posición del clic: Latitud ${lat}, Longitud ${lng}`);
      // Llama a la función proporcionada desde el componente principal
      onMapClick(e);
    },
  });

  return null; // Este componente no renderiza nada
};

const MapComponent = ({ address, onAddressChange }) => {
  const [position, setPosition] = useState({
    lat: 3.45,
    lng: -76.5333,
  });
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    handleSearchClick();
  }, [address]);

  const handleSearchClick = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}&limit=1`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon: lng } = data[0];
        setPosition({ lat: parseFloat(lat), lng: parseFloat(lng) });
        setMapKey((prevKey) => prevKey + 1);
      } else {
        console.error("No se encontraron coordenadas para la dirección proporcionada:", address);
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setPosition({ lat, lng });
  };

  // Llama a la función para actualizar la dirección en el componente padre
  const handleAddressChange = (newAddress) => {
    onAddressChange(newAddress);
  };

  return (
    <div>
      <div>

      </div>

      <MapContainer
        key={mapKey}
        center={[position.lat, position.lng]}
        zoom={13}
        style={{ borderRadius:"15px", marginTop:"14px", height: "350px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {position && <Marker position={position}></Marker>}

        {/* Configura el evento de clic en el mapa */}
        <MapClickHandler onMapClick={handleMapClick} />
      </MapContainer>
    </div>
  );
};

// Define PropTypes para el componente MapComponent
MapComponent.propTypes = {
  address: PropTypes.string.isRequired,
  onAddressChange: PropTypes.func.isRequired,
};

// Define PropTypes para el componente MapClickHandler
MapClickHandler.propTypes = {
  onMapClick: PropTypes.func.isRequired,
};

export default MapComponent;
