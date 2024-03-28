const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/classroom_management", {
  useNewUrlParser: true, // Use the new parser
  useUnifiedTopology: true, // Use the new Server Discovery and Monitoring engine
});

// Create MongoDB schema and model
const pdfSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subjects",
    required:true
  },
  checkboxes: {
    syllabus: {
      type: Boolean,
      default: false // Default value if not provided
    },
    previous_year: {
      type: Boolean,
      default: false
    },
    materials: {
      type: Boolean,
      default: false
    }
  }
  
});

module.exports = mongoose.model('PDF', pdfSchema);
