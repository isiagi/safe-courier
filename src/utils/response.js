const Response = (res, status, message) => {
    return res.status(status).send({status, message})
}

export default Response