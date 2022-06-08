import * as yup from 'yup';

export const schemaOfMovie =  yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  cover: yup.string().required()
});

