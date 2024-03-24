import User from "@/backend/models/user";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
      const user = await User.create({
        name,
        email,
        password,
      });
    
      res.status(201).json({
        user,
      });
  } catch (error) {
    console.log(error);
  }
};