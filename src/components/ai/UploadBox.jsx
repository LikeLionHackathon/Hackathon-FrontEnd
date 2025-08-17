import cameraImg from "../../assets/camera.svg"
import { useState } from "react";

const UploadBox = ({index}) => {
    const [images, setImages] = useState(Array(3).fill(null));
    
    const handleFileChange = (e, index) => {
        const file = e.target.files[0];
        if (!file) return;

        const newImages = [...images];
        newImages[index] = URL.createObjectURL(file);
        setImages(newImages);
    };

    return (
        <div className="relative cursor-pointer w-[100px] h-[100px] bg-lightpurple02 rounded-[10px]">
            <input 
                type="file" 
                accept="image/*"
                className="w-[100px] h-[100px] opacity-0"
                onChange={(e) => handleFileChange(e, index)}
            />
            {images[index] ? (
                <img 
                    src={images[index]}
                    alt="preview"
                    className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[10px]"
                />
            ) : (
                <img 
                    src={cameraImg} 
                    alt="add file" 
                    className="absolute top-1/2 left-1/2 w-10 h-10 transform -translate-x-1/2 -translate-y-1/2"
                />
            )}
        </div>
    )
}

export default UploadBox;