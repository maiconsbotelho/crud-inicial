import cors from "cors";
import express from "express";
import rotasProdutos from "./routes/produtos";

const app = express();
const porta = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/produtos", rotasProdutos);

app.listen(porta, () => {
  console.log(`rodando na porta ${porta}`);
});
