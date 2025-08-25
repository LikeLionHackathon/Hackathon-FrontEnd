import { useNavigate } from 'react-router-dom';
import goBackIcon from '../assets/goBackIcon.svg';

export const GoBackButton = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute left-[20px] top-[14px] w-[8px] h-[15px]">
      <button onClick={onClick || (() => navigate(-1))}>
        <img src={goBackIcon} alt="뒤로가기" />
      </button>
    </div>
  );
};
