import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import search_icon from '../assets/search_icon.svg';
import { searchExhibitionsByTitle } from '../apis/exhibition'; // 1단계에서 만든 함수 import

export const SearchExhibitions = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(''); // 검색어 상태
  const [results, setResults] = useState([]); // 검색 결과 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [searched, setSearched] = useState(false); // 검색을 한 번이라도 했는지 여부

  // 검색 실행 함수
  const handleSearch = async () => {
    if (!query.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }
    setLoading(true);
    setSearched(true); // 검색 버튼을 눌렀음을 표시
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

  // Enter 키를 눌렀을 때 검색 실행
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
          className="w-full h-[44px] rounded-[22px] border border-grey08 p-3 pr-10"
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
          <div className="grid grid-cols-2 gap-4">
            {results.map((exhibition) => (
              <div
                key={exhibition.exhibitionId}
                className="cursor-pointer"
                onClick={() =>
                  navigate(`/exhibitionDetail/${exhibition.exhibitionId}`)
                }
              >
                <div className="px-5">
                  <div className="w-full flex flex-row gap-[15px] h-[136px] mt-[8px]">
                    <img
                      src={exhibition.posterImageUrl}
                      alt={exhibition.title}
                      className="w-full h-[220px] object-cover rounded-lg mb-2"
                    />
                    <h3 className="font-semibold truncate">
                      {exhibition.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {exhibition.startDate} ~ {exhibition.endDate}
                    </p>
                    <div className="w-full h-[1px] bg-grey06 mt-[34px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
