import profileCard from '../assets/Profile_card.svg';
import Poster_01 from '../assets/poster_01.svg';
import button_addexhibition from '../assets/button_addexhibition.svg';
import AddExhibitionModal from '../components/exhibition/AddExhibitionModal';
import { useState } from 'react';
import ellipsis from '../assets/Ellipse.svg';
import Tag from '../components/ai/Tag';

export const MyPage = () => {
  const [openAdd, setOpenAdd] = useState(false);

  const handleAddExhibition = () => {
    setOpenAdd(true);
  };

  return (
    <div>
      <div className="flex mt-[12px] justify-center text-[16px] font-semibold text-center leading-[150%]">
        마이페이지
      </div>

      {/* 상단 마이페이지, 프로필카드, 나의 전시 */}
      <div className="flex flex-row items-center gap-2.5 justify-center">
        <img src={profileCard} alt="프로필카드" />
        <div className="flex  w-[1px] h-[320px] bg-grey05 justify-center" />
        <div className="flex flex-col items-center gap-1.5 h-[340px]">
          <p className="text-darkgrey01 font-14px leading-[150%]">나의 전시</p>
          <div className="w-[168px] h-[300px] shrink-0 border-lightpurple01 border-[1px] rounded-[15px] flex flex-col items-center">
            <p className="text-[12px] font-light text-darkgrey01 mt-[108px]">
              아직 등록된 전시가 없어요
            </p>
            <button
              className="w-[104px] h-[104px] mt-[18px] flex justify-center shrink-0 items-center cursor-pointer"
              onClick={handleAddExhibition}
            >
              <img
                src={button_addexhibition}
                alt=""
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-screen h-[8px] bg-grey04 mt-[24px] mb-[12px]" />

      <div className="px-5">
        <p className="text-[20px] font-bold leading-[125%] not-italic">
          방문한 Glow 전시
        </p>
      </div>

      <div
        className="[filter:drop-shadow(0_0_16px_rgba(0,0,0,0.20))] w-full grid grid-flow-col auto-cols-[200px] gap-4
                overflow-x-auto overflow-y-hidden snap-x snap-mandatory
                [-webkit-overflow-scrolling:touch]
                [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                px-[calc((100%-200px)/2)]"
      >
        <div
          className="w-[200px] h-[356px] bg-white flex flex-col items-start mt-3
        [clip-path:polygon(0_0,100%_0,100%_76%,calc(100%_-_20px)_79%,100%_82%,100%_100%,0_100%,0_82%,20px_79%,0_76%)]"
        >
          <img
            src={Poster_01}
            alt="포스터1"
            className="w-[184px] h-[256px] self-center mt-2"
          />
          <p className="text-[12px] text-darkgrey03 mt-2.5 self-center">
            2025.07.12
          </p>

          <p className="ml-3 mt-2.5 text-[16px] font-semibold leading-[150%]">
            전시명
          </p>
          <div className="flex flex-row gap-2 mt-0.5 ml-3 text-[14px] font-medium leading-[150%] text-darkgrey03">
            {' '}
            <p>작가명</p>
            <p>작가명</p>
          </div>
        </div>

        <div
          className="w-[200px] h-[356px] bg-white flex flex-col items-start mt-3
        [clip-path:polygon(0_0,100%_0,100%_76%,calc(100%_-_20px)_79%,100%_82%,100%_100%,0_100%,0_82%,20px_79%,0_76%)]"
        >
          <img
            src={Poster_01}
            alt="포스터1"
            className="w-[184px] h-[256px] self-center mt-2"
          />
          <p className="text-[12px] text-darkgrey03 mt-2.5 self-center">
            2025.07.12
          </p>

          <p className="ml-3 mt-2.5 text-[16px] font-semibold leading-[150%]">
            전시명
          </p>
          <div className="flex flex-row gap-2 mt-0.5 ml-3 text-[14px] font-medium leading-[150%] text-darkgrey03">
            {' '}
            <p>작가명</p>
            <p>작가명</p>
          </div>
        </div>

        <div
          className="w-[200px] h-[356px] bg-white flex flex-col items-start mt-3
        [clip-path:polygon(0_0,100%_0,100%_76%,calc(100%_-_20px)_79%,100%_82%,100%_100%,0_100%,0_82%,20px_79%,0_76%)]"
        >
          <img
            src={Poster_01}
            alt="포스터1"
            className="w-[184px] h-[256px] self-center mt-2"
          />
          <p className="text-[12px] text-darkgrey03 mt-2.5 self-center">
            2025.07.12
          </p>

          <p className="ml-3 mt-2.5 text-[16px] font-semibold leading-[150%]">
            전시명
          </p>
          <div className="flex flex-row gap-2 mt-0.5 ml-3 text-[14px] font-medium leading-[150%] text-darkgrey03">
            {' '}
            <p>작가명</p>
            <p>작가명</p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-screen h-[8px] bg-grey04 mt-7 mb-[12px]" />

      <div className="flex flex-col px-5">
        <div className='flex text-[20px] font-semibold'>좋아요한 GLOW 작가</div>
        <div className="flex flex-row gap-4 mx- w-full mt-4">
          <div className="flex flex-col items-center w-[48px] h-[48px]">
            <img src={ellipsis} alt="" />
            <p className="text-[14px] font-[600] leading-1.5 mt-1.5">박서영</p>
          </div>
          <div className="flex flex-col items-center w-[48px] h-[48px]">
            <img src={ellipsis} alt="" />
            <p className="text-[14px] font-[600] leading-1.5 mt-1.5">박서영</p>
          </div>
          <div className="flex flex-col items-center w-[48px] h-[48px]">
            <img src={ellipsis} alt="" />
            <p className="text-[14px] font-[600] leading-1.5 mt-1.5">박서영</p>
          </div>
          <div className="flex flex-col items-center w-[48px] h-[48px]">
            <img src={ellipsis} alt="" />
            <p className="text-[14px] font-[600] leading-1.5 mt-1.5">박서영</p>
          </div>
          <div className="flex flex-col items-center w-[48px] h-[48px]">
            <img src={ellipsis} alt="" />
            <p className="text-[14px] font-[600] leading-1.5 mt-1.5">박서영</p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-screen h-[8px] bg-grey04 mt-8 mb-[12px]" />

      <div className='flex flex-col px-5'>
        <div className='flex justify-between '>
          <p className='text-[20px] font-semibold leading-1.25 mt-6'>가보고 싶어요 한 전시</p>
          <p className='text-[16px] font-semibold font:pretendard leading-1.25 mt-6'>전체보기</p>
          </div>
      </div>
      <div

                    className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory mt-4 items-center
              px-5 [-webkit-overflow-scrolling:touch]
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
                  >
                    <img
                      src={Poster_01}
                      alt="poster1"
                      className="w-[124px] h-[180px] shrink-0 snap-center rounded object-contain"
                    />
                    <img
                      src={Poster_01}
                      alt="poster1"
                      className="w-[124px] h-[180px] shrink-0 snap-center rounded object-contain"
                    />
                    <img
                      src={Poster_01}
                      alt="poster1"
                      className="w-[124px] h-[180px] shrink-0 snap-center rounded object-contain"
                    />
                  </div>

      {/* 구분선 */}
      <div className="w-screen h-[8px] bg-grey04 mt-6" />

      <div className="flex flex-col mt-[10px] mx-[20px] py-[20px]">
        <div className="flex flex-row gap-[5px] items-center">
          <h1 className="font-semibold text-[20px]">선호하는 키워드</h1>
        </div>
        <div className="flex flex-wrap gap-[12px] w-[350px] mt-[20px]">
          <Tag text={'실험적'} id={1} />
          <Tag text={'몽환적인'} id={2} />
          <Tag text={'관객 참여형'} id={3} />
          <Tag text={'웅장한'} id={4} />
          <Tag text={'인터렉티브'} id={5} />
          <Tag text={'친구들과 함께'} id={6} />
        </div>
      </div>
      <AddExhibitionModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSubmit={(data) => {
          console.log('전시 등록 데이터:', data);
          // TODO: API 연결해서 저장
        }}
      />
    </div>
  );
};
