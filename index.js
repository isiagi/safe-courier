import express from 'express'
import Router from './src/router'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import {methodError, serverError} from './src/error/error.middle'

import './src/database/database'

const app = express()

app.use('/api/v1/', Router)
app.use(methodError)
app.use(serverError)

const PORT = process.env.PORT || 5000

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
})