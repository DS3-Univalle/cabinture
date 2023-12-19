import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ClearIcon from "@mui/icons-material/Clear";
import { storage } from "../../../cabins/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import PropTypes from "prop-types";

const ImageUpload = (props) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState([]);
  // const handleImageChange = (e) => {
  //   const files = e.target.files;

  //   if (files.length > 0) {
  //     const newImages = Array.from(files).map((file) => ({
  //       original: URL.createObjectURL(file),
  //       thumbnail: URL.createObjectURL(file),
  //       // Add the file property
  //     }));
  //     const newImagesFB = Array.from(files).map((file) => ({
  //       file: file, // Add the file property
  //     }));

  //     setSelectedImages((prevImages) => [...prevImages, ...newImages]);
  //     setImages((prevImagesFB) => [...prevImagesFB, ...newImagesFB]); 
  //   }
  // };
  

  // const handleRemoveImage = (index) => {
  //   setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  //   setImages((prevImagesFB) => prevImagesFB.filter((_, i) => i !== index));
  // };
  // useEffect(() => {
  //   if (props.imageUpload) {
  //     if (images == null || images.length === 0) return;

  //     const uploadPromises = images.map((image) => {
  //       const imageRef = ref(storage, `${props.id_cabin}/${image.file.name + v4()}`);
  //       return uploadBytes(imageRef, image.file);
  //     });

  //     Promise.all(uploadPromises)
  //       .then(() => {
  //         console.log("All images uploaded successfully");
  //       })
  //       .catch((error) => {
  //         console.error("Error uploading images:", error);
  //       });
  //   }
  // }, [props.imageUpload, images]);

  const handleUploadButtonClick = () => {
    document.getElementById("imageInput").click();
  };
  ImageUpload.propTypes = {
    imageUpload: PropTypes.bool,
    id_cabin: PropTypes.string,
    handleImageChange: PropTypes.func,
    handleRemoveImage: PropTypes.func,
    selectedImages: PropTypes.array // assuming ImageUpload is a boolean
  };

  return (
    <div>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        onChange={props.handleImageChange}
        style={{ display: "none" }}
        multiple
      />
      <IconButton style={{ color: "#82d616" }} onClick={handleUploadButtonClick}>
        <AddPhotoAlternateIcon fontSize="large" />
      </IconButton>
      {props.selectedImages.length > 0 && (
        <div style={{ marginTop: "5px" }}>
          <div style={{ display: "flex" }}>
            {props.selectedImages.map((image, index) => (
              <div key={index} style={{ marginRight: "10px" }}>
                <img
                  src={image.thumbnail}
                  alt={`Preview ${index + 1}`}
                  style={{ maxWidth: "50px", maxHeight: "50px", marginBottom: "5px" }}
                />
                <IconButton
                  style={{ color: "red", padding: "0", fontSize: "16px" }}
                  onClick={() => props.handleRemoveImage(index)}
                >
                  <ClearIcon />
                </IconButton>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
