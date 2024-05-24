import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfileSettingStyle.css';
import { useNavigate } from 'react-router-dom'; 
import Talk from './Talk.png';

function ProfileSetting() {
    const [name, setName] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Name:', name);
        // console.log('Profile Picture:', profilePicture);
    };

    const navigate = useNavigate();
    
    const setProfile = async (event) => {
        event.preventDefault();

        try {
            console.log('successfull!');
            navigate('/login');
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card p-4">
                        <div className="card-body text-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person-lines-fill mb-4" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                                </svg>
                                {/* <img src={Talk} alt='sorry' width={200} className='rounded mb-3'></img> */}
                            </div>
                            <h3 className="card-title mb-4">Set Up Your Profile</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="profilePicture" className="form-label">Upload your Picture</label>
                                    <input type="file" className="form-control" id="profilePicture" accept="image/*" onChange={handleImageChange} />
                                    {imagePreview && <img src={imagePreview} alt="Profile Preview" className="img-thumbnail mt-3" />}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Set your Name</label>
                                    <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={setProfile}>Next</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSetting;
