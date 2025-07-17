import React from 'react';
import ImageUploader from '../component/ImageUploader/ImageUploader';
import { BillsTable } from '../component/BillTable';
const AddReciptPage: React.FC = () => {
    return (
        <>
            <ImageUploader />
            <BillsTable />
        </>
    );
};

export default AddReciptPage;