import { fileURLToPath } from "url";
import { dirname, join } from "path";
import multer from "multer";
import crypto from "crypto"
import bcrypt from "bcrypt"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, join(__dirname, "uploads"));
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        // cb(null, file.fieldname + "-" + uniqueSuffix);
        cb(null, Date.now()+"-"+file.originalname)
    },
});

export const upload = multer({ storage: storage });

export const rutaProductos = join(__dirname, "data", "allproducts.json");

const SECRET="CoderCoder123"
// export const creaHash=password=>crypto.createHmac("sha256",SECRET).update(password).digest("hex")
export const creaHash=password=>bcrypt.hashSync(password, bcrypt.genSaltSync(10))
export const validaPassword=(usuario, password)=>bcrypt.compareSync(password, usuario.password)
