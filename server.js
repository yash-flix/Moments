import express from 'express';
import admin from 'firebase-admin';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cors from 'cors';

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    "type": "<YOUR_KEY>",
    "project_id": "<YOUR_KEY>",
    "private_key_id": "<YOUR_KEY>",
    "private_key": "<YOUR_KEY>",
    "client_email": "<YOUR_KEY>",
    "client_id": "<YOUR_KEY>",
    "auth_uri": "<YOUR_KEY>"})
});

const db = admin.firestore();

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Middleware to verify JWT (unchanged)
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: 'No token provided' });
  }

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: 'Failed to authenticate token' });
    }

    req.userId = decoded._id;
    next();
  });
};

// Route to get user profile (protected with verifyToken middleware) (unchanged)
app.get('/api/profile', verifyToken, async (req, res) => {
  res.send({ userId: req.userId });
});

// Register Endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, phone, location, password } = req.body;

    // Check if username or email already exists
    const usersRef = db.collection('users');
    const usernameQuery = await usersRef.where('username', '==', username).get();
    const emailQuery = await usersRef.where('email', '==', email).get();    

     if (!usernameQuery.empty || !emailQuery.empty) {
      throw new Error('Username or email already exists');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = {
      username,
      email,
      phone,
      location,
      password: hashedPassword,
    };

    // Save the user to Firestore
    await db.collection('users').add(newUser);

    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
      if (error.message === 'Username or email already exists'){
        res.status(409).send({ message: error.message });
      }
      else{
        console.error(error);
        res.status(500).send({ message: 'Error registering user' });
       }
  }
});

// Login Endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { credential, password } = req.body; // credential can be username or email

    // Find the user in firestore
    const usersRef = db.collection('users');
    const userQuery = await usersRef.where('username', '==', credential).get();
    const emailQuery = await usersRef.where('email', '==', credential).get();

    let user;
    if (!userQuery.empty){
      user = userQuery.docs[0].data();
    }
    else if (!emailQuery.empty) {
      user = emailQuery.docs[0].data();
    }
    if (!user) {
      throw new Error("User not found")
    }

    // Compare the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        throw new Error("Invalid password")
    }

        // Generate JWT
        const token = jwt.sign({ _id: user._id }, 'your-secret-key'); // Replace 'your-secret-key' with a strong secret key
        res.send({ token });
    } catch (error) {
        console.error(error);
        if (error.message === "User not found" || error.message === "Invalid password"){
            res.status(400).send({ message: error.message });
        }
        else {
            res.status(500).send({ message: 'Error logging in' });
        }
    }
});
    



app.get('/', (req, res) => {
    res.send('Hello from the server');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});