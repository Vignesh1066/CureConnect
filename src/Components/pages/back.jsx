const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 1000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// MongoDB Connection
mongoose
  .connect('mongodb+srv://alkalam456:PEw8msbrhfXBFJTg@jhclusters.rxa5a.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Mongoose Schema and Model
const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  address: String,
  dist: String,
  pincode: String,
  profileImage: String, // Path to the uploaded image
});

const Profile = mongoose.model('Profile', profileSchema);

// Multer Configuration
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'uploads'),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed!'));
    }
  },
});

// API Endpoints

// Get profile data
app.get('/api/profile', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile || {});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile data', error });
  }
});

// Update profile data and image
app.put('/api/profile', upload.single('profileImage'), async (req, res) => {
  const { name, email, mobile, address, dist, pincode } = req.body;
  // const profileImage = req.file ? `/uploads/${req.file.filename}` : undefined;
  const profileImage = req.file ? `/uploads/${req.file.filename}` : profile.profileImage;


  try {
    // Find the existing profile
    let profile = await Profile.findOne();

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Remove old image if a new one is uploaded
    if (profileImage && profile.profileImage) {
      const oldImagePath = path.join(__dirname, profile.profileImage);
      if (fs.existsSync(oldImagePath)) {
        fs.unlink(oldImagePath, (err) => {
          if (err) console.error('Error deleting old image:', err);
        });
      } else {
        console.warn('Old image not found, skipping deletion:', oldImagePath);
      }
    }

    // Update profile fields
    profile.name = name || profile.name;
    profile.email = email || profile.email;
    profile.mobile = mobile || profile.mobile;
    profile.address = address || profile.address;
    profile.dist = dist || profile.dist;
    profile.pincode = pincode || profile.pincode;
    if (profileImage) profile.profileImage = profileImage;

    // Save updated profile
    await profile.save();
    res.json({ message: 'Profile updated successfully', data: profile });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile data', error });
  }
});

// Delete profile
app.delete('/api/profile', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Delete profile image from the server
    if (profile.profileImage) {
      const imagePath = path.join(__dirname, profile.profileImage);
      if (fs.existsSync(imagePath)) {
        fs.unlink(imagePath, (err) => {
          if (err) console.error('Error deleting profile image:', err);
        });
      } else {
        console.warn('Profile image not found, skipping deletion:', imagePath);
      }
    }

    // Delete profile from the database
    await profile.deleteOne();
    res.json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting profile', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
