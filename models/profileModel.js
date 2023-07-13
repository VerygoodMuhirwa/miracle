const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

let EducationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);

let ExperienceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        skills: {
            type: String,
        },
    },
    { timestamps: true }
);

let CertificationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);
const profileSchema = mongoose.Schema(
    {
        user: {
            type: ObjectId, 
            ref: "user", 
            required: true,
            unique: true
        },
        about: {
            type: String
        },
        education: [EducationSchema],
        certification: [CertificationSchema],
        experience: [ExperienceSchema],
    },
    { timestamps: true }
);
  
const profileModel = mongoose.model("profile", profileSchema);

module.exports = profileModel;