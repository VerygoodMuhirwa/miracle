const profileModel = require("../models/profileModel");
const Joi = require("joi");
const mongoose = require("mongoose")
const validateProfile = (profileData) => {
  const educationSchema = Joi.object({
    school: Joi.string().default(""),
    description: Joi.string().default("No information"),
  });

  const experienceSchema = Joi.object({
    company: Joi.string().default(""),
    description: Joi.string().default("No information"),
  });

  const certificationSchema = Joi.object({
    title: Joi.string().default(""),
    description: Joi.string().default("No information"),
  });

  const inventionSchema = Joi.object({
    title: Joi.string().default(""),
    description: Joi.string().default("No information"),
  });

  const patentSchema = Joi.object({
    title: Joi.string().default(""),
    description: Joi.string().default("No information"),
  });

 

  const availabilitySchema = Joi.object({
    day: Joi.number().default(""),
    range:Joi.string().default("")
  })

  const profileSchema = Joi.object({
    about: Joi.string(),
    education: Joi.array().items(educationSchema),
    certification: Joi.array().items(certificationSchema),
    experience: Joi.array().items(experienceSchema),
    tutorSkills: Joi.string(),
    inventions: Joi.array().items(inventionSchema),
    patents: Joi.array().items(patentSchema),
        availability:Joi.array().items(availabilitySchema),
    hourlyRates: Joi.number().default(0),
    country: Joi.string(),
    phoneNumber: Joi.string().default("No phone number"),
    openToCollaborate: Joi.boolean().default(false),
  });

return profileSchema.validate(profileData)
};


module.exports.editProfile = [
  async (req, res) => {
    const { error } = validateProfile(req.body);
    if (error) {
      return res.status(404).json({ error: error.details[0].message });
    }

    console.log(req.body);

    const {
      about,
      education,
      certification,
      experience,
      tutorSkills,
      inventions,
      patents,
      hourlyRates,  
      country,
      phoneNumber,
        openToCollaborate,
        backgroundPicture,
      profilePicture,
      availability
    } = req.body;
    try {
      const profile = await profileModel.findOneAndUpdate(
        { user: req.user._id },
        { about, education, certification, experience , profilePicture, backgroundPicture, availability,tutorSkills,inventions, patents, hourlyRates, country, phoneNumber, openToCollaborate},
        { new: true }
      );

      if(!profile)return res.status(404).send("No profile found to update")
      res.status(201).json({
        profile: profile,
        message: "Profile Updated Successfully",
      });
    } catch (err) {
      let error = err.message;
      res.status(400).json({ error: error });
    }
  },
];

module.exports.getMyProfile = async (req, res) => {
    try {

        var profile = await profileModel.findOne({ user: req.user._id }).populate('user');

        res.status(201).json({
            profile: profile,
            message: 'Profile Fetched Successfully',
        });

    } catch (err) {
        let error = err.message;
        res.status(400).json({ error: error });
    }
};


module.exports.deleteProfile = [async (req, res) => {
  try {
    const id = req.params.id;
    let profile = await profileModel
      .findOne({ user: req.user._id })
      .populate("user");

    const ids = [
      ...profile.experience.map((item) => item._id.toString()),
      ...profile.education.map((item) => item._id.toString()),
      ...profile.inventions.map((item) => item._id.toString()),
      ...profile.certification.map((item) => item._id.toString()),
      ...profile.patents.map((item) => item._id.toString()),
    ];

    // Check if the given id exists in the ids array
    if (!ids.includes(id)) {
      return res.status(404).json({ message: "Record not found" });
    }

    if (profile.experience.some((item) => item._id.toString() === id)) {
      profile.experience = profile.experience.filter(
        (item) => item._id.toString() !== id
      );
      await profile.save();
    } else if (profile.education.some((item) => item._id.toString() === id)) {
      profile.education = profile.education.filter(
        (item) => item._id.toString() !== id
      );
      await profile.save();
    } else if (profile.inventions.some((item) => item._id.toString() === id)) {
      profile.inventions = profile.inventions.filter(
        (item) => item._id.toString() !== id
      );
      await profile.save();
    } else if (
      profile.certification.some((item) => item._id.toString() === id)
    ) {
      profile.certification = profile.certification.filter(
        (item) => item._id.toString() !== id
      );
      await profile.save();
    } else if  (profile.patents.some((item) => item._id.toString() === id)) {
      profile.patents = profile.patents.filter(
        (item) => item._id.toString() !== id
      );
      await profile.save();
    }

    return res
      .status(200)
      .json({ message: "Record deleted successfully", profile });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
}
]


module.exports.updateProfile =[ async (req, res) => {
  try {
    const id = req.params.id;
    const { objectType, newData } = req.body;

    let profile = await profileModel
      .findOne({ user: req.user._id })
      .populate("user");

    let objectArray;
    switch (objectType) {
      case "experience":
        objectArray = profile.experience;
        break;
      case "education":
        objectArray = profile.education;
        break;
      case "patents":
        objectArray = profile.patents;
        break;
      case "inventions":
        objectArray = profile.inventions;
        break;
      case "certification":
        objectArray = profile.certification;
        break;
      default:
        return res.status(400).json({ message: "Invalid objectType provided" });
    }


    const objectToUpdate = objectArray.find(
      (item) => item._id.toString() === id
    );

    if (!objectToUpdate) {
      return res.status(404).json({ message: "Record not found" });
    }

    Object.assign(objectToUpdate, newData);

    await profile.save();

    return res
      .status(200)
      .json({ message: "Record updated successfully", profile });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
}
]