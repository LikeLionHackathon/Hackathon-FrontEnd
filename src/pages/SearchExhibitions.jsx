import search_icon from '../assets/search_icon.svg';

export const SearchExhibitions = () => {
  return (
    <div className="w-full mt-[14px] px-5">
      <div className="relative w-full max-w-[350px]">
        <input
          type="text"
          placeholder="전시 제목을 검색하세요."
          className="w-full h-[44px] rounded-[22px] border border-grey08 p-3 pr-10"
        />
        <button
          type="button"
          aria-label="검색"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
        >
          <img src={search_icon} alt="" className="w-[30px]" />
        </button>
      </div>
    </div>
  );
};