const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const voluteer_expericenceSchema = new Schema({
    comp_name :{
        type:String,
    },
    comp_position :{
        type:String,
    },
    comp_duration: {
        type: String,
        default:null,
      },
    comp_start_date:{
        type: Date, 
        default:null,
      },
    comp_end_date:{
        type: Date,
        default:null,
      },

})

Modelclass = mongoose.model('vol_expericence',voluteer_expericenceSchema)

module.exports = Modelclass
