import React, { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLoaderData } from 'react-router';
const Coverage = () => {
    const serveiceData = useLoaderData()
    const position = [23.81033, 90.41252];
    const mapRef = useRef()
    const handleSearch = (e) => {
        e.preventDefault()
        const location = e.target.location.value;
        const district = serveiceData.find(data => data.district.toLowerCase().includes(location.toLowerCase()))

        if (district) {
            const coordinate = [district.latitude, district.longitude]
            mapRef.current.flyTo(coordinate,14)
        }
    }

    return (
        <div>
            <div className='py-5'>
                <form onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                        <input name='location' type="search" required placeholder="Search" />
                    </label>
                </form>
            </div>
            <div className='h-[800px]'>
                <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-[800px]' ref={mapRef}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serveiceData.map(district =>
                            <Marker position={[district.latitude, district.longitude]}>
                                <Popup>
                                    <p>{district.district}</p>
                                </Popup>
                            </Marker>
                        )
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;