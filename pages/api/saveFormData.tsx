import { NextApiRequest, NextApiResponse } from 'next';
import mongoose, { ConnectOptions } from 'mongoose';

interface FormData {
  name: string;
  whatsappNumber: string;
  businessNature: string;
  marketingBudget: string;
}

const saveFormData = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }
  console.log('heck');

  try {
    // Connect to MongoDB (Make sure you have MongoDB connection setup)
    const options: ConnectOptions = {};

    await mongoose.connect('mongodb+srv://admin:Root007@grand.bszjrfs.mongodb.net/?retryWrites=true&w=majority', options);
    console.log('Connected to MongoDB');
    console.log('heck');

    // Create a Mongoose schema (replace 'YourSchema' with your actual schema name)
    const YourSchema = new mongoose.Schema({
      name: String,
      whatsappNumber: String,
      businessNature: String,
      marketingBudget: String,
    });

    // Create a new Mongoose model using the schema
    const YourModel = mongoose.model('YourModel', YourSchema);

    // Create a new document using the submitted form data
    const formData: FormData = req.body;
    await YourModel.create(formData);

    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default saveFormData;
