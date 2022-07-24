import main from '../../../database/connection'
import Test from '../../../database/schema'



 export default async function addTest(req, res) {
    try {
      console.log('CONNECTING TO MONGO');
      await main();
      console.log('CONNECTED TO MONGO');
  
      console.log('CREATING DOCUMENT');
      const test = await Test.create(req.body);
      console.log('CREATED DOCUMENT');
  
      res.json({ test });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }