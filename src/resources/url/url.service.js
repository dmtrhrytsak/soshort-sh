import URL from './URL.model.js';

export const createURL = async (url) => {
  const createdURL = await URL.create(url);

  return createdURL;
};

export const findURL = async (slug) => {
  const url = await URL.findOne({ slug });

  return url;
};
