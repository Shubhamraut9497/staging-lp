export default async function handler(req, res) {
    try {
      const accessToken = "Hjc4p5RuiTn1P3cB9IZEuW1dNhV_ZWsS";
      const response = await fetch(`https://app.shootorder.com/items/lander/13?fields=favicon,seo_title,seo_meta_description&access_token=${accessToken}`);
      
      const {data }= await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }