import { Request, Response } from 'express';
import AUPostCode from '../../../assets/australian-postcodes.json';

export const postCodeSearchController = (req: Request, res: Response) => {
  const filteredPostCode: any[] = [];
  try {
    if (req.query && req.query.search === '') {
      const pageNumber = Number(req.query.page);
      const pageStatIndex = pageNumber * 10 - 10;
      const pageEndIndex = pageNumber * 10;
      const slicedPostCode = AUPostCode.slice(pageStatIndex, pageEndIndex);
      res.status(201).json(slicedPostCode);
      return;
    }
    if (req.query && req.query.search !== '') {
      const searchKey = req.query.search as string;
      AUPostCode.map((item) => {
        if (item.suburb.toLowerCase().includes(searchKey.toLowerCase())) {
          filteredPostCode.push(item);
        }
      });
      const pageNumber = Number(req.query.page);
      const pageStatIndex = pageNumber * 10 - 10;
      const pageEndIndex = pageNumber * 10;
      const slicedPostCode = filteredPostCode.slice(pageStatIndex, pageEndIndex);
      res.status(201).json(slicedPostCode);
      return;
    }
  } catch (error) {
    res.status(404).json({ error: 'Fail to get all posts' });
  }

  res.send(AUPostCode);
};
