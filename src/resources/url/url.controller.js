import { createURL } from './url.service.js';

export const createURLHandler = async (req, res, next) => {
  try {
    const url = req.body;

    const { destination, slug } = await createURL(url);

    res.status(201).json({
      url: { destination, slug },
      message: `Created URL with slug "${slug}"`,
    });
  } catch (error) {
    next(error);
  }
};
