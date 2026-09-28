import express from "express";
 
import instrutorRoutes from "../src/routes/instrutorRoutes";
import cursosRoutes from "./routes/cursosRoutes";
 
const app = express();
 
app.use(express.json());
 
app.use("/instrutores", instrutorRoutes);
app.use("/cursos", cursosRoutes);
 
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
 
 