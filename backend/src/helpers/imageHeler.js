import multer from "multer";
import path from "path";

export const imageStorage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

export const storageImg = () => {
  return storage;
};

export const upload = multer({ storageImg: storageImg });
