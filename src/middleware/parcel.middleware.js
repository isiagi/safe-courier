import parcel from '../models/parcel.model'
import Response from '../utils/response'
import {authRol,authScope} from '../auth/auth.permission'

export const getById = async(req, res, next) => {
    req.parcel = await parcel.findOne({_id: req.params.id})
    if(req.parcel == null){
        return Response(res, 400, 'not available')
    }
    next()
}

export const getByUser = async(req, res, next) => {
    req.parcel = await parcel.find({userId: req.user.user})
    console.log(req.parcel)
    if(req.parcel == null){
        return Response(res, 400, 'not available')
    }
    next()
}

export async function Update(req, res, next){
    req.parcel = parcelModal.updateOne({_id: req.params.id}, req.body)
    if(!req.parcel){
        Response(res, 400, err)
    }
}

export async function getAll(req, res, next){
    req.all = await parcel.find({}) 
    if(!req.all){
        return  Response(res, 400, err)
    }
    if(req.all.length === 0){
        return Response(res, 400, 'No Parcel Availiable')
    }
    next()
}

export function authGet(req, res, next){
    if(!authRol(req.user, req.parcel)){
        return Response(res, 401, 'Allow Denied')
    }
    next()
}

export function scopeParcel(req, res, next){
    if(authScope(req.user)){
        return Response(res, 200, req.all)
    }
    next()
}

export function scopeAuth(req, res, next){
    if(!authScope(req.user)){
        return Response(res, 401, "Access Denied Boss")
    }
    next()
}

