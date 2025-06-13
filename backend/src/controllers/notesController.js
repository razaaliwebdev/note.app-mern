import Note from "../models/NoteModel.js";


// Create Notes Controller
export const createNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(401).json(
                {
                    success: false,
                    message: "All the fileds are required"
                }
            );
        };

        const note = await Note.create(
            {
                title,
                content
            }
        );

        return res.status(201).json(
            {
                success: true,
                message: "Note Created Successfully.",
                note
            }
        );

    } catch (error) {
        console.error("Error while creating new Note");
        return res.status(500).json({
            success: false,
            message: "Internal server error", error
        });
    };
};

// Get all the notes
export const getAll = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        if (notes.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No Notes Found"
            });
        };

        return res.status(200).json({
            notes
        });
    } catch (error) {
        console.error("Error in Get All The Notes Controller");
        return res.status(500).json(
            {
                success: false,
                message: "Internal server error"
            }
        )
    }
};

// Get Single note
export const getSingle = async (req, res) => {
    try {
        const { id } = req.params;
        const singleNote = await Note.findById(id);
        if (!singleNote) {
            return res.status(
                {
                    success: false,
                    message: "No Not Found."
                }
            );
        };

        return res.status(200).json(
            {
                success: true,
                message: "Get Single Note Successfully.",
                singleNote
            }
        )

    } catch (error) {
        console.error("Error while Getting single note");
        return res.status(500).json(
            {
                success: false,
                message: "Internal server error", error
            }
        )
    }
};

// Update the note
export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });

        if (!updatedNote) {
            return res.status(404).json(
                {
                    success: false,
                    message: "No Note Found."
                }
            );
        };



        return res.status(200).json({
            success: true,
            message: "Note updated successfully.",
            updatedNote
        });

    } catch (error) {
        console.error("Error while updating the note");
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
};

// Delete the note
export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteNote = await Note.findByIdAndDelete(id);
        if (!deleteNote) {
            return res.status(404).json(
                {
                    success: false,
                    message: "No Note Found."
                }
            )
        };

        return res.status(200).json({
            success: true,
            message: "Note Deleted Successfully.",
            deleteNote
        });

    } catch (error) {
        console.errro("Error while Deleting the note");
        return res.status(500).json({
            success: false,
            message: "Internal server error", error
        })
    }
};