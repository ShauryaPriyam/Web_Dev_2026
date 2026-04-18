import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.KEY,
    api_secret: process.env.SECRET
});


/**
 * @note : the file is being piped to the upload stream, so the request should be sent as raw data.
 */
const fileUpload = async (req, res) => {
    const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'uploads' },
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send({error : false,result});
        }
    );
    req.pipe(uploadStream);
};

export {
    fileUpload
}