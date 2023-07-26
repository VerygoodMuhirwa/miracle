import { createSlice } from "@reduxjs/toolkit";

export const formData = createSlice({
  name: "formData",
  initialState: {
    inventions: [
      {
        id: 1,
        title: "Invention 1",
        description: "This is the first invention.",
      },
      {
        id: 2,
        title: "Invention 2",
        description: "This is the second invention.",
      },
    ],

    education: [
      {
        id: 1,
        description: "Bachelor of Science",
        school: "University of XYZ",
      },
      {
        id: 2,
        description: "Master of Business Administration",
        school: "University of ABC",
      },
    ],

    patents: [
      {
        id: 1,
        title: "Patent 1",
        description: "This is the first patent.",
      },
      {
        id: 2,
        title: "Patent 2",
        description: "This is the second patent.",
      },
    ],

    experience: [
      {
        id: 1,
        company: "Tech Solutions Ltd.",
        description: 
          "Developed and maintained web applications.Collaborated with the team to design and implement software solutions.Conducted code reviews and provided feedback for improvements."
        
      },
      {
        id: 2,
        company: "Data Insights Inc.",
        description:
          "Analyzed and interpreted complex data sets using statistical methods.Built predictive models to identify patterns and trends.Presented findings and actionable insights to stakeholders."
      },
    ],

    certificate: [
      {
        id: 1,
        title: "React Certification",
        description: "React Academy",
      },
      {
        id: 2,
        title: "Data Science Fundamentals",
        description: "Data Science Institute",
      },
    ],
  },
  reducers: {
    addInvention: (state, action) => {
      state.inventions.push(action.payload);
    },
    editInvention: (state, action) => {
      const { id, title, description } = action.payload;
      const existingInvention = state.inventions.find((item) => item.id === id);
      if (existingInvention) {
        existingInvention.title = title;
        existingInvention.description = description;
      }
    },
    deleteInvetion:(state,action)=>{
      const { id } = action.payload;
      // Filter out the item with the specified id from the inventions array
      state.patents = state.patents.filter((item) => item.id !== id);
    },
    addPatent: (state, action) => {
      state.patents.push(action.payload);
    },
    editPatent: (state, action) => {
      const { id, title, description } = action.payload;
      const existingPatent = state.patents.find((item) => item.id === id);
      if (existingPatent) {
        existingPatent.title = title;
        existingPatent.description = description;
      }
    },
    deletePatent:(state,action)=>{
      const { id } = action.payload;
      // Filter out the item with the specified id from the patents array
      state.patents = state.patents.filter((item) => item.id !== id);
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    editEducation: (state, action) => {
      const { id,school, description } = action.payload;
      const existingEducation = state.education.find((item) => item.id === id);
      if (existingEducation) {
        existingEducation.school = school;
        existingEducation.description = description;
      }
    },
    deleteEducation:(state,action)=>{
      const { id } = action.payload;
      // Filter out the item with the specified id from the patents array
      state.education = state.education.filter((item) => item.id !== id);
    },
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },
    editExperience: (state, action) => {
      const { id, company, description } = action.payload;
      const existingExperience = state.experience.find((item) => item.id === id);
      if (existingExperience) {
        existingExperience.company = company;
        existingExperience.description = description;
      }
    },
    deleteExperience:(state,action)=>{
      const { id } = action.payload;
      // Filter out the item with the specified id from the patents array
      state.experience = state.experience.filter((item) => item.id !== id);
    },
    addCertificate: (state, action) => {
      state.certificate.push(action.payload);
    },
    editCertificate: (state, action) => {
      const { id, title, description } = action.payload;
      const existingCertificate = state.certificate.find((item) => item.id === id);
      if (existingCertificate) {
        existingCertificate.title = title;
        existingCertificate.description = description;
      }
    },
    deleteCertificate:(state,action)=>{
      const { id } = action.payload;
      // Filter out the item with the specified id from the patents array
      state.certificate = state.certificate.filter((item) => item.id !== id);
    }

  },
});

export const formDataActions = formData.actions;

export default formData.reducer;
