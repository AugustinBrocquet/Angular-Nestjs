import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: false,
        required: true,
    },
    content: {
        type: String,
        unique: false,
        required: true,
    },
    created_at: {
        type: Date,
        unique: false,
        required: true,
        default: Date.now(),
    },
    updated_at: {
        type: Date,
        unique: false,
        required: false,
        default: null,
    },

});
