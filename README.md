# ✈️ Go-Trip

Go-Trip is a **full-stack travel matchmaking platform** built with scalability and modern UX in mind. It offers everything from profile swiping to real-time messaging and notifications — all in one beautifully responsive web app.

---

## 🚀 Key Features

- 🔐 **Authentication System with JWT**
- 🛡️ **Protected Routes** for authorized access
- 👤 **User Profiles** with editing and updates
- 🖼️ **Image Uploads** via Cloudinary
- 🔄 **Swipe Left / Right Feature** for travel partner matching
- 💬 **Real-time Chat Messaging** with WebSockets
- 🔔 **Live Notifications** for requests and messages
- 🤝 **Smart Matching Algorithm**
- 📱 **Fully Responsive** on all devices
- ⌛ ...and many more features coming soon!

---

## ⚙️ Environment Setup

Before running the app, create a `.env` file in the root directory and configure the following:

```env
PORT=5000
MONGO_URI=<your_mongo_uri>

JWT_SECRET=<your_very_strong_secret>

NODE_ENV=development
CLIENT_URL=http://localhost:5173

CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>

 
