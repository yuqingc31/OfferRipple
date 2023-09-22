import { Request, Response } from 'express';
import uploadImageHandler from '../utils/uploadImages';

export const imageUpload = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const imageUrl = await uploadImageHandler(req.file as Express.Multer.File);
    res.json({ msg: 'success', url: imageUrl });
    res.status(201);
  } catch (err) {
    const errMsg = err as { code: number; msg: string };
    console.log(errMsg.msg);
    res.status(errMsg.code).json({ msg: errMsg.msg });
    return;
  }
};
