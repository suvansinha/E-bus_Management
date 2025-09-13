# Ebus Management Project

This is a sample bus management web app integrated with Firebase.

## 📂 Project Structure
```
ebus-management/
├── public/
│   ├── index.html      # Main UI
│   ├── style.css       # Custom styles
│   ├── app.js          # Frontend logic
├── firebaseConfig.js   # Firebase configuration (replace with your keys)
├── firebase.json       # Firebase hosting configuration
├── .firebaserc         # Firebase project binding
```

## 🚀 How to Run Locally
1. Clone or extract this project.
2. Open `public/index.html` in your browser.

## 🔥 Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a project → Add Web App → Copy config keys.
3. Replace keys inside `firebaseConfig.js`:
   ```js
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

## 🌍 Hosting on Firebase
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Login:
   ```bash
   firebase login
   ```
3. Initialize project:
   ```bash
   firebase init
   ```
   - Select **Hosting**
   - Set `public` as hosting folder
   - Configure as SPA: **Yes**
4. Deploy:
   ```bash
   firebase deploy
   ```

Your app will be live at:  
`https://<your-project-id>.web.app`

## ✅ Verifying Data
- Check Firestore in Firebase Console to confirm user/bus data is stored correctly.
