import cameraImg from "../../assets/camera.png";
import { useState } from "react";

const UploadBox = ({ index, onImageChange }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageSrc(URL.createObjectURL(file));
    onImageChange(index, file);
  };

  // 각 컴포넌트마다 고유한 ID를 생성합니다.
  const inputId = `file-upload-${index}`;

  return (
    // div 대신 label을 최상위 요소로 사용하거나, div 내부에 label을 배치합니다.
    <label
      htmlFor={inputId}
      className="relative cursor-pointer w-[100px] h-[100px] bg-lightpurple02 rounded-[10px] flex justify-center items-center"
    >
      {/* 1. input에 고유한 id를 부여하고, 화면에서 완전히 숨깁니다. */}
      <input
        id={inputId}
        type="file"
        accept="image/*"
        className="hidden" // opacity-0 대신 hidden으로 완전히 숨깁니다.
        onChange={handleFileChange}
      />

      {/* 2. 이미지를 표시하는 부분을 label의 자식으로 둡니다. */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="preview"
          className="w-full h-full object-cover rounded-[10px]"
        />
      ) : (
        <img
          src={cameraImg}
          alt="add file"
          className="w-10 h-10"
        />
      )}
    </label>
  );
};

export default UploadBox;