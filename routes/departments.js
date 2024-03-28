const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/classroom_management", {
  useNewUrlParser: true, // Use the new parser
  useUnifiedTopology: true, // Use the new Server Discovery and Monitoring engine


});
                                            

/* GET users listing. */
const schema=mongoose.Schema({
 department:String
});

module.exports=mongoose.model("departments",schema);