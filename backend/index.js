import "dotenv/config"
import express  from "express";
import moodker_router from "./routes/moodker_router.js";
import cors from "cors"


const app = express();
const PORT=process.env.PORT ||3000

const whitelist =[process.env.ORIGIN1,process.env.ORIGIN2]

app.use(cors({
    origin:(origin, callback)=> {
      console.log(`Iniciando CORS`)
        console.log("Origin: " + origin);
        if (!origin || whitelist.includes(origin)){
            return callback(null, origin);
        }
        return callback("Error de cors: "+origin+" not authorized");
    }
}
    
))

app.use(express.json());

app.use("/moodker/v1/",moodker_router)

app.use(express.static("public"));

app.listen(PORT, ()=>{
  console.log(`Servidor iniciado en: http://localhost:${PORT}/moodker/v1/`)
});