import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import search_icon from '../assets/search_icon.svg';
import { searchExhibitionsByTitle } from '../apis/exhibition';

export const SearchExhibitions = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }
    setLoading(true);
    setSearched(true);
    try {
      const data = await searchExhibitionsByTitle(query);
      setResults(data);
    } catch (error) {
      console.error('검색 실패:', error);
      alert('검색 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full mt-[14px] px-5 flex flex-col items-center">
      {/* --- 검색창 --- */}
      <div className="relative w-full max-w-[350px]">
        <input
          type="text"
          placeholder="전시 제목을 검색하세요."
          className="w-full h-[44px] rounded-[22px] border border-grey08 p-5 pr-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          aria-label="검색"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
          onClick={handleSearch}
          disabled={loading}
        >
          <img src={search_icon} alt="" className="w-[30px]" />
        </button>
      </div>

      {/* --- 검색 결과 --- */}
      <div className="w-full max-w-[350px] mt-8">
        {loading ? (
          <p className="text-center">검색 중...</p>
        ) : searched && results.length === 0 ? (
          <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
        ) : (
          <div className="flex flex-col">
            {results.map((exhibition) => (
              <div
                key={exhibition.exhibitionId}
                // UserProfile의 레이아웃과 스타일을 적용
                className="w-full flex flex-row gap-[15px] py-4 border-b border-grey06 cursor-pointer"
                onClick={() => navigate(`/exhibitionDetail/${exhibition.exhibitionId}`)}
              >
                <img
                  src={exhibition.posterImageUrl}
                  alt={exhibition.title}
                  // UserProfile의 이미지 스타일 적용
                  className="w-[92px] h-[120px] object-cover rounded"
                />
                <div className="flex flex-col flex-1 justify-center">
                  <p className="text-[16px] font-[600] leading-1.5">
                    {exhibition.title}
                  </p>
                  <p className="text-[14px] text-darkgrey03 font-[500] leading-[21px] mt-2">
                    {exhibition.startDate} <br />- {exhibition.endDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};