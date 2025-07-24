import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=10');
        console.log('Fetched images:', response.data);
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
        {images.map((image) => (
          <div key={image.id} style={{ marginBottom: '10px' }}>
            <img src={image.download_url} alt={image.author} style={{ width: '100%', height: 'auto' }} />
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600', color: 'black' }}>{image.author}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
