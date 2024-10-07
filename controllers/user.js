const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, h) => {
    const { name, email, password } = req.payload;

    try {
        const userEmail = await User.findOne({ email });
        if (userEmail) {
            return h.response({ message: "User email already exist" }).code(400)
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();
        return h.response({ message: 'User created successfully' }).code(201);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'User creation failed' }).code(500);
    }
};

exports.userLogin = async (req, h) => {
    const { email, password } = req.payload;

    try {
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return h.response({ error: 'Invalid credentials' }).code(401);
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return h.response({ token }).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Authentication failed' }).code(500);
    }
};

exports.getAllUsers = async (req, h) => {
    try {
        const user = await User.find({}).select({ password: 0 });

        if (!user) {
            return h.response({ message: "Not found any user" }).code(404)
        }
        return h.response({ message: "Get all users", user }).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
}

exports.getUserById = async (req, h) => {
    const { id } = req.params;
    try {
        const user = await User.findById({ _id: id }).select('-password');

        if (!user) {
            return h.response({ message: "User not found" }).code(404);
        }

        return h.response({ message: "User detail by Id", user }).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};

exports.deleteUser = async (req, h) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete({ _id: id });

        if (!user) {
            return h.response({ message: "User not found" }).code(404);
        }

        return h.response({ message: "User deleted successfully" }).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};