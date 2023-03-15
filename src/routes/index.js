const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRouter = require('./recipesRoutes')
const dietRouter = require('./dietRoutes')

const cors = require('cors');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const corsOptions = {
    origin: "https://pi-foods-front-ten.vercel.app"
};
  
router.use(cors(corsOptions));

router.use('/recipes', recipesRouter)
router.use('/diets', dietRouter)


module.exports = router;
