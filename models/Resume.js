import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  technologies: [String],
});

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  startYear: String,
  endYear: String,
  details: String,
});

const resumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },
  headline: {
    type: String,
    default: ""
  },
  summary: {
    type: String,
    default: ""
  },
  skills: [String],
  projects: [projectSchema],
  education: [educationSchema],
  experience: [{
    company: String,
    role: String,
    startDate: String,
    endDate: String,
    responsibilities: String
  }],
  social: {
    linkedin: String,
    github: String,
    website: String
  },
  template: {
    type: String,
    default: "default"
  },
}, { timestamps: true });

const Resume = mongoose.model("Resume", resumeSchema);
export default Resume;
