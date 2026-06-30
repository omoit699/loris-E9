import mongoose from "mongoose";
import slugify from "slugify";
import paginate from "mongoose-paginate-v2";
import baseFields from "./BaseModel.js";

const categorySchema=new mongoose.Schema({

...baseFields,

name:{

type:String,

required:true,

unique:true

},

slug:String,

description:String,

image:{

url:String,

publicId:String

}

},

{

timestamps:true

});

categorySchema.pre("save",function(next){

this.slug=slugify(

this.name,

{

lower:true

}

);

next();

});

categorySchema.plugin(paginate);

export default mongoose.model(

"Category",

categorySchema

);