import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName:{
        type: 'string',
        required: true,
        unique: true
    },
    email:{
        type: 'string',
        required: true,
        unique: true
    },
    password:{
        type: 'string',
        required: true,
        
    },
    avatar:{
        type: 'string',
        default: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema);
export default User;