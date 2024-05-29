require('dotenv').config();

module.exports = {
  onlyChanged: true,
  projectId: process.env.PROJECT_ID,
  zip: true,
};
