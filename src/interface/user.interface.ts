import UserVerifyStatus from "~/enum/user-verify-status.enum.js";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  emailVerifyToken: string;
  forgotPasswordToken: string;
  verifyStatus: UserVerifyStatus;

  bio: string;
  avatar: string;
  coverPhoto: string;
  website: string;
  phone: string;
  location: string;

  createdAt: Date;
  updatedAt: Date;
}

export default User;