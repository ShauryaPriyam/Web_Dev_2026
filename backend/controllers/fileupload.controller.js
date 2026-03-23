import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.KEY,
    api_secret: process.env.SECRET
});

const fileUpload = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            error: true,
            message: "No file uploaded"
        });
    }
    // Process the uploaded file

    cloudinary.uploader.upload(req.file.path).then(r => {
        res.json({
            error: false,
            message: "File uploaded successfully",
            url: r.secure_url
        });
    }).catch(e => {
        res.status(500).json({
            error: true,
            message: "Error uploading file to Cloudinary",
        });
    })
};

export {
    fileUpload
}