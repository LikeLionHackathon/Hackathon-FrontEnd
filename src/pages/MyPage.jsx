import profileCard from '../assets/Profile_card.svg';
import Poster_01 from '../assets/poster_01.svg';
import button_addexhibition from '../assets/button_addexhibition.svg';

export const MyPage = () => {
  
  const handleAddExhibition = () => {
    
  }

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
            <p className='text-[12px] font-light text-darkgrey01 mt-[108px]'>아직 등록된 전시가 없어요</p>
            <button 
            className='w-[104px] h-[104px] mt-[18px] flex justify-center shrink-0 items-center cursor-pointer'
            onClick={handleAddExhibition}
            >
              <img src={button_addexhibition} alt="" className='cursor-pointer'/>
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
      <div className="w-screen h-[8px] bg-grey04 mt-4 mb-[12px]" />
    </div>
  );
};
