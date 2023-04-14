const mongoose  = require('mongoose')

const applicationformSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:[true,'please add the contact name']
    },
    last_name:{
        type: String,
        required:[true,'please add the contact name']
    },
   dob:{
        type: Date,
        required:[true,'please add the contact dob']

    },
     phone:{
        type: String,
        required:[true,'please add the contact phone number']
    }, 
    address:{
        type: String,
        required:[true,'please add the contact address']
    },
    email:{
        type: String,
        required:[true,'please add the contact email']
    },
    gender:{
        type: String,
        required:[true,'please add the contact gender']
    },
} , 
{
    timestamps: true
}
)

module.exports = mongoose.model('applicationform', applicationformSchema)