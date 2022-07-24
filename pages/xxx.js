export default function Home() {
  const addProduct = async () => {
    const randomNum = Math.floor(Math.random() * 1000);

    const preset = {
      product_name: `Product ${randomNum}`,
      product_price: randomNum,
      product_catagory: 'Mobile',
      product_photos: [randomNum, randomNum, randomNum],
      product_options: [randomNum, randomNum, randomNum],
      product_introduce: `Introduce ${randomNum}`,
      product_information: [randomNum, randomNum, randomNum],

      
    }
    const res = await fetch("/api/add/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preset),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <button onClick={addProduct}>Create Test</button>
    </div>
  );
}
