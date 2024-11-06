import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: "dze34ir17",
    api_key: "452565678184696",
    api_secret: "a8ZCwLMpsDHlUEghFOjmhGNUruY"
});

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

const uploadOnCloudinary = async (localfilepath) => {
    try {
        if (!localfilepath) return null;
        const response = await cloudinary.uploader.upload(localfilepath, {
            resource_type: 'auto'
        });
        console.log("Here is your response ", response);

        console.log('File has been uploaded to Cloudinary successfully', response.url);
        fs.unlinkSync(localfilepath);
        return response;
    } catch (error) {
        fs.unlinkSync(localfilepath);
        console.error('Error uploading file to Cloudinary:', error);
        return null;
    }
};

export { uploadOnCloudinary };
