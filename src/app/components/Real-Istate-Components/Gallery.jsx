import React from "react";

const GallerySection = () => {
  return (
    <section className="gallery-section py-20 px-20 bg-set bg-class-location bg-lime-100" id="gallery">
      <div className="container mx-auto">
        <div className="section-heading mb-8 text-center">
          <h3 className="text-3xl font-bold">Our Gallery</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="gallery-thumb">
            <img src="img/real-estate/Interiors/Children Bed 1.jpeg" alt="Villas with Luxury Amenities - Children Room" className="w-full h-full object-cover rounded-lg" />
            <a href="img/real-estate/Interiors/Children Bed 1.jpeg" className="gallery-thumb__link gallery-popup">
              <i className="fas fa-expand-alt"></i>
            </a>
          </div>
          <div className="gallery-thumb">
            <img src="img/real-estate/Interiors/Combined View 2.jpeg" alt="Premium Villas in Hyderabad" className="w-full h-full object-cover rounded-lg" />
            <a href="img/real-estate/Interiors/Combined View 2.jpeg" className="gallery-thumb__link gallery-popup">
              <i className="fas fa-expand-alt"></i>
            </a>
          </div>
          <div className="gallery-thumb">
            <img src="img/real-estate/Interiors/Family Room.jpeg" alt="Premium Villas in Hyderabad" className="w-full h-full object-cover rounded-lg" />
            <a href="img/real-estate/Interiors/Family Room.jpeg" className="gallery-thumb__link gallery-popup">
              <i className="fas fa-expand-alt"></i>
            </a>
          </div>
          <div className="gallery-thumb">
            <img src="img/real-estate/Interiors/Guest Bed.jpeg" alt="Villas with Luxury Amenities - Guest Room" className="w-full h-full object-cover rounded-lg" />
            <a href="img/real-estate/Interiors/Guest Bed.jpeg" className="gallery-thumb__link gallery-popup">
              <i className="fas fa-expand-alt"></i>
            </a>
          </div>
          <div className="gallery-thumb">
            <img src="img/real-estate/Interiors/Home Theatre 2.jpeg" alt="Luxury Amenities - Home Theatre" className="w-full h-full object-cover rounded-lg" />
            <a href="img/real-estate/Interiors/Home Theatre 2.jpeg" className="gallery-thumb__link gallery-popup">
              <i className="fas fa-expand-alt"></i>
            </a>
          </div>
          <div className="gallery-thumb">
            <img src="img/real-estate/Interiors/Master Bed 2.jpeg" alt="Villas with Luxury Amenities" className="w-full h-full object-cover rounded-lg" />
            <a href="img/real-estate/Interiors/Master Bed 2.jpeg" className="gallery-thumb__link gallery-popup">
              <i className="fas fa-expand-alt"></i>
            </a>
          </div>
          <div className="gallery-thumb">
            <img src="img/real-estate/Interiors/Bar.jpeg" alt="Villas with Luxury Amenities" className="w-full h-full object-cover rounded-lg" />
            <a href="img/real-estate/Interiors/Bar.jpeg" className="gallery-thumb__link gallery-popup">
              <i className="fas fa-expand-alt"></i>
            </a>
          </div>
          <div className="gallery-thumb">
            <img src="img/real-estate/Interiors/Bed 2.jpeg" alt="Villas with Luxury Amenities" className="w-full h-full object-cover rounded-lg" />
            <a href="img/real-estate/Interiors/Bed 2.jpeg" className="gallery-thumb__link gallery-popup">
              <i className="fas fa-expand-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
