const todo = require('../model/Todo_document')

//get all users
exports.getAllTodo = async (req, res) =>
{
    try {
        let todo_s = await user.find();
        if(todo_s.length === 0)
        return res.status(404).json(
            {
                success: true,
                message: "No users were found",
                
            }
        )
        res.status(200).json(
            {
                success: true,
                message: "Users found",
                users,
            }
        )
    } catch (error) {
        res.status(200).json(
            {
        success: false,
        message: 'Internal Servor Error',
        error: error.message,
    }
        )
    }
 }