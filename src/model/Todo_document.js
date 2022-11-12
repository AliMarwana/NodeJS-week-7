const {Schema, model} = require('mongoose')

const todoSchema = new Schema(
    {
        _id: 
        {   type: String,
            required: true,
            minlength: 3,
            maxlength: 20,
        },
        title:
        {   type: String,
            required: true,
            unique: true,
            minlength: 3,
            maxlength: 20,
        },
        title:
        {   type: String,
            required: true,
            unique: true,
            minlength: 3,
            maxlength: 20,
        },

    },
    {   timestamps: true
    }
);

const todoModel = model( "todoUsers", todoSchema)

module.exports = todoModel;