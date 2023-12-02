import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ClearIcon from '@mui/icons-material/Clear';

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const newImages = Array.from(files).map((file) => ({
        original: URL.createObjectURL(file),
        thumbnail: URL.createObjectURL(file), // You can customize thumbnail URL if needed
      }));

      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleUploadButtonClick = () => {
    document.getElementById('imageInput').click();
  };

  return (
    <div>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        multiple
      />
      <IconButton style={{ color: '#82d616' }} onClick={handleUploadButtonClick}>
        <AddPhotoAlternateIcon fontSize="large" />
      </IconButton>
      {selectedImages.length > 0 && (
        <div>
          <div style={{ display: 'flex' }}>
            {selectedImages.map((image, index) => (
              <div key={index} style={{ marginRight: '10px' }}>
                <img
                  src={image.thumbnail}
                  alt={`Preview ${index + 1}`}
                  style={{ maxWidth: '50px', maxHeight: '50px', marginBottom: '5px' }}
                />
                <IconButton
                  style={{ color: 'red', padding: '0', fontSize: '16px' }}
                  onClick={() => handleRemoveImage(index)}
                >
                  <ClearIcon />
                </IconButton>
              </div>
            ))}
          </div>
          <div>
            <pre>{JSON.stringify(selectedImages, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
