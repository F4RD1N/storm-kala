export default async function handler(req, res) {
  const url = req.url.slice(4).replace('?','/?')
  const response = await fetch(`https://api.digikala.com/v1/${url}`)
  const data = await response.json()
  res.status(200).json(data);
  console.log(url)
}
