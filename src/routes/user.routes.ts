import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send('Hello User!')
})

export default userRouter;