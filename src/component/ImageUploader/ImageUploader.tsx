import React, { useState } from "react";
import "./ImageUploader.scss";

const ImageUploader: React.FC = () => {
  const [imageURL, setImageURL] = useState<string | null>(null);

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
    <div className="image-uploader">
      <p className="upload-instruction">Upload Recipt</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input"
      />
      {imageURL && (
        <div className="preview-container">
          <img
            src={imageURL}
            alt="Uploaded Preview"
            className="preview-image"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
