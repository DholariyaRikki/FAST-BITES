import { Request, Response } from "express";
import { User } from "../models/user.models";
import bcrypt from "bcryptjs"
import crypto from "crypto";
import cloudinary from "../utils/cloudinary";
import { generatevarificationcode } from "../utils/generatevarificationtoken";
import { genratetoken } from "../utils/generatetoken";
import { sendpaaswordresetemail, sendResetsuccessEmail, sendverificationemail, sendWelcomeEmail } from "../mailtrap/email";


export const signup = async(req:Request,res:Response)=>{
    try {
        const{fullname,email,password,contact} = req.body

        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                succsess:false,
                message:"User already exists"
            })
        }
        const hashpassword = await bcrypt.hash(password,10)
        const verificationtoken = generatevarificationcode()

        user = await User.create({
            fullname,
            email,
            password:hashpassword,
            contact:Number(contact),
            verificationtoken,
            verificationtokenexpireat:Date.now() + 24*60*60*1000
        })

        genratetoken(res,user)

        await sendverificationemail(email,verificationtoken)

        const userwithoutpassword = await User.findOne({email}).select("-password")
        return res.status(201).json({
            success:true,
            message:"user created successfully",
            user:userwithoutpassword

        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
}



export const login = async(req:Request,res:Response)=>{
    try {
        const{email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user not found"
            })
        }
        const ispasswordmatch = await bcrypt.compare(password,user.password)
        if(!ispasswordmatch){
            return res.status(400).json({
                success:false,
                message:"incorrect password"
            })
        }
        genratetoken(res,user)
        user.lastlogin = new Date()
        await user.save()

        const userwithoutpassword = await User.findOne({email}).select("-password")
        return res.status(200).json({
            success:true,
            message:`wellcome back ${user.fullname}`,
            user:userwithoutpassword

        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
}

export const verifyEmail = async(req:Request,res:Response)=>{
    try {
        const {verificationcode} = req.body
        const user = await User.findOne({verificationtoken:verificationcode,verificationtokenexpireat:{$gt:Date.now()}}).select("-password")
        if(!user){
            return res.status(400).json({
                success:false,
                message:"invalid or exprire verification token"
            })
        }
        user.isverified = true
        user.verificationtoken = undefined
        user.verificationtokenexpireat = undefined
        await user.save()
        await sendWelcomeEmail(user.email,user.fullname)

return res.status(200).json({
    success:true,
    message:"email verified successfully",
    user,
})        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
}

export const logout = async(_:Request,res:Response)=>{
    try {
        return res.clearCookie("token").status(200).json({
            success:true,
            message:"logged out successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
}

export const forgotPassword = async(req:Request,res:Response)=>{
    try {
        const {email} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user not found"
            })
        }
        const resettoken = crypto.randomBytes(40).toString("hex")
        const resettokenexpireat = new Date(Date.now() + 1*60*60*1000)
        user.resetpasswordtoken=resettoken
        user.resetpasswordtokenexpire=resettokenexpireat
        await user.save()

        await sendpaaswordresetemail(user.email, `${process.env.FRONTEND_URL}/resetpassword/${resettoken}`);

        return res.status(200).json({
            success:true,
            message:"password reset link sent to your email"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
}

export const resetPassword = async(req:Request,res:Response)=>{
    try {
        const {token} = req.params
        const {password} = req.body
        const user = await User.findOne({resetpasswordtoken:token,resetpasswordtokenexpire:{$gt:Date.now()}})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"invalid or exprire resetl token"
            })
        }

        const hashedpassword = await bcrypt.hash(password,10)
        user.password = hashedpassword
        user.resetpasswordtoken = undefined
        user.resetpasswordtokenexpire = undefined
        await user.save()

        await sendResetsuccessEmail(user.email)

        return res.status(200).json({
            success:true,
            message:"password reset successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
}

export const checkAuth = async(req:Request,res:Response)=>{
    try {
        const userId = req.id
        const user = await User.findById(userId).select("-password")
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user not found"
            })
        }
        return res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
}

export const updateProfile = async(req:Request,res:Response)=>{
    try {
        const userId = req.id
        const {fullname,email,address,city,country,profilepicture} = req.body
        let cloudResponse:any
        cloudResponse = await cloudinary.uploader.upload(profilepicture)

        const updateData = {fullname,email,address,city,country,profilepicture}

        const user = await User.findByIdAndUpdate(userId,updateData,{new:true}).select("-password")
       
        return res.status(200).json({
            success:true,
            user,
            message:"profile updated successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
}