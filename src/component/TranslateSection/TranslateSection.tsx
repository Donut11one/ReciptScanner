import React from "react";
import ImageUploader from './ImageUploader/ImageUploader';
import "./TranslateSection.scss";

const TranslateSection: React.FC = () =>{
    
    return (
        <div className="rs-translate-section">
            <ImageUploader/>
            <div className="rs-translate-section_arrow">
                <p>
                    to the right
                </p>
            </div>
            <div className="rs-translate-section_translated-section">
                Translated to Text
            </div>

        </div>
    );
}

export default TranslateSection;