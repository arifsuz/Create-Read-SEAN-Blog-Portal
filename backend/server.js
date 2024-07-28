require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3030;

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;

const db = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get('/', async(req, res) => {
    const getBlog = await db.from("blog").select();
    res.json({ getBlog });
});

app.post('/', async(req, res) => {
    const { title, description } = req.body;
    const createPost = await db.from('blog').insert({ title, description });
    console.log("Post created successfully!", createPost);

    res.json({ createPost });
});

app.delete('/', async (req, res) => {
    const blogId = req.params.id;
    try {
        await Blog.findByIdAndDelete(blogId);
		res.status(200).send({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to delete blog' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});