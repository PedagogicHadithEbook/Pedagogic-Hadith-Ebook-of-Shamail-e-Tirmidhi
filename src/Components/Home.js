import React, { useEffect, useState } from 'react';
import Hadith from './Background.JPG';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageWidth = windowWidth; // Adjust the value as per your requirement

  return (
    <div style={styles.container}>
      <img
        src={Hadith}
        alt=""
        style={{
          ...styles.image,
          width: imageWidth*1.155,
          height: imageWidth * 0.41, // Adjust the aspect ratio as per your image
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#959ca3',
  },
  image: {
    marginTop: -17,
    marginBottom: -17,
    marginLeft: -227,  
  },
};
