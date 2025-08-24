import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getMyExhibitions } from '../apis/addExhibition';
import posImg from '../assets/position.svg';
import calImg from '../assets/cal.svg';
import tagImg from '../assets/hashtag.svg';
import Tag from '../components/ai/Tag';

const BtnPrimary = ({ className = '', ...p }) => (
  <button
    {...p}
    className={`py-2.5 rounded-[10px] text-white text-[15px] bg-purple_main text-center flex w-[168px] h-[44px] justify-center items-center ${className}`}
  />
);
const BtnGhost = ({ className = '', ...p }) => (
  <button
    {...p}
    className={`px-12 py-2.5 rounded-[10px] bg-grey05 text-white text-[15px] justify-center items-center disabled:bg-gray-100 ${className}`}
  />
);

const ExhibitionDetailConfirm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ 2. 페이지에 도착했을 때 location.state에 exhibitionId가 있는지 확인하세요.
  console.log('➡️ 도착한 location.state:', location.state);

  const [myExhibition, setMyExhibition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const exhibitionId = location.state?.exhibitionId;

  useEffect(() => {
    const fetchMyExhibition = async () => {
      try {
        const data = await getMyExhibitions(exhibitionId);
        console.log('✅ 서버로부터 받은 실제 데이터:', data);

        if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
          setMyExhibition(data);
        } else {
          throw new Error('서버로부터 잘못된 형식의 응답을 받았습니다.');
        }
      } catch (err) {
        setError('데이터 로딩에 실패했습니다.');
        console.error(err);
      } finally {
        setLoading(false); // finally 블록으로 이동하여 항상 실행되도록 보장
      }
    };
    fetchMyExhibition();
  }, [exhibitionId]);

  const saveButton = () => {
    navigate('/mypage');
  };

  if (loading)
    return <div className="p-4 text-center">전시 정보를 불러오는 중...</div>;
  if (error)
    return <div className="p-4 text-center text-red-600">오류: {error}</div>;
  if (!myExhibition)
    return <div className="p-4 text-center">전시 정보가 없습니다.</div>;

  // ✅ 수정: myExhibition의 모든 속성에 ?. 를 추가하여 안전하게 접근
  return (
    <div className="mx-auto w-full max-w-[450px]">
      <div className="flex flex-col mt-[31px] ml-[21px]">
        <p className="text-[14px] text-darkgrey01 leading-1.5">
          전시 상세 페이지를 확인하고 등록하세요.
        </p>
      </div>

      <div className="mx-[20px] h-[402px] border-b border-grey05">
        <div className="w-[276px] h-[390px] mx-auto mt-[12px]">
          <img
            src={myExhibition?.posterImage}
            alt="poster"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col mx-[20px]">
        <div className="flex flex-col mt-[16px]">
          <h1 className="font-bold text-[24px]">{myExhibition?.title}</h1>
          <div className="flex mt-[16px] gap-[16px]">
            {myExhibition.artists?.map((artist) => (
              <div
                key={artist.userId}
                className="flex flex-col items-center gap-[2px]"
              >
                <div className="w-[48px] h-[48px] rounded-full bg-grey05 overflow-hidden">
                  <img
                    src={artist.profileImageUrl}
                    alt={artist.nickname}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-[14px]">{artist.nickname}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[12px] mx-[20px] gap-[4px]">
        <div className="flex flex-row items-center">
          <img src={posImg} alt="position" className="mr-[4px]" />
          <p className="font-semibold text-[14px] text-darkgrey01">
            {myExhibition?.location}
          </p>
        </div>
        <div className="flex flex-row items-center">
          <img src={calImg} alt="calendar" className="mr-[4px]" />
          <p className="font-semibold text-[14px] text-darkgrey01">
            {myExhibition?.startDate} ~ {myExhibition?.endDate}
          </p>

          {myExhibition.ongoing === true ? (
            <div className="flex flex-row mx-[12px] gap-[12px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#007CFF] flex shrink-0" />
              <p className="text-[13px] font-[600] leading-1.5 text-[#007CFF]">
                전시중
              </p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      {/* 구분선 */}
      <div className="flex w-full items-center mt-[12px] justify-center">
        <div className="w-[350px] h-[1px] bg-grey05"></div>
      </div>

      <div className="flex flex-col mx-[20px] py-[20px] border-y-grey05">
        <p className="w-full font-semibold text-[14px] whitespace-pre-wrap">
          {myExhibition?.description}
        </p>
      </div>

      {/* 구분선 */}
      <div className="flex w-full items-center mt-[12px] justify-center">
        <div className="w-[350px] h-[1px] bg-grey05"></div>
      </div>

      <div className="flex flex-nowrap mt-[20px] mx-[20px] gap-[16px] overflow-x-auto scroll scrollbar-hide">
        {myExhibition.artworkUrl?.map((imgUrl, index) => (
          <div
            key={index}
            className="w-[88px] h-[88px] rounded-[5px] overflow-hidden shrink-0"
          >
            <img
              src={imgUrl}
              alt={`artwork-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* 구분선 */}
      <div className="flex w-full items-center mt-[20px] justify-center">
        <div className="w-[350px] h-[1px] bg-grey05"></div>
      </div>

      <div className="flex flex-col mt-[20px] mx-[20px] py-[20px] border-y-grey05">
        <div className="flex flex-row gap-[5px] items-center">
          <img src={tagImg} alt="hashtag" />
          <h1 className="font-semibold text-[16px]">AI 분석 해시태그</h1>
        </div>
        <div className="flex flex-wrap gap-[12px] w-[350px] mt-[16px]">
          {myExhibition.tags?.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 my-3.5 gap-3.5">
        <BtnGhost className="w-[168px] h-[48px] text-[15px]">수정하기</BtnGhost>
        <BtnPrimary
          className="w-[168px] h-[48px] text-[15px]"
          onClick={saveButton}
        >
          이대로 등록하기
        </BtnPrimary>
      </div>
    </div>
  );
};

export default ExhibitionDetailConfirm;
