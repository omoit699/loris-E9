import mongoose from "mongoose";

const baseSchemaFields = {

    isActive:{

        type:Boolean,

        default:true

    },

    createdBy:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"User"

    },

    updatedBy:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"User"

    }

};

export default baseSchemaFields;