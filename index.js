import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import {methodError, serverError} from './src/error/error.middle'

import './src/database/database'

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(methodError)
app.use(serverError)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
})