import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/",

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);

    const filename = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}${ext}`;

    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
     const extension = path
    .extname(file.originalname)
    .toLowerCase();
  const allowedExtensions = [".pdf", ".txt"];

  if (allowedExtensions.includes(extension)) {
    cb(null, true);
  } else {
    cb(new Error("Only TXT and PDF files are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
});

export default upload;
