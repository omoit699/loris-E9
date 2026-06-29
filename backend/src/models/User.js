import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import paginate from "mongoose-paginate-v2";
import baseFields from "./BaseModel.js";

const userSchema = new mongoose.Schema({

    ...baseFields,

    firstName:{
        type:String,
        required:true,
        trim:true
    },

    lastName:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true
    },

    phone:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
        minlength:8,
        select:false
    },

    role:{
        type:String,
        enum:[
            "customer",
            "admin",
            "staff",
            "delivery"
        ],
        default:"customer"
    },

    avatar:{
        url:String,
        publicId:String
    },

    emailVerified:{
        type:Boolean,
        default:false
    },

    phoneVerified:{
        type:Boolean,
        default:false
    },

    lastLogin:Date

},{
    timestamps:true
});

userSchema.plugin(paginate);

userSchema.pre("save",async function(next){

    if(!this.isModified("password")){

        return next();

    }

    this.password=await bcrypt.hash(

        this.password,

        12

    );

    next();

});

userSchema.methods.comparePassword=function(password){

    return bcrypt.compare(

        password,

        this.password

    );

};

export default mongoose.model(

    "User",

    userSchema

);