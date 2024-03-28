const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/classroom_management", {
  useNewUrlParser: true, // Use the new parser
  useUnifiedTopology: true, // Use the new Server Discovery and Monitoring engine


});

const schema2=mongoose.Schema({
    name:{
      type:String,
      required:true
    },

    rollno:{
        type:Number,
        required:true
    },

    department:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"departments"
    },

    branch:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"branches"
    }
  
  });

  module.exports=mongoose.model("students",schema2);