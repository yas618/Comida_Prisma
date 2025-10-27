// Controla as rotas, ou seja, o caminho da URL
import { Router } from "express";
import * as comidaController from './../controllers/comidaControllers.js'

const router = Router();

router.get("/", comidaController.listarTodos);
router.get("/:id", comidaController.listarUm);
router.post("/", comidaController.criar);
router.delete("/:id", comidaController.deletar);
router.put("/", comidaController.atualizar);

export default router;