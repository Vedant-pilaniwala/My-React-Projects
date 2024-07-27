import { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  const handleOnTerm = (searchImage) => {
    setTerm(searchImage);
  }

  const REACT_APP_PIXABY_API_KEY = '45131055-886800f3628979d50ef34c69a';

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${REACT_APP_PIXABY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      {isLoading ? <h1 className="text-center mt-32 text-7xl font-bold mx-auto">Loading...</h1>
        :
        <div className='mx-auto'>
          <ImageSearch className='mx-auto' onTerm={handleOnTerm} />
          {images.length === 0 && <h1 className="text-center mt-32 text-7xl font-bold mx-auto">No Images Found...</h1>}
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => {
              return (
                <ImageCard key={index} image={image} />
              );
            })}
          </div>
        </div>}
    </div>
  );
}

export default App
