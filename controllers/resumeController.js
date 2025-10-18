import Resume from "../models/Resume.js";

export const getResume = async (req, res) => {
  const resume = await Resume.findOne({ user: req.user._id }).populate("user", "name email");
  if (!resume) return res.status(404).json({ message: "Resume not found!!" });
  res.json(resume);
};

export const createOrUpdateResume = async (req, res) => {
  const data = req.body;
  let resume = await Resume.findOne({ user: req.user._id });

  if (resume) {
    // update
    resume = Object.assign(resume, data);
    await resume.save();
    return res.json(resume);
  } else {
    // create
    const newResume = new Resume({ user: req.user._id, ...data });
    await newResume.save();
    return res.status(201).json(newResume);
  }
};

export const updateResumeById = async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  const resume = await Resume.findOne({ _id: id, user: req.user._id });
  if (!resume) return res.status(404).json({ message: "Resume not found!!" });
  Object.assign(resume, update);
  await resume.save();
  res.json(resume);
};

export const deleteResume = async (req, res) => {
  const { id } = req.params;
  const resume = await Resume.findOneAndDelete({ _id: id, user: req.user._id });
  if (!resume) return res.status(404).json({ message: "Resume not found!!" });
  res.json({ message: "Resume deleted!!" });
};
