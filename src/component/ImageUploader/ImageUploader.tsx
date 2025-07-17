import React, { useEffect, useState } from "react";
import "./ImageUploader.scss";
import { useInputTable } from "../../hooks";

const ImageUploader: React.FC = () => {
  const { imageURL, setImageURL, responseText } =
    useInputTable();

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  return (
    <div className="rs-translate-section_image-uploader">
      <p className="rs-translate-section_image-uploader_upload-instruction">
        Upload Recipt
      </p>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input"
      />
      {imageURL && (
        <div className="rs-translate-section_preview-container">
          <img
            src={imageURL}
            alt="Uploaded Preview"
            className="rs-translate-section_preview-container_preview-image"
          />
        </div>
      )}
      {responseText && <h1>{responseText}</h1>}
    </div>
  );
};

export default ImageUploader;
