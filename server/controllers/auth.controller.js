import bycrypt from 'bcryptjs';
import User from "../models/user.model.js";
import generateTokenAndSetCookie  from '../utils/generateToken.js';

export const signupUser = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword) {
            return res.status(400).json({message: 'Passwords do not match'});
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message: 'User already exists'});
        }

        //HASH PASSWORD
        const salt = await bycrypt.genSalt(10); 
        const hashedPassword = await bycrypt.hash(password, salt);

        const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword, 
            gender,
            profilePicture: gender === "male" ? boyProfilePicture : girlProfilePicture
        })

        if(newUser) {
            //Generate JWT token here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                message: 'User created successfully',
                user: {
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    username: newUser.username,
                    profilePicture: newUser.profilePicture
                }
            });
        }else {
            res.status(400).json({message: 'Invalid user data'});
        }

    }catch(error){
        console.log('Error signing up user', error.message);
        res.status(500).json({error: "Internal server error"});
    }
  };
  
  export const loginUser = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bycrypt.compare(password, user?.password || '');

        if(!user || !isPasswordCorrect){
            return res.status(400).json({message: 'Invalid credentials'});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePicture: user.profilePicture
        });
        
    } catch (error) {
        console.log('Error Login user', error.message);
        res.status(500).json({error: "Internal server error"});
    }

  };
  
  export const logoutUser = (req, res) => {
    try {
        res.cookie('jwt', '', {maxAge:0})
        res.status(200).json({message: 'User logged out successfully'});

    } catch (error) {
        console.log('Error logout user', error.message);
        res.status(500).json({error: "Internal server error"});
    }
  };
  