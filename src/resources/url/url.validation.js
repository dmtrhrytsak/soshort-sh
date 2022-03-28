import yup from 'yup';

const url = yup.object({
  body: yup.object({
    destination: yup.string().url().required().trim(),
    slug: yup.string().min(3).max(12).matches(/[\w-]/i).trim(),
  }),
});

const slug = yup.object({
  params: yup.object({
    slug: yup.string().trim().required(),
  }),
});

export default { url, slug };
