import { query } from "express";
import doctorService from "../services/doctorService"

let getTopDoctorHome=async (req, res) =>{
    let limit = req.query.limit
    if(!limit) limit =10;
    try {
        let response = await doctorService.getTopDoctorHome(+limit)
        return res.status(200).json(response);
    } catch(e){
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message:'Error from sever...'
        })
    }
}

let getAllDoctors = async (req,res) =>{
    try{
        let doctors= await doctorService.getAllDoctors();
        return res.status(200).json(doctors)
    } catch(e){
        console.log(e)
        return res.status(200).json({
            errCode:-1,
            errMessage:"Error from the sever"
        })
    }
}

let postInfoDoctor = async (req, res) =>{
    try{
        let response = await doctorService.saveDetailInfoDoctor(req.body)
        return res.status(200).json(response)
    } catch(e){
        console.log(e)
        return res.status(200).json({
            errCode:-1,
            errMessage:"Error from the sever"
        })
    }
}

let getDetailDoctorById = async(req, res) =>{
    try{     
        let info =await doctorService.getDetailDoctorById(req.query.id)
        return res.status(200).json(
            info
        )
    } catch(e){
        console.log(e)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from sever'
        })
    }
}
 
let bulkCreateSchedule = async (req, res) =>{
    try{     
        let info =await doctorService.bulkCreateSchedule(req.body)
        return res.status(200).json(
            info
        )
    } catch(e){
        console.log(e)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from sever'
        })
    }
}

let getScheduleByDate =async (req, res) =>{
    try{     
        let info =await doctorService.getScheduleByDate(req.query.doctorId, req.query.date)
        return res.status(200).json(
            info
        )
    } catch(e){
        console.log(e)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from sever'
        })
    }
}

let getExtraInfoDoctorById =async (req, res) =>{
    try{     
        let info =await doctorService.getExtraInfoDoctorById(req.query.doctorId)
        return res.status(200).json(
            info
        )
    } catch(e){
        console.log(e)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from sever'
        })
    }
}


let getProfileDoctorById =async (req, res) =>{
    try{     
        let info =await doctorService.getProfileDoctorById(req.query.doctorId)
        return res.status(200).json(
            info
        )
    } catch(e){
        console.log(e)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from sever'
        })
    }
}

let getListPatientForDoctor = async(req, res) =>{
    try{     
        let info =await doctorService.getListPatientForDoctor(req.query.doctorId, req.query.date )
        return res.status(200).json(
            info
        )
    } catch(e){
        console.log(e)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from sever'
        })
    }
}

let sendRemedy = async(req, res) =>{
    try{     
        let info =await doctorService.sendRemedy(req.body )
        return res.status(200).json(
            info
        )
    } catch(e){
        console.log(e)
        return res.status(200).json({
            errCode:-1,
            errMessage:'Error from sever'
        })
    }
}



module.exports ={
    getTopDoctorHome:getTopDoctorHome,
    getAllDoctors:getAllDoctors,
    postInfoDoctor:postInfoDoctor,
    getDetailDoctorById:getDetailDoctorById,
    bulkCreateSchedule:bulkCreateSchedule,
    getScheduleByDate:getScheduleByDate,
    getExtraInfoDoctorById:getExtraInfoDoctorById,
    getProfileDoctorById:getProfileDoctorById,
    getListPatientForDoctor:getListPatientForDoctor,
    sendRemedy:sendRemedy
    
}