import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router-dom';

const Coverage = () => {

    const mapRef = useRef(null); 


    const handleSearch = e=>{
        e.preventDefault();
        const search = e.target.search.value;
        const district = serviceCenter.find(c=> c.district.toLowerCase().includes(search.toLowerCase()));
        if(district){
            const coord = [district.latitude, district.longitude];

            mapRef.current.flyTo(coord,14);
        }
    }


    const position = [23.822256, 90.423037];

    const serviceCenter = useLoaderData();
    return (
      <div>
        <h2 className="text-5xl my-6">We are available in 64 districts</h2>

        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" name="search" placeholder="Search" />
            
          </label>
        </form>

        <div className="border w-full h-[700px] rounded-3xl">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-[700px] rounded-3xl"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {serviceCenter.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong> <br />
                  Service Area: {center.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    );
};

export default Coverage;