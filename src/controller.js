const Note = require('./models/note')
const Count = require('./models/count');

/**
 * 
 */
const add = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'title and content are required' });
        }

        const response = await Note.create(req.body);
        res.status(201).json({ message: 'Data added successfully', data: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/**
 * 
 */
const update = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;
        if (!title || !content) {
            return res.status(400).json({ error: 'title and content are required' });
        }

        const response = await Note.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({ message: 'Data updated successfully', data: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getCount = async (req, res) => {
    try {

    } catch (error) {

    }
}


module.exports = {
    add,
    update,
    getCount
}