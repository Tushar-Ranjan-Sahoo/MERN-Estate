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
        default: "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema);
export default User;