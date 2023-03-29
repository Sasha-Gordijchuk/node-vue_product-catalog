import { Phone } from '../models/Phone.js';

export const getAll = async (req, res) => {
  const result = await Phone.findAll();

  res.send(result);
};
