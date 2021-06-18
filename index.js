import express from 'express'
import cors from 'cors'
import Router from './src/router'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import {methodError, serverError} from './src/error/error.middle'

import './src/database/database'

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app
.use('/api/v1/', Router)
.use(methodError)
.use(serverError)

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
})