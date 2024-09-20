import React from "react";
import axios from "axios";
import { useState } from "react";
const UploadTour = () => {
    const [tourData, setTourData] = useState({
        name: '',
        description: '',
        price: '',
        days: '',
        nights: '',
        countries: '',
        cities: '',
        tourImage: ''
      });
    const handleChange = (e) => {
        setTourData({...tourData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e)=> {
        e.preventDefault();
        const formattedData = {
            ...tourData,
            countries: tourData.countries.split(',').map(country => country.trim()), // Convert to array
            cities: tourData.cities.split(',').map(city => city.trim()), // Convert to array
          };
        try {
            const response = await axios.post('http://localhost:8000/api/tours/uploadTour', formattedData)
            alert(response.data.message);
        }
        catch (error) {
            console.error('Error uploading Tour', error );
            alert("An error Occurred");
        }
    }

    return (
        <div className="upload-tour">
            <h1>Upload New Tour </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Tour Name" id="name" value={tourData.name} onChange={handleChange} required/>
                <input type="text" name="description" placeholder="Tour Description" id="description" value={tourData.description} onChange={handleChange} required/>
                <input type="number" name="price" placeholder="Tour Price" id="price" value={tourData.price} onChange={handleChange} required/>
                <input type="number" name="days" placeholder="Days of Tour" id="days" value={tourData.days} onChange={handleChange} required/>
                <input type="number" name="nights" placeholder="Nights of Tour" id="nights" value={tourData.nights} onChange={handleChange} required/>
                <input type="text" name="countries" placeholder="Countries of Tour (Separate by comma ,)" id="countries" value={tourData.countries} onChange={handleChange} required/>
                <input type="text" name="cities" placeholder="Cities of Tour (Separate by comma ,)" id="countries" value={tourData.cities} onChange={handleChange} required/>
                <input type="text" name="tourImage" placeholder="Tour Image URL" value={tourData.tourImage} id="tourImage" onChange={handleChange} required/>
                <button className="btn btn-primary">Upload Tour</button>
            </form>
        </div>
    )
};

export default UploadTour;
