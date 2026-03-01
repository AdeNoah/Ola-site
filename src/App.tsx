import { useState, useEffect } from "react";
import { dommyImages } from "./images";

interface ImageItem {
  id: number;
  name: string;
  url: string;
}

function App() {

  const [images, setImages] = useState<ImageItem[]>([]); 

  useEffect(() => {
    setImages(dommyImages.images)
  }, [])

  return (
    <>
    <div className="flex justify-center">
      {images.length > 0 ?(
        <ul>
          {images.map((img) => (
            <li key={img.id}>
              <img src={img.url} alt={img.name} width="800" height="600" />
            </li>
          ))}
        </ul>
      ) : <h1>No images found</h1>}
    </div>

    </>
  )
}

export default App
