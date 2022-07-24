import main from "../../../database/connection";
import Product from "../../../database/models/product";

export default async function addProduct(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await main();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING PRODCUT");
    const product = await Product.create(req.body);
    console.log("CREATED PRODCUT");

    res.json({ product });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
