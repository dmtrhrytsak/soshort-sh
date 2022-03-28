import { findURL } from '../resources/url/url.service.js';

const handleRedirect = async (req, res) => {
  const { slug } = req.params;

  const url = await findURL(slug);

  if (!url) {
    return res.status(404).json({ message: 'URL not found' });
  }

  res.redirect(url.destination);
};

export default handleRedirect;
