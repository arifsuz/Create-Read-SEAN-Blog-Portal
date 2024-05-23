const express = require('express');
const supabase = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3030;

const SUPABASE_URL = 'https://xhvtxwdlmwamjnxkojvh.supabase.co';
const SUPABASE_SERVICE_ROLE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhodnR4d2RsbXdhbWpueGtvanZoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjQ4MTgzMCwiZXhwIjoyMDMyMDU3ODMwfQ.WfuUBx7XGFDD_R6K0E9jjpcsdswU_etRO7tp0t_lafQ';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

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