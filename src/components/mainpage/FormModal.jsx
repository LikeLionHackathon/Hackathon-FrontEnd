import { useEffect } from 'react';

const FormModal = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `auto`;
    }
    return () => (document.body.style = `overflow: auto`);
  }, [open]);

  if (!open) return null;

  const handleSubmit = () => {
    alert('폼이 제출되었습니다.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-[10px] flex items-center justify-center">
      <div className="w-[348px] h-[600px] shrink-0 rounded-[15px] bg-white px-[14px] shadow-xl flex flex-col relative items-center justify-center gap-[26px]">
        <div className="w-full flex flex-col">
          <h1 className="font-semibold text-[15px] pl-[4px] mb-[20px]">
            전시의 제목이 무엇인가요?
          </h1>
          <input
            type="text"
            placeholder="전시명을 입력하세요."
            className="w-full h-[24px] px-[6px] font-semibold text-[16px] text-black placeholder:text-darkgrey01 outline-none"
          />
          <hr className="w-full mt-[8px] border border-grey04" />
        </div>

        <div>
        <p className="text-[15px] font-semibold">
          언제 전시를 진행하나요?
        </p>
        <div className="flex items-center border-b border-grey05">
          <input
            type="text"
            inputMode="numeric"
            placeholder="YYYY/MM/DD"
            className="pb-1.5 w-full text-[16px] bg-transparent text-center placeholder:text-darkgrey01 border-0 focus:outline-none focus:ring-0"
          />
          <span className="px-2 text-darkgrey01">-</span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="YYYY/MM/DD"
            className="pb-1.5 w-full text-[16px] bg-transparent text-center placeholder:text-darkgrey01 border-0 focus:outline-none focus:ring-0"
          />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h1 className="font-semibold text-[15px] pl-[4px] mb-[20px]">
            어디서 전시하나요?
          </h1>
          <input
            type="text"
            placeholder="전시장의 이름 또는 주소를 입력하세요."
            className="w-full h-[24px] px-[6px] font-semibold text-[16px] text-black placeholder:text-darkgrey01 outline-none"
          />
          <hr className="w-full mt-[8px] border border-grey04" />
        </div>

        <div className="w-full flex flex-col mt-[20px]">
          <textarea
            name="info"
            id=""
            placeholder="간단하게 전시 소개와 또는 지원 메세지를 입력해주세요."
            className="w-full h-[126px] px-[10px] pt-[9px] border border-grey04 rounded-[5px] outline-none"
          ></textarea>
        </div>

        <div className="flex flex-row w-full justify-between">
          <button
            className="w-[152px] h-[44px] rounded-[5px] bg-grey05 text-white cursor-pointer"
            onClick={onClose}
          >
            등록 취소
          </button>

          <button
            className="w-[152px] h-[44px] rounded-[5px] bg-purple_main text-white cursor-pointer"
            onClick={handleSubmit}
          >
            신청하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
