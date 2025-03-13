import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simulated database (replace with a real database in production)
const features = [
    {
        id: 1,
        icon: "🌐",
        title: "Global Reach",
        description: "Connect with customers worldwide through our powerful platform."
    },
    {
        id: 2,
        icon: "⚡",
        title: "Lightning Fast",
        description: "Experience blazing fast performance with our optimized infrastructure."
    },
    {
        id: 3,
        icon: "🛡️",
        title: "Secure by Default",
        description: "Your data is protected with enterprise-grade security measures."
    }
];

const stats = [
    {
        id: 1,
        number: "10M+",
        label: "Users Worldwide"
    },
    {
        id: 2,
        number: "99.9%",
        label: "Uptime Guarantee"
    },
    {
        id: 3,
        number: "24/7",
        label: "Customer Support"
    }
];

// Contact form submissions storage
const contactSubmissions = [];

app.get('/api/features', (req, res) => {
    res.json(features);
});

app.get('/api/stats', (req, res) => {
    res.json(stats);
});

app.post('/api/contact', (req, res) => {
    const { email, name, message } = req.body;
    
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    
    const submission = { email, name: name || '', message: message || '' };
    contactSubmissions.push(submission);
    res.status(201).json({ message: "Contact form submitted successfully" });
});

app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    
    // In a real application, you would save this to a database
    res.status(201).json({ message: "Successfully subscribed to newsletter" });
});

app.get('/api/health', (req, res) => {
    res.json({ status: "healthy", message: "Server is running" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});