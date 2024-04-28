import { Flex } from '@chakra-ui/react';
import './App.css';
import InputCanvas from './components/InputCanvas';
import { Canvas } from './components/Canvas';
import { useState } from 'react';

const data = {
  caption: {
    "text": "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
    "position": {
      "x": 50,
      "y": 50
    },
    "max_characters_per_line": 31,
    "font_size": 44,
    "alignment": "left",
    "text_color": "#FFFFFF"
  },
  "cta": {
    "text": "Shop Now",
    "position": {
      "x": 190,
      "y": 320
    },
    "text_color": "#FFFFFF",
    "background_color": "#000000"
  },
  "image_mask": {
    "x": 56,
    "y": 442,
    "width": 970,
    "height": 600
  },
  "urls": {
    "mask": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png",
    "stroke": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png",
    "design_pattern": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png"
  }
}

function App() {
  const [selectedImage, setSelectedImage] = useState(data.urls.mask);
  const [content, setContent] = useState(data.caption.text);
  const [cta, setCta] = useState(data.cta.text);
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("#bc3433");

  const addColor = () => {
    if (colors.length < 5) {
      setColors([...colors, selectedColor]);
    }
  };

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value)
  };

  const handleCtaChange = (e) => {
    setCta(e.target.value);
  };

  return (
    <Flex gap={"50px"}>
      <Canvas selectedImage={selectedImage} content={content} cta={cta} selectedColor={selectedColor} />
      <InputCanvas
        handleImageUpload={handleImageUpload}
        handleContentChange={handleContentChange}
        handleCtaChange={handleCtaChange}
        addColor={addColor}
        colors={colors}
        content={content}
        handleColorChange={handleColorChange}
        selectedColor={selectedColor}
      />
    </Flex>
  );
}

export default App;
