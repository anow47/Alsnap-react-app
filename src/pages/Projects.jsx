import React, { useState, useRef, useEffect } from 'react';
import MapWithPins from '../components/MapWithPins';
import listingsData from '../Data/mapData';
import ImagePopup from '../components/ImagePopup';
import './projects.css';

export default function Projects() {
    const listings = listingsData;
    const [selectedImages, setSelectedImages] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const projectRefs = useRef({});
    const popupRef = useRef(null);

    const openImagePopup = (images) => {
        setSelectedImages(images);
    };

    const closeImagePopup = () => {
        setSelectedImages(null);
    };

    const handleMarkerClick = (location) => {
        setSelectedLocation(location);
        // Optionally open image popup when marker is clicked
        // openImagePopup(location.images);
        if (projectRefs.current[location.id]) {
            projectRefs.current[location.id].scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    };

    const handleProjectClick = (item) => {
        setSelectedLocation(item);
        openImagePopup(item.images);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                closeImagePopup();
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="projects">
            <div className='map_container'>
                <p>...مشاريع متاحة الأن</p>
                <MapWithPins 
                    listings={listings}
                    onMarkerClick={handleMarkerClick}
                    selectedLocation={selectedLocation}
                />
            </div>
            <section className="projects_feature">
                <div className="container">
                    <div className="row feature_inner">
                        {listings.map((item, index) => (
                            <div className="col-lg-4 col-sm-6" key={index} ref={el => projectRefs.current[item.id] = el}>
                                <div className={`feature_item ${selectedLocation && selectedLocation.id === item.id ? 'selected' : ''}`}>
                                    <div className="img_container" onClick={() => handleProjectClick(item)}>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="content-frame-link">
                                        <h2 className='title'>{item.title}</h2>
                                        <div className='description-container'>
                                            <p className='description'>{item.description}</p>
                                        </div>
                                        <div className='buttons-container flex'>
                                            <a href={item.detailsUrl} className="btn-link">التفاصيل</a>
                                            <a href={item.conatctUrl} className="btn-link">للتواصل</a>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {selectedImages && (
                <div ref={popupRef}>
                    <ImagePopup images={selectedImages} onClose={closeImagePopup} />
                </div>    
            )}
        </div>
    );
}