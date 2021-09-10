import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import productRoutes from './routes/products.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/api', productRoutes);

export default app