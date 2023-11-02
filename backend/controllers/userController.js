import bcrypt from 'bcrypt';
import User from '../models/usermodel.js';
import { errorHandeler } from '../utils/error.js';

export const test = (req, res) => {
    res.json({
        message: 'Hello world!!!'
    })
}

export const updateUser = async(req, res, next) => {
    if(req.user.id !== req.params.id){
        return next(errorHandeler(401, 'You are not allowed to update this user can only update your own profile'));
    }
    try {
        if(req.body.password){
            req.body.password = bcrypt.hashSync(req.body.password,10);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            {
                $set:{
                    userName:req.body.userName,
                    email:req.body.email,
                    password:req.body.password,
                    avatar:req.body.avatar,
                }
            },
            {
                new:true,
            }
            );
            
        const {password, ...rest} = updatedUser._doc;
        
        res.status(200).json({
            success:true,
            user:rest,
        });
    } catch (error) {
        next(error);
    }

};