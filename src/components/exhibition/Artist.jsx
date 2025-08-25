import { useNavigate } from 'react-router-dom';

const Artist = ({ id, name, profile }) => {
  const nav = useNavigate();

  const handleArtist = () => {
    nav('/userprofile');
  };
  return (
    <div
      className="flex flex-col items-center gap-[2px]"
      onClick={handleArtist}
    >
      <div className="w-[48px] h-[48px] rounded-[50px] bg-grey05">
        <img src={profile} alt="profile" />
      </div>
      <p className="font-semibold text-[14px]">{name}</p>
    </div>
  );
};

export default Artist;
