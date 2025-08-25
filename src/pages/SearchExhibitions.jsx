import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import search_icon from '../assets/search_icon.svg';
import { searchExhibitionsByTitle } from '../apis/exhibition';
import { GoBackButton } from '../components/GoBackButton';

export const SearchExhibitions = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [searchedQuery, setSearchedQuery] = useState(''); // 1. 검색된 검색어를 저장할 상태 추가

  const handleSearch = async () => {
    if (!query.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }
    setLoading(true);
    setSearched(true);
    setSearchedQuery(query); // 2. 검색 버튼 클릭 시, 현재 검색어를 searchedQuery에 저장
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
    <div className="w-full mt-[20px] px-5 flex flex-col items-center">
        <GoBackButton/>

      {/* --- 검색창 --- */}
      <div className="mt-8 relative w-full max-w-[350px]">
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
      <div className="w-full max-w-[350px] mt-4">
        {loading ? (
          <p className="text-center">검색 중...</p>
        ) : searched && results.length === 0 ? (
          <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
        ) : (
          <div className="flex flex-col">
            {/* 3. query 대신 searchedQuery를 사용하고 쌍따옴표로 변경 */}
            {searched && (
              <p className="text-grey07 font-[600] leading-1.5 pl-4">
                {`"${searchedQuery}" 검색 결과입니다`}
              </p>
            )}
            {results.map((exhibition) => (
              <div
                key={exhibition.exhibitionId}
                className="w-full flex flex-row gap-[15px] py-4 border-b border-grey06 cursor-pointer"
                onClick={() =>
                  navigate(`/exhibitionDetail/${exhibition.exhibitionId}`)
                }
              >
                <img
                  src={exhibition.posterImageUrl}
                  alt={exhibition.title}
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