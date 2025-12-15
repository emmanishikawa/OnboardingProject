import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectSchema = new Schema({
  project_name: String,
  start_date: Date,
  end_date: Date,
  description: String,
  deployment_link: String,
  github_link: String
});

export default mongoose.model('Project', projectSchema);