// // components/AddExhibitionModal.jsx
// import { useEffect, useMemo, useRef, useState } from 'react';
// import Modal from './Modal';
// import button_photo from '../../assets/button_photo.svg';
// import { useNavigate } from 'react-router-dom';

// /* 공통 버튼 */
// const BtnPrimary = ({ className = '', ...p }) => (
//   <button
//     {...p}
//     className={`px-15 py-2.5 rounded-[10px] text-white
//   bg-purple_main disabled:bg-gray-300 disabled:text-white/70 text-center flex w-[152px] h-[44px] items-center ${className}`}
//   />
// );
// const BtnGhost = ({ className = '', ...p }) => (
//   <button
//     {...p}
//     className={`px-12 py-2.5 rounded-[10px] bg-grey05 text-white
//   disabled:bg-gray-100  ${className}`}
//   />
// );

// const handleInvite = () => {
//   <div className='w-full flex items-center mt-10'>
//     <input type="text" placeholder='작가 이름/아이디를 검색하세요' className='flex shrink-0 w-[300px] h-[48px] border border-solid rounded-[10px]'/>
//   </div>

// }

// /* ── Step 1: 기본 정보 ───────────────────────────────────────── */
// function StepBasic({ data, update, errors }) {
//   return (
//     <div className="pb-[90px]">
//       <div>
//         <p className="mt-15 text-[15px] leading-1.5 font-medium">
//           전시의 제목이 무엇인가요?
//         </p>
//         <input
//           className="mt-5 pb-1.5 w-full text-[16px] bg-transparent
//              placeholder:text-darkgrey01
//              rounded-none border-0 border-b border-grey05
//              focus:outline-none focus:ring-0"
//           placeholder="전시명을 입력하세요."
//           value={data.title || ''}
//           onChange={(e) => update({ title: e.target.value })}
//         />
//         {errors.title && (
//           <p className="mt-1 text-[12px] text-red-600">{errors.title}</p>
//         )}
//       </div>

//       <div className="mt-10">
//         <p className="text-[16px] font-semibold mt-3">
//           함께 참여하는 작가가 있나요?
//         </p>
//         <div className="mt-3 flex gap-3">
//           {Array.from({ length: 4 }).map((_, i) => (
//             <button
//               key={i}
//               type="button"
//               className="w-[54px] h-[54px] rounded-full bg-grey05 text-[12px] text-black hover:bg-gray-200"
//               onClick={() => {handleInvite}}
//             >
//               초대하기
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* <<< 날짜 입력 UI 수정 */}
//       <div>
//         <p className="text-[15px] font-semibold mt-10">
//           언제 전시를 진행하나요?
//         </p>
//         <div className="flex items-center mt-5 border-b border-grey05">
//           <input
//             type="text"
//             inputMode="numeric"
//             placeholder="YY/MM/DD"
//             className="pb-1.5 w-full text-[16px] bg-transparent text-center placeholder:text-darkgrey01 border-0 focus:outline-none focus:ring-0"
//             value={data.startDate || ''}
//             onChange={(e) => update({ startDate: e.target.value })}
//           />
//           <span className="px-2 text-darkgrey01">-</span>
//           <input
//             type="text"
//             inputMode="numeric"
//             placeholder="YY/MM/DD"
//             className="pb-1.5 w-full text-[16px] bg-transparent text-center placeholder:text-darkgrey01 border-0 focus:outline-none focus:ring-0"
//             value={data.endDate || ''}
//             onChange={(e) => update({ endDate: e.target.value })}
//           />
//         </div>
//         {errors.date && (
//           <p className="mt-1 text-xs text-red-600">{errors.date}</p>
//         )}
//       </div>

//       <div>
//         <p className="text-[15px] font-semibold mt-10">어디서 전시하나요?</p>
//         <input
//           className="mt-5 pb-1.5 w-full text-[16px] bg-transparent
//              placeholder:text-darkgrey01
//              rounded-none border-0 border-b border-grey05
//              focus:outline-none focus:ring-0 mb-8"
//           placeholder="전시장 이름 또는 주소를 입력하세요."
//           value={data.place || ''}
//           onChange={(e) => update({ place: e.target.value })}
//         />
//         {errors.place && (
//           <p className="mt-1 text-xs text-red-600">{errors.place}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// function SearchArtist({ onSelect }) {
//   // 검색어 상태 관리

//   return(
//     <div className='w-[300px] h-[48px] shrink-0 justify-center items-center flex self-center'>
//       <input
//         type="text"
//         className="w-full h-full mt-[40px] px-4 text-[16px] text-black bg-transparent border-[1px] border-solid rounded-[10px]"
//         placeholder='작가 이름/아이디를 검색하세요'
//         onChange={(e) => onSelect(e.target.value)}
//         />
//     </div>
//   )
// }
// // ... StepConcept, StepUpload, StepPending 컴포넌트는 변경 사항 없음 ...
// /* ── Step 2: 전시 기조/내용 ──────────────────────────────────── */
// function StepConcept({ data, update, errors }) {
//   const max = 300;
//   const len = (data.concept || '').length;

//   return (
//     <div className="pb-[90px]">
//       <p className="text-[16px] font-semibold mt-[100px]">
//         이번 전시는 무엇에 관한 전시인가요?
//       </p>
//       <div className="relative mt-2">
//         <textarea
//           rows={8}
//           className="w-full rounded-[5px] border border-gray-200 px-3 py-2 mt-4
//                      placeholder:text-darkgrey01 resize-none h-75"
//           placeholder="전시의 기조 또는 내용을 적어주세요."
//           value={data.concept || ''}
//           onChange={(e) => update({ concept: e.target.value.slice(0, max) })}
//         />
//         <span className="absolute bottom-3 right-3 text-[15px] text-darkgrey01">
//           {len}/{max}
//         </span>
//       </div>
//       {errors.concept && (
//         <p className="mt-1 text-xs text-red-600">{errors.concept}</p>
//       )}
//     </div>
//   );
// }

// /* ── Step 3: 이미지 업로드 ───────────────────────────────────── */
// function StepUpload({ data, update, scanning, setScanning }) {
//   const inputRef = useRef(null);

//   // 최신 이미지 배열 보존(순차 삽입용)
//   const images = data.images || [];
//   const imagesRef = useRef(images);
//   useEffect(() => {
//     imagesRef.current = images;
//   }, [images]);

//   // ✅ 스캔 박스 전용 미리보기 URL (썸네일과 분리!)
//   const previewUrlRef = useRef(null);

//   const MAX = 10;
//   const openPicker = () => {
//     if (!scanning) inputRef.current?.click();
//   };

//   const onFiles = (files) => {
//     const list = Array.from(files || []);
//     if (!list.length || scanning) return;

//     const remaining = MAX - imagesRef.current.length;
//     const picked = list.slice(0, Math.max(0, remaining));
//     if (!picked.length) return;

//     // 썸네일용 URL들(언마운트 때 정리)
//     const newItems = picked.map((f) => ({
//       file: f,
//       url: URL.createObjectURL(f),
//     }));

//     // 스캔 박스 전용 미리보기 URL
//     if (previewUrlRef.current) {
//       try {
//         URL.revokeObjectURL(previewUrlRef.current);
//       } catch {}
//     }
//     previewUrlRef.current = URL.createObjectURL(picked[0]);

//     setScanning(true);

//     // 실제 분석 완료 시점에 맞춰 실행(데모: 1.2s)
//     setTimeout(() => {
//       // 왼→오 순서로 한 장씩 채우기
//       let i = 0;
//       const addNext = () => {
//         const cur = imagesRef.current;
//         if (i >= newItems.length || cur.length >= MAX) {
//           // 종료: 업로드 박스 복귀 + 프리뷰 URL 해제
//           setScanning(false);
//           if (previewUrlRef.current) {
//             try {
//               URL.revokeObjectURL(previewUrlRef.current);
//             } catch {}
//             previewUrlRef.current = null;
//           }
//           return;
//         }
//         const next = [...cur, newItems[i]];
//         update({ images: next });
//         imagesRef.current = next;
//         i += 1;
//         if (i < newItems.length && next.length < MAX) {
//           setTimeout(addNext, 160);
//         } else {
//           setScanning(false);
//           if (previewUrlRef.current) {
//             try {
//               URL.revokeObjectURL(previewUrlRef.current);
//             } catch {}
//             previewUrlRef.current = null;
//           }
//         }
//       };
//       addNext();
//     }, 1200);
//   };

//   // 정리: 모달 닫힘/언마운트 시 blob URL들 해제
//   useEffect(() => {
//     return () => {
//       (imagesRef.current || []).forEach((img) => {
//         if (img?.url) {
//           try {
//             URL.revokeObjectURL(img.url);
//           } catch {}
//         }
//       });
//       if (previewUrlRef.current) {
//         try {
//           URL.revokeObjectURL(previewUrlRef.current);
//         } catch {}
//         previewUrlRef.current = null;
//       }
//     };
//   }, []);

//   // 썸네일 4칸 + 남은 개수
//   const thumbs = images.slice(0, 4);
//   const remain = Math.max(0, images.length - 4);

//   return (
//     <div className="relative pb-[90px]">
//       <p className="text-[15px] font-[600] leading-1.5 font-[#000] mt-15 mb-3">
//         전시 또는 작품 사진을 업로드해주세요.
//       </p>

//       {/* 레이아웃 안 밀리도록 절대배치 (표시는 scanning에 따라) */}
//       <p
//         className={`absolute left-1/2 -translate-x-1/2 mt-4 text-[15px] leading-1.5 font-[600] text-purple01 ${
//           scanning ? 'opacity-100' : 'opacity-0'
//         } pointer-events-none transition-opacity`}
//       >
//         스캔중이에요
//       </p>

//       {/* 숨김 파일 입력 */}
//       <input
//         ref={inputRef}
//         type="file"
//         multiple
//         accept="image/*"
//         className="hidden"
//         onChange={(e) => onFiles(e.target.files)}
//       />

//       {/* 268×268 업로드 박스 — 스캔중: 둥근 그라데이션 보더 + 프리뷰, 평소: 업로드 UI */}
//       <div
//         onClick={openPicker}
//         className={`relative mx-auto mt-12 shrink-0
//               w-[268px] h-[268px] rounded-[10px] grid place-items-center cursor-pointer
//               ${scanning ? 'border-[5px] border-transparent' : 'border-0 bg-[#F0F0FF]'}
//             `}
//         style={
//           scanning && previewUrlRef.current
//             ? {
//                 // 2중 배경: 1) 콘텐츠(프리뷰) padding-box, 2) 보더용 그라데이션 border-box
//                 background: `
//                   url(${previewUrlRef.current}) center / cover no-repeat padding-box,
//                   linear-gradient(135deg,
//                     var(--color-grad3-1, #7E37F9),
//                     var(--color-grad3-2, #DECBFF),
//                     var(--color-grad3-3, #4BB4FE)
//                   ) border-box
//                 `,
//               }
//             : undefined
//         }
//       >
//         {!scanning && (
//           <div className="grid place-items-center text-[#7B3EFF]">
//             <img src={button_photo} alt="upload" className="w-25 h-25" />
//           </div>
//         )}
//       </div>

//       {/* 썸네일 4칸 (폭 268 기준) */}
//       <div className="mt-[28px] grid grid-cols-4 gap-2 w-[268px] mx-auto">
//         {Array.from({ length: 4 }).map((_, i) => {
//           const img = thumbs[i];

//           if (!img) {
//             return (
//               <div
//                 key={i}
//                 className="aspect-square rounded-[5px] w-[66px] bg-grey01"
//               />
//             );
//           }

//           if (i === 3 && remain > 0) {
//             return (
//               <div
//                 key={i}
//                 className="relative aspect-square rounded-[5px] overflow-hidden"
//               >
//                 <img
//                   src={img.url}
//                   alt={`thumb-${i}`}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 grid place-items-center bg-black/50 text-white text-sm">
//                   +{remain}장
//                 </div>
//               </div>
//             );
//           }

//           return (
//             <img
//               key={i}
//               src={img.url}
//               alt={`thumb-${i}`}
//               className="aspect-square w-full h-full object-cover rounded-lg"
//             />
//           );
//         })}
//       </div>

//       <p className="mt-2 text-[12px] text-center text-gray-400">
//         전시 작품 사진을 업로드해주세요(최대 10장)
//       </p>
//     </div>
//   );
// }

// /* 스텝 4: 임시 안내 */
// function StepPending() {
//   return (
//     <div className="h-full flex flex-col items-center justify-center gap-6 pb-[90px]">
//       <div className="mt-10 w-[144px] h-[144px] rounded-[10px] bg-[#D9D9D9] grid place-items-center text-black">
//         그래픽
//       </div>
//       <p className="text-black text-[24px]">상세 페이지 제작중...</p>
//     </div>
//   );
// }


// /* ── 컨트롤러 ───────────────────────────────────────────────── */
// export default function AddExhibitionModal({ open, onClose, onSubmit }) {
//   const navigate = useNavigate();

//   const [step, setStep] = useState(0);
//   const [data, setData] = useState({ images: [] });
//   const [errors, setErrors] = useState({});
//   const [scanning, setScanning] = useState(false);

//   const steps = useMemo(
//     () => [
//       { label: '기본 정보', component: StepBasic },
//       { label: '작품/작가 검색', component: SearchArtist },
//       { label: '전시 기조/내용', component: StepConcept },
//       { label: '이미지 업로드', component: StepUpload },
//       { label: '안내', component: StepPending },
//     ],
//     []
//   );

//   const total = steps.length;
//   const Current = steps[step].component;

//   const update = (patch) => setData((prev) => ({ ...prev, ...patch }));

//   const validate = (idx) => {
//     const e = {};
//     if (idx === 0) {
//       if (!data.title?.trim()) e.title = '전시명을 입력해 주세요.';
//       // <<< 유효성 검사 로직 수정
//       if (!data.startDate?.trim() || !data.endDate?.trim()) {
//         e.date = '시작일과 종료일을 모두 입력해 주세요.';
//       }
//       if (!data.place?.trim()) e.place = '전시장 정보를 입력해 주세요.';
//     }
//     if (idx === 1) {
//       if (!data.concept?.trim()) e.concept = '내용을 입력해 주세요.';
//     }
//     if (idx === 2) {
//       if (!data.images || data.images.length < 1)
//         e.images = '이미지를 1장 이상 업로드하세요.';
//     }
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   // 실제 AI 호출 자리 (데모로 setTimeout)
//   async function generateDraft(form) {
//     // TODO: 실제 API 호출/응답 매핑
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           title: form.title,
//           // <<< 제출 데이터 형식 수정
//           date: `${form.startDate || ''} - ${form.endDate || ''}`,
//           place: form.place,
//           concept: form.concept,
//           // 컨펌 페이지에서 URL을 새로 만들기 위해 파일 배열만 전달
//           files: (form.images || []).map((it) => it.file).filter(Boolean),
//         });
//       }, 1800);
//     });
//   }

//   // ✅ 단일 next 핸들러 (중복 제거 + 스텝3→생성→컨펌 이동 처리)
//   const handleNext = async () => {
//     if (!validate(step)) return;

//     // 스텝3(이미지 업로드) → 스텝4(제작중)로 넘어갈 때: 생성 시작
//     if (step === 2) {
//       setStep(3); // "상세 페이지 제작중..." 보여주기
//       const draft = await generateDraft(data);

//       // 모달 닫고 컨펌 페이지로 이동 (state로 draft 전달)
//       onClose?.();
//       navigate('/exhibitionDetailConfirm', { state: { draft } });

//       // 모달 상태 초기화
//       setStep(0);
//       setData({ images: [] });
//       setErrors({});
//       return;
//     }

//     // 그 외 스텝은 일반 이동
//     setStep((s) => Math.min(s + 1, total - 1));
//   };

//   const prev = () => setStep((s) => Math.max(s - 1, 0));

//   return (
//     <Modal open={open} onClose={onClose}>
//       {/* 콘텐츠 (버튼바와 겹치지 않도록 각 스텝 내부에서 pb-[90px] 줌) */}
//       <Current
//         data={data}
//         update={update}
//         errors={errors}
//         scanning={scanning}
//         setScanning={setScanning}
//       />

//       <div className="absolute left-4 right-4 bottom-[22px] flex justify-between">
//         {/* 왼쪽 버튼 */}
//         {step === 0 ? (
//           <BtnGhost onClick={onClose}>등록 취소</BtnGhost>
//         ) : step === total - 1 ? (
//           <div className="w-[152px] h-[44px]" />
//         ) : (
//           <BtnGhost onClick={prev}>이전 단계</BtnGhost>
//         )}

//         {/* 오른쪽 버튼 */}
//         {step < total - 1 ? (
//           <BtnPrimary onClick={handleNext}>다음</BtnPrimary>
//         ) : (
//           <div className="w-[152px] h-[44px]" />
//         )}
//       </div>
//     </Modal>
//   );
// }

// components/AddExhibitionModal.jsx
import { useEffect, useMemo, useRef, useState } from 'react';
import Modal from './Modal';
import button_photo from '../../assets/button_photo.png';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axios'; // 🔹검색 API 호출용

/* 공통 버튼 */
const BtnPrimary = ({ className = '', ...p }) => (
  <button
    {...p}
    className={`px-15 py-2.5 rounded-[10px] text-white shrink-0  inline-flex whitespace-nowrap justify-center
  bg-purple_main disabled:bg-gray-300 disabled:text-white/70 text-center w-[152px] h-[44px] items-center ${className}`}
  />
);
const BtnGhost = ({ className = '', ...p }) => (
  <button
    {...p}
    className={`px-12 py-2.5 rounded-[10px] bg-grey05 text-white
  disabled:bg-gray-100  ${className}`}
  />
);

/* ── Step 1: 기본 정보 ───────────────────────────────────────── */
function StepBasic({ data, update, errors, invited, onInviteSlot }) {
  return (
    <div className="pb-[90px]">
      <div>
        <p className="mt-15 text-[15px] leading-1.5 font-medium">
          전시의 제목이 무엇인가요?
        </p>
        <input
          className="mt-5 pb-1.5 w-full text-[16px] bg-transparent
             placeholder:text-darkgrey01
             rounded-none border-0 border-b border-grey05
             focus:outline-none focus:ring-0"
          placeholder="전시명을 입력하세요."
          value={data.title || ''}
          onChange={(e) => update({ title: e.target.value })}
        />
        {errors.title && (
          <p className="mt-1 text-[12px] text-red-600">{errors.title}</p>
        )}
      </div>

      <div className="mt-10">
        <p className="text-[16px] font-semibold mt-3">
          함께 참여하는 작가가 있나요?
        </p>

        {/* 🔹초대 슬롯 4개: 비어있으면 '초대하기', 채워지면 프로필 이미지 */}
        <div className="mt-3 flex gap-3">
          {invited.map((user, i) => (
            <button
              key={i}
              type="button"
              className="w-[54px] h-[54px] rounded-full bg-grey05 text-[12px] text-black hover:bg-gray-200 overflow-hidden"
              onClick={() => onInviteSlot(i)}
              aria-label={user ? `${user.name} 변경` : '초대하기'}
            >
              {user ? (
                user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-[12px]">{user.name?.[0] ?? 'A'}</span>
                )
              ) : (
                '초대하기'
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 날짜 입력 */}
      <div>
        <p className="text-[15px] font-semibold mt-10">
          언제 전시를 진행하나요?
        </p>
        <div className="flex items-center mt-5 border-b border-grey05">
          <input
            type="text"
            inputMode="numeric"
            placeholder="YY/MM/DD"
            className="pb-1.5 w-full text-[16px] bg-transparent text-center placeholder:text-darkgrey01 border-0 focus:outline-none focus:ring-0"
            value={data.startDate || ''}
            onChange={(e) => update({ startDate: e.target.value })}
          />
          <span className="px-2 text-darkgrey01">-</span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="YY/MM/DD"
            className="pb-1.5 w-full text-[16px] bg-transparent text-center placeholder:text-darkgrey01 border-0 focus:outline-none focus:ring-0"
            value={data.endDate || ''}
            onChange={(e) => update({ endDate: e.target.value })}
          />
        </div>
        {errors.date && (
          <p className="mt-1 text-xs text-red-600">{errors.date}</p>
        )}
      </div>

      <div>
        <p className="text-[15px] font-semibold mt-10">어디서 전시하나요?</p>
        <input
          className="mt-5 pb-1.5 w-full text-[16px] bg-transparent
             placeholder:text-darkgrey01
             rounded-none border-0 border-b border-grey05
             focus:outline-none focus:ring-0 mb-8"
          placeholder="전시장 이름 또는 주소를 입력하세요."
          value={data.place || ''}
          onChange={(e) => update({ place: e.target.value })}
        />
        {errors.place && (
          <p className="mt-1 text-xs text-red-600">{errors.place}</p>
        )}
      </div>
    </div>
  );
}

/* ── 초대창(검색) ───────────────────────────────────────────── */
function SearchArtist({ pendingPick, setPendingPick }) {
  const [q, setQ] = useState('');
  const [debounced, setDebounced] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  // 300ms 디바운스
  useEffect(() => {
    const t = setTimeout(() => setDebounced(q.trim()), 300);
    return () => clearTimeout(t);
  }, [q]);

  // 유저 검색 (실제 엔드포인트에 맞게 경로만 수정)
  useEffect(() => {
    const run = async () => {
      if (!debounced) {
        setResults([]);
        setErr(null);
        return;
      }
      setLoading(true);
      setErr(null);
      try {
        // 예시: GET /api/v1/users/search?q=키워드  →  { users: [{id,name,avatarUrl}] }
        const { data } = await axiosInstance.get('/api/v1/users/search', {
          params: { q: debounced },
        });
        setResults(data?.users ?? []);
      } catch (e) {
        setErr('검색에 실패했어요.');
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [debounced]);

  return (
    <div>
      <div className='w-[300px] h-[48px] ml-2 shrink-0 justify-center items-center flex self-center'>
        <input
          type="text"
          className="w-full h-full mt-[40px] px-4 text-[16px] text-black bg-transparent border-[1px] border-solid rounded-[10px]"
          placeholder='작가 이름/아이디를 검색하세요'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {/* 심플 결과 리스트 (하나만 선택) */}
      <div className="mt-4 w-[300px] mx-auto grid gap-2">
        {loading && <p className="text-center text-sm text-darkgrey01">검색 중…</p>}
        {err && <p className="text-center text-sm text-red-600">{err}</p>}
        {!loading && !err && debounced && results.length === 0 && (
          <p className="text-center text-sm text-darkgrey01">검색 결과가 없어요.</p>
        )}
        {results.map((u) => {
          const picked = pendingPick?.id === u.id;
          return (
            <button
              key={u.id}
              type="button"
              onClick={() => setPendingPick(picked ? null : u)}
              className={`w-full flex items-center justify-between px-2 py-2 rounded-lg hover:bg-grey01/40 ${
                picked ? 'ring-2 ring-purple_main' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-grey03 overflow-hidden grid place-items-center">
                  {u.avatarUrl ? (
                    <img src={u.avatarUrl} alt={u.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[12px] text-darkgrey01">{u.name?.[0] ?? 'A'}</span>
                  )}
                </div>
                <span className="text-[14px]">{u.name}</span>
              </div>
              <span className={`text-[12px] ${picked ? 'text-purple_main' : 'text-darkgrey01'}`}>
                {picked ? '선택됨' : '선택'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Step 2: 전시 기조/내용 ──────────────────────────────────── */
function StepConcept({ data, update, errors }) {
  const max = 300;
  const len = (data.concept || '').length;

  return (
    <div className="pb-[90px]">
      <p className="text-[16px] font-semibold mt-[100px]">
        이번 전시는 무엇에 관한 전시인가요?
      </p>
      <div className="relative mt-2">
        <textarea
          rows={8}
          className="w-full rounded-[5px] border border-gray-200 px-3 py-2 mt-4
                     placeholder:text-darkgrey01 resize-none h-75"
          placeholder="전시의 기조 또는 내용을 적어주세요."
          value={data.concept || ''}
          onChange={(e) => update({ concept: e.target.value.slice(0, max) })}
        />
        <span className="absolute bottom-3 right-3 text-[15px] text-darkgrey01">
          {len}/{max}
        </span>
      </div>
      {errors.concept && (
        <p className="mt-1 text-xs text-red-600">{errors.concept}</p>
      )}
    </div>
  );
}

/* ── Step 3: 이미지 업로드 ───────────────────────────────────── */
function StepUpload({ data, update, scanning, setScanning }) {
  const inputRef = useRef(null);

  const images = data.images || [];
  const imagesRef = useRef(images);
  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  const previewUrlRef = useRef(null);

  const MAX = 10;
  const openPicker = () => {
    if (!scanning) inputRef.current?.click();
  };

  const onFiles = (files) => {
    const list = Array.from(files || []);
    if (!list.length || scanning) return;

    const remaining = MAX - imagesRef.current.length;
    const picked = list.slice(0, Math.max(0, remaining));
    if (!picked.length) return;

    const newItems = picked.map((f) => ({
      file: f,
      url: URL.createObjectURL(f),
    }));

    if (previewUrlRef.current) {
      try { URL.revokeObjectURL(previewUrlRef.current); } catch {}
    }
    previewUrlRef.current = URL.createObjectURL(picked[0]);

    setScanning(true);

    setTimeout(() => {
      let i = 0;
      const addNext = () => {
        const cur = imagesRef.current;
        if (i >= newItems.length || cur.length >= MAX) {
          setScanning(false);
          if (previewUrlRef.current) {
            try { URL.revokeObjectURL(previewUrlRef.current); } catch {}
            previewUrlRef.current = null;
          }
          return;
        }
        const next = [...cur, newItems[i]];
        update({ images: next });
        imagesRef.current = next;
        i += 1;
        if (i < newItems.length && next.length < MAX) {
          setTimeout(addNext, 160);
        } else {
          setScanning(false);
          if (previewUrlRef.current) {
            try { URL.revokeObjectURL(previewUrlRef.current); } catch {}
            previewUrlRef.current = null;
          }
        }
      };
      addNext();
    }, 1200);
  };

  useEffect(() => {
    return () => {
      (imagesRef.current || []).forEach((img) => {
        if (img?.url) {
          try { URL.revokeObjectURL(img.url); } catch {}
        }
      });
      if (previewUrlRef.current) {
        try { URL.revokeObjectURL(previewUrlRef.current); } catch {}
        previewUrlRef.current = null;
      }
    };
  }, []);

  const thumbs = images.slice(0, 4);
  const remain = Math.max(0, images.length - 4);

  return (
    <div className="relative pb-[90px]">
      <p className="text-[15px] font-[600] leading-1.5 font-[#000] mt-15 mb-3">
        전시 또는 작품 사진을 업로드해주세요.
      </p>

      <p
        className={`absolute left-1/2 -translate-x-1/2 mt-4 text-[15px] leading-1.5 font-[600] text-purple01 ${
          scanning ? 'opacity-100' : 'opacity-0'
        } pointer-events-none transition-opacity`}
      >
        스캔중이에요
      </p>

      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => onFiles(e.target.files)}
      />

      <div
        onClick={openPicker}
        className={`relative mx-auto mt-12 shrink-0
              w-[268px] h-[268px] rounded-[10px] grid place-items-center cursor-pointer
              ${scanning ? 'border-[5px] border-transparent' : 'border-0 bg-[#F0F0FF]'}
            `}
        style={
          scanning && previewUrlRef.current
            ? {
                background: `
                  url(${previewUrlRef.current}) center / cover no-repeat padding-box,
                  linear-gradient(135deg,
                    var(--color-grad3-1, #7E37F9),
                    var(--color-grad3-2, #DECBFF),
                    var(--color-grad3-3, #4BB4FE)
                  ) border-box
                `,
              }
            : undefined
        }
      >
        {!scanning && (
          <div className="grid place-items-center text-[#7B3EFF]">
            <img src={button_photo} alt="upload" className="w-25 h-25" />
          </div>
        )}
      </div>

      <div className="mt-[28px] grid grid-cols-4 gap-2 w-[268px] mx-auto">
        {Array.from({ length: 4 }).map((_, i) => {
          const img = thumbs[i];

          if (!img) {
            return (
              <div
                key={i}
                className="aspect-square rounded-[5px] w-[66px] bg-grey01"
              />
            );
          }

          if (i === 3 && remain > 0) {
            return (
              <div
                key={i}
                className="relative aspect-square rounded-[5px] overflow-hidden"
              >
                <img
                  src={img.url}
                  alt={`thumb-${i}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 grid place-items-center bg-black/50 text-white text-sm">
                  +{remain}장
                </div>
              </div>
            );
          }

          return (
            <img
              key={i}
              src={img.url}
              alt={`thumb-${i}`}
              className="aspect-square w-full h-full object-cover rounded-lg"
            />
          );
        })}
      </div>

      <p className="mt-2 text-[12px] text-center text-gray-400">
        전시 작품 사진을 업로드해주세요(최대 10장)
      </p>
    </div>
  );
}

/* 스텝 4: 임시 안내 */
function StepPending() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-6 pb-[90px]">
      <div className="mt-10 w-[144px] h-[144px] rounded-[10px] bg-[#D9D9D9] grid place-items-center text-black">
        그래픽
      </div>
      <p className="text-black text-[24px]">상세 페이지 제작중...</p>
    </div>
  );
}

/* ── 컨트롤러 ───────────────────────────────────────────────── */
export default function AddExhibitionModal({ open, onClose, onSubmit }) {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [data, setData] = useState({ images: [], artists: [] });
  const [errors, setErrors] = useState({});
  const [scanning, setScanning] = useState(false);

  /* 🔹초대 관련 상태 */
  const [invited, setInvited] = useState([null, null, null, null]); // 슬롯 4개
  const [inviteSlot, setInviteSlot] = useState(null);               // 현재 채우는 슬롯 idx
  const [pendingPick, setPendingPick] = useState(null);             // 검색에서 선택된 유저 1명

  const steps = useMemo(
    () => [
      { label: '기본 정보', component: StepBasic },
      { label: '작품/작가 검색', component: SearchArtist },
      { label: '전시 기조/내용', component: StepConcept },
      { label: '이미지 업로드', component: StepUpload },
      { label: '안내', component: StepPending },
    ],
    []
  );

  const total = steps.length;
  const Current = steps[step].component;

  const update = (patch) => setData((prev) => ({ ...prev, ...patch }));

  const validate = (idx) => {
    const e = {};
    if (idx === 0) {
      if (!data.title?.trim()) e.title = '전시명을 입력해 주세요.';
      if (!data.startDate?.trim() || !data.endDate?.trim()) {
        e.date = '시작일과 종료일을 모두 입력해 주세요.';
      }
      if (!data.place?.trim()) e.place = '전시장 정보를 입력해 주세요.';
    }
    if (idx === 2) {
      if (!data.concept?.trim()) e.concept = '내용을 입력해 주세요.';
    }
    if (idx === 3) {
      if (!data.images || data.images.length < 1)
        e.images = '이미지를 1장 이상 업로드하세요.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // 데모용
  async function generateDraft(form) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: form.title,
          date: `${form.startDate || ''} - ${form.endDate || ''}`,
          place: form.place,
          concept: form.concept,
          files: (form.images || []).map((it) => it.file).filter(Boolean),
        });
      }, 1800);
    });
  }

  /* 🔹슬롯 클릭 → 초대창으로 이동 */
  const onInviteSlot = (idx) => {
    setInviteSlot(idx);
    setPendingPick(null);
    setStep(1); // SearchArtist
  };

  /* 🔹검색 스텝에서 추가하기 */
  const confirmInvite = () => {
    if (pendingPick == null || inviteSlot == null) return;
    setInvited((prev) => {
      const next = [...prev];
      next[inviteSlot] = pendingPick;
      // 제출용 artists 동기화
      update({ artists: next.filter(Boolean) });
      return next;
    });
    setPendingPick(null);
    setInviteSlot(null);
    setStep(0); // 기본 정보로 복귀
  };

  // next 핸들러
  const handleNext = async () => {
    // 🔸검색 스텝: 추가하기
    if (step === 1) {
      confirmInvite();
      return;
    }

    if (!validate(step)) return;

    // 🔸이미지 업로드 스텝 → 제작중/컨펌
    if (step === 3) {
      setStep(4);
      const draft = await generateDraft(data);
      onClose?.();
      navigate('/exhibitionDetailConfirm', { state: { draft } });
      // 초기화
      setStep(0);
      setData({ images: [], artists: ["육오삼", ] });
      setErrors({});
      setInvited([null, null, null, null]);
      return;
    }

    // 그 외 스텝은 일반 이동
    setStep((s) => Math.min(s + 1, total - 1));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <Modal open={open} onClose={onClose}>
      {/* 콘텐츠 */}
      <Current
        data={data}
        update={update}
        errors={errors}
        scanning={scanning}
        setScanning={setScanning}
        invited={invited}                  // 🔹StepBasic
        onInviteSlot={onInviteSlot}        // 🔹StepBasic
        pendingPick={pendingPick}          // 🔹SearchArtist
        setPendingPick={setPendingPick}    // 🔹SearchArtist
      />

      <div className="absolute left-4 right-4 bottom-[22px] flex justify-between">
        {/* 왼쪽 버튼 */}
        {step === 0 ? (
          <BtnGhost onClick={onClose}>등록 취소</BtnGhost>
        ) : step === total - 1 ? (
          <div className="w-[152px] h-[44px]" />
        ) : (
          <BtnGhost onClick={prev}>이전 단계</BtnGhost>
        )}

        {/* 오른쪽 버튼 */}
        {step < total - 1 ? (
          <BtnPrimary
            onClick={handleNext}
            disabled={step === 1 && !pendingPick} // 검색 스텝은 선택 시에만 활성화
          >
            {step === 1 ? '추가하기' : '다음'}
          </BtnPrimary>
        ) : (
          <div className="w-[152px] h-[44px]" />
        )}
      </div>
    </Modal>
  );
}
