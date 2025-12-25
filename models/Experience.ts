import mongoose from 'mongoose';
const { Schema } = mongoose;

const experienceSchema = new Schema({
  company: String,
  title: String,
  location: String,
  start_date: Date,
  end_date: Date,
  description: String
});
const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);

export default Experience;