import posterImg from '../assets/poster.svg';
import posImg from '../assets/position.svg';
import calImg from '../assets/cal.svg';
import ex1Img from '../assets/ex01.svg';
import ex2Img from '../assets/ex02.svg';
import ex3Img from '../assets/ex03.svg';
import tagImg from '../assets/hashtag.svg';
import Tag from '../components/ai/Tag';
import { useNavigate } from 'react-router-dom';

const ExhibitionDetailConfirm = () => {

    const navigate = useNavigate();

  /* 공통 버튼 */
  const BtnPrimary = ({ className = '', ...p }) => (
    <button
      {...p}
      className={` py-2.5 rounded-[10px] text-white text-[15px]
  bg-purple_main text-center flex w-[168px] h-[44px] justify-center items-center ${className}`}
    />
  );

  const BtnGhost = ({ className = '', ...p }) => (
    <button
      {...p}
      className={`px-12 py-2.5 rounded-[10px] bg-grey05 text-white text-[15px] justify-center items-center
  disabled:bg-gray-100 disabled:text-gray-400 ${className}`}
    />
  );

  /* 저장 및 이동 */
  const saveButton = () => {
    navigate('/mypage');
  }

  return (
    <div className="mx-auto w-full max-w-[450px]">
      <div className="flex flex-col mt-[31px] ml-[21px]">
        <div className="flex gap-[5px]">
          <p className="text-[14px] text-darkgrey01 leading-1.5">
            전시 상세 페이지를 확인하고 등록하세요.
          </p>
        </div>
      </div>

      <div className="mx-[20px] h-[402px] border border-b-grey05 border-t-0 border-x-0">
        <div className="w-[276px] h-[390px] mx-auto mt-[12px]">
          <img src={posterImg} alt="poster" className="w-full h-full" />
        </div>
      </div>

      <div className="flex flex-col mx-[20px]">
        <div className="flex flex-col mt-[16px]">
          <h1 className="font-bold text-[24px]">변화의 이상</h1>
          <div className="flex mt-[16px] gap-[16px]">
            <div className="flex flex-col items-center gap-[2px]">
              <div className="w-[48px] h-[48px] rounded-[50px] bg-grey05"></div>
              <p className="font-semibold text-[14px]">박서영</p>
            </div>

            <div className="flex flex-col items-center gap-[2px]">
              <div className="w-[48px] h-[48px] rounded-[50px] bg-grey05"></div>
              <p className="font-semibold text-[14px]">박서영</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[12px] mx-[20px] gap-[4px]">
        <div className="flex flex-row gap-[12px]">
          <div className="flex flex-row">
            <img src={posImg} alt="position" className="mr-[4px]" />
            <p className="font-semibold text-[14px] text-darkgrey01">
              마포구 와우산로 25
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-[12px]">
          <div className="flex flex-row">
            <img src={calImg} alt="position" className="mr-[4px]" />
            <p className="font-semibold text-[14px] text-darkgrey01">
              2025-08-01 ~ 2025-08-12
            </p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="w-[6px] h-[6px] rounded-[50px] bg-[#007CFF] mr-[12px]"></div>
            <p className="text-[#007CFF] font-semibold text-[13px]">전시중</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[12px] mx-[20px] py-[20px] border border-y-grey05 border-x-0">
        <p className="w-[338px] font-semibold text-[14px]">
          자연과 인간들의 소통방식에 대한 인터렉티브 전시로,자연과 인간들의
          소통방식에 대한 인터렉티브 전시이다.
        </p>
      </div>

      <div className="flex flex-row mt-[20px] mx-[20px] gap-[16px]">
        <div className="w-[88px] h-[88px] rounded-[5px]">
          <img src={ex1Img} alt="pic" className="w-full" />
        </div>
        <div className="w-[88px] h-[88px] rounded-[5px]">
          <img src={ex2Img} alt="pic" className="mx-h-full" />
        </div>
        <div className="w-[88px] h-[88px] rounded-[5px]">
          <img src={ex3Img} alt="pic" />
        </div>
      </div>

      <div className="flex flex-col mt-[20px] mx-[20px] py-[20px] border border-y-grey05 border-x-0">
        <div className="flex flex-row gap-[5px] items-center">
          <img src={tagImg} alt="hashtag" />
          <h1 className="font-semibold text-[16px]">AI 분석 해시태그</h1>
        </div>
        <div className="flex flex-wrap gap-[12px] w-[350px] mt-[16px]">
          <Tag text={'실험적'} id={1} />
          <Tag text={'몽환적인'} id={2} />
          <Tag text={'관객 참여형'} id={3} />
          <Tag text={'웅장한'} id={4} />
          <Tag text={'인터렉티브'} id={5} />
          <Tag text={'친구들과 함께'} id={6} />
        </div>
      </div>

      <div className='flex justify-center mt-4 my-3.5 gap-3.5'>
          <BtnGhost className='w-[168px] h-[48px] text-[15px]'>수정하기</BtnGhost>
          <BtnPrimary className='w-[168px] h-[48px] text-[15px]' 
          onClick = {saveButton}>이대로 등록하기</BtnPrimary>
      </div>
    </div>
  );
};

export default ExhibitionDetailConfirm;
