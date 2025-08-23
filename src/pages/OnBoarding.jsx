// import { useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const BtnPrimary = ({ className = '', ...p }) => (
//   <button {...p} className={`w-[168px] h-[44px] rounded-[10px] text-white text-[15px] bg-purple_main disabled:bg-gray-300 disabled:text-white/70 ${className}`} />
// );

// const BtnGhost = ({ className = '', ...p }) => (
//   <button {...p} className={`w-[168px] h-[44px] rounded-[10px] text-[15px] bg-grey05 text-white disabled:bg-gray-100 disabled:text-gray-400 ${className}`} />
// );

// const Tile = ({ selected, onClick, title, sub, className = '' }) => (
//   <button
//     type="button"
//     onClick={onClick}
//     className={`w-full h-[96px] rounded-[12px] border text-left p-4 flex items-center gap-4 transition-colors
//       ${selected ? 'border-transparent bg-lightpurple02' : 'border-none bg-grey01 '} ${className}`}
//   >
//     <div className="flex-1">
//       <p className={`text-[15px] font-semibold ${selected ? 'text-purple_main' : 'text-black'}`}>
//         {title}
//       </p>
//       {sub && <p className="text-[12px] text-darkgrey01 mt-0.5">{sub}</p>}
//     </div>
//   </button>
// );


// // --- Main Onboarding Component ---

// export default function Onboarding() {
//   const navigate = useNavigate();

//   const STEPS = useMemo(() => [
//     { key: 'role', title: '유저 포지션을 선택하세요', multi: false, min: 1 },
//     { key: 'interests', title: '관심사를 선택하세요', note: '(복수 선택 가능)', multi: true, min: 1, options: [
//         { id: 'nature', title: '자연' }, { id: 'city', title: '도시' }, { id: 'figure', title: '인물' }, { id: 'memory', title: '추억' },
//         { id: 'history', title: '역사' }, { id: 'religion', title: '종교' }, { id: 'social', title: '사회비평' }, { id: 'korea', title: '한국' },
//         { id: 'modern', title: '현대' }, { id: 'environment', title: '환경' },
//     ]},
//     { key: 'genres', title: '어떤 장르의 전시를 좋아하시나요?', note: '(복수 선택 가능)', multi: true, min: 1, options: [
//         { id: 'contemporary', title: '현대미술' }, { id: 'installation', title: '설치미술' }, { id: 'digital', title: '디지털아트' },
//         { id: 'graphic', title: '그래픽' }, { id: 'video', title: '영상' }, { id: 'photo', title: '사진' },
//         { id: 'interactive', title: '인터랙티브 아트' }, { id: 'ceramics', title: '도자기' }, { id: 'glass', title: '유리공예' }, { id: 'oriental', title: '동양화' },
//     ]},
//     { key: 'moods', title: '전시장에서 어떤 분위기를 좋아하시나요?', note: '(복수 선택 가능)', multi: true, min: 1, options: [
//         { id: 'calm', title: '차분하고 사색적인' }, { id: 'dense', title: '몰입감 있고 밀도적인' },
//         { id: 'warm', title: '따뜻하고 낭만적인' }, { id: 'experimental', title: '실험적이고 도전적인' },
//     ]},
//     { key: 'companions', title: '전시는 보통 누구와 함께 즐기시나요?', note: '(복수 선택 가능)', multi: true, min: 1, options: [
//         { id: 'solo', title: '혼자 집중해서' }, { id: 'lover', title: '연인과 함께' },
//         { id: 'friends', title: '친구와 함께' }, { id: 'family', title: '가족과 함께' },
//     ]},
//   ], []);

//   const [step, setStep] = useState(0);
//   const totalSteps = STEPS.length;
//   const progress = step > 0 ? (step / (totalSteps -1)) * 100 : 0;

//   const [form, setForm] = useState({
//     role: '', interests: [], genres: [], moods: [], companions: [],
//   });
  
//   const [isCompleted, setIsCompleted] = useState(false);

//   const cur = STEPS[step];

//   const toggle = (key, id, multi) => {
//     setForm((prev) => {
//       if (!multi) return { ...prev, [key]: id };
//       const arr = new Set(prev[key] || []);
//       arr.has(id) ? arr.delete(id) : arr.add(id);
//       return { ...prev, [key]: Array.from(arr) };
//     });
//   };

//   const selectedCount = Array.isArray(form[cur.key]) ? form[cur.key].length : form[cur.key] ? 1 : 0;
//   const canNext = selectedCount >= (cur.min ?? 0);

//   const prev = () => setStep((s) => Math.max(0, s - 1));

//   const next = async () => {
//     if (!canNext) return;
//     if (step === totalSteps - 1) {
//       await completeSignup(form);
//       setIsCompleted(true);
//       return;
//     }
//     setStep((s) => s + 1);
//   };
  
//   async function completeSignup(payload) {
//     console.log('Final onboarding data:', payload);
//     // 실제 API 호출 로직
//   }

//   // <<< 각 스텝에 맞는 UI를 렌더링하는 함수
//   const renderStepContent = () => {
//     const key = cur.key;
//     const SimpleTile = (props) => <Tile {...props} className="h-[60px] p-0" />;

//     switch (key) {
//       case 'role':
//         return (
//           <div className="w-full h-full flex flex-col items-center justify-center pt-20">
//             <div className="space-y-4 w-full max-w-sm">
//               <Tile title="일반 유저" sub="작품을 보는게 좋아요." selected={form.role === 'viewer'} onClick={() => toggle('role', 'viewer', false)}/>
//               <Tile title="작가 유저" sub="내 작품을 사람들에게 보여주고 싶어요." selected={form.role === 'artist'} onClick={() => toggle('role', 'artist', false)}/>
//             </div>
//           </div>
//         );
//       case 'interests':
//       case 'genres':
//         return (
//           <div className="w-full h-full pt-4">
//             <div className="grid grid-cols-2 gap-3">
//               {cur.options.map((op) => (
//                 <SimpleTile key={op.id} title={op.title} selected={form[key].includes(op.id)} onClick={() => toggle(key, op.id, true)} />
//               ))}
//             </div>
//           </div>
//         );
//       case 'moods':
//       case 'companions':
//         return (
//           <div className="w-full h-full pt-4">
//             <div className="grid grid-cols-2 gap-3">
//               {cur.options.map((op) => (
//                 <Tile key={op.id} title={op.title} selected={form[key].includes(op.id)} onClick={() => toggle(key, op.id, true)} />
//               ))}
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };
  
//   if (isCompleted) {
//     return (
//       <div className="mx-auto w-full max-w-[450px] min-h-dvh bg-white flex flex-col items-center justify-center text-center p-5">
//         <div className="flex-grow flex flex-col items-center justify-center">
//             <h1 className="text-2xl font-bold">가입이 완료되었습니다!</h1>
//         </div>
//         <div className="w-full pb-6">
//             <BtnPrimary onClick={() => navigate('/')} className="w-full">완료</BtnPrimary>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto w-full max-w-[450px] min-h-dvh bg-white flex flex-col">
//       {/* Header & Progress Bar */}
//       <div className="h-[60px] px-5 pt-4">
//         {step === 0 ? (
//           <button type="button" onClick={() => navigate(-1)} className="text-[14px] text-darkgrey01">&lt; 시작 화면</button>
//         ) : (
//           <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
//               <div className="h-2 bg-[#9769E1] transition-all" style={{ width: `${progress}%` }} />
//           </div>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 px-5 py-2 flex flex-col">
//         <h1 className="text-[22px] font-bold">{cur.title}</h1>
//         {cur.note && <p className="mt-1 text-[14px] text-darkgrey01">{cur.note}</p>}
        
//         <div className="mt-4 flex-grow border border-black">
//           {renderStepContent()} {/* <<< 여기서 스텝별 컨텐츠를 렌더링 */}
//         </div>
//       </div>

//       {/* Footer Buttons */}
//       <div className="px-5 pb-6">
//         <div className="flex items-center justify-between">
//           {step === 0 ? <div className="w-[168px]" /> : <BtnGhost onClick={prev}>뒤로가기</BtnGhost>}
//           <BtnPrimary onClick={next} disabled={!canNext}>
//             {step === totalSteps - 1 ? '완료' : '다음'}
//           </BtnPrimary>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import artistImg from "../assets/user_general.svg";
import generalImg from "../assets/user_artist.svg";
import who1 from "../assets/who1.png";
import who2 from "../assets/who2.png";
import who3 from "../assets/who3.png";
import who4 from "../assets/who4.png";
import mood1 from "../assets/mood1.png";
import mood2 from "../assets/mood2.png";
import mood3 from "../assets/mood3.png";
import mood4 from "../assets/mood4.png";



const BtnPrimary = ({ className = '', ...p }) => (
  <button {...p} className={`w-[168px] h-[44px] rounded-[10px] text-white text-[15px] bg-purple_main disabled:bg-gray-300 disabled:text-white/70 ${className}`} />
);

const BtnGhost = ({ className = '', ...p }) => (
  <button {...p} className={`w-[168px] h-[44px] rounded-[10px] text-[15px] bg-grey05 text-white disabled:bg-gray-100 disabled:text-gray-400 ${className}`} />
);

const Tile = ({ type, selected, onClick, title, sub, className = '', image }) => (
  <div>
    {type === 1 && 
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-[185px] rounded-[12px] border pr-[3px] flex transition-colors items-center
        ${selected ? 'border-transparent bg-lightpurple02' : 'border-none bg-grey01 '} ${className}`}
    >
      <div className='flex w-full h-full items-end'>
        <img src={image} alt="image" className='relative ml-[11px] bottom-[70px] w-[148px]'/>
        <div className="flex flex-col h-full pt-[23px] pb-[20px] justify-between items-end ml-auto mr-[23px]">
          <p className={`text-[20px] font-bold ${selected ? 'text-purple_main' : 'text-black'}`}>
            {title}
          </p>
          <div className='w-[125px] text-right'>
            {sub && <p className="text-[14px] font-semibold text-darkgrey01">{sub}</p>}
          </div>
        </div>
      </div>
    </button>
    }

    {type === 2 && 
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-[72px] rounded-[12px] border text-left p-4 flex justify-center items-center gap-4 transition-colors
        ${selected ? 'border-transparent bg-lightpurple02' : 'border-none bg-grey01 '} ${className}`}
    >
      <p className={`text-[15px] font-semibold ${selected ? 'text-purple_main' : 'text-black'}`}>
        {title}
      </p>
      
    </button>
    }

    {type === 3 && 
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-[200px] rounded-[10px] border text-left p-4 flex justify-center items-center gap-4 transition-colors
        ${selected ? 'border-transparent bg-lightpurple02' : 'border-none bg-grey01 '} ${className}`}
    >
      <div className="flex flex-col justify-center items-center gap-[11px]">
        <img src={image} alt="image" className={`${sub ? 'w-[140px] h-[120px]' : 'w-[100px]'}`}/>
        <p className={`font-semibold text-[14px] ${selected ? 'text-purple_main' : 'text-darkgrey01'}`}>{title}</p>
      </div>
    </button>
    }
  </div>
);


// --- Main Onboarding Component ---

export default function Onboarding() {
  const navigate = useNavigate();

  const STEPS = useMemo(() => [
    { key: 'role', title: '유저 포지션을 선택하세요', multi: false, min: 1 },
    { key: 'interests', title: '관심사를 선택하세요', note: '(복수 선택 가능)', multi: true, min: 1, options: [
        { id: 'nature', title: '자연' }, { id: 'city', title: '도시' }, { id: 'figure', title: '인물' }, { id: 'memory', title: '추억' },
        { id: 'history', title: '역사' }, { id: 'religion', title: '종교' }, { id: 'social', title: '사회비평' }, { id: 'korea', title: '한국' },
        { id: 'modern', title: '현대' }, { id: 'environment', title: '환경' },
    ]},
    { key: 'genres', title: '어떤 장르의 전시를 좋아하시나요?', note: '(복수 선택 가능)', multi: true, min: 1, options: [
        { id: 'contemporary', title: '현대미술' }, { id: 'installation', title: '설치미술' }, { id: 'digital', title: '디지털아트' },
        { id: 'graphic', title: '그래픽' }, { id: 'video', title: '영상' }, { id: 'photo', title: '사진' },
        { id: 'interactive', title: '인터랙티브 아트' }, { id: 'ceramics', title: '도자기' }, { id: 'glass', title: '유리공예' }, { id: 'oriental', title: '동양화' },
    ]},
    { key: 'moods', title: '전시장에서 어떤 분위기를 좋아하시나요?', note: '(복수 선택 가능)', multi: true, min: 1, options: [
        { id: 'calm', title: '차분하고 사색적인', image: mood1 }, { id: 'dense', title: '몰입감 있고 밀도적인', image: mood2 },
        { id: 'warm', title: '따뜻하고 낭만적인', image: mood3 }, { id: 'experimental', title: '실험적이고 도전적인', image: mood4 },
    ]},
    { key: 'companions', title: '전시는 보통 누구와 함께 즐기시나요?', note: '(복수 선택 가능)', multi: true, min: 1, options: [
        { id: 'solo', title: '혼자 집중해서', image: who1, sub: 1 }, { id: 'lover', title: '연인과 함께', image: who2, sub: 1  },
        { id: 'friends', title: '친구와 함께', image: who3, sub: 1  }, { id: 'family', title: '가족과 함께', image: who4, sub: 1  },
    ]},
  ], []);

  const [step, setStep] = useState(0);
  const totalSteps = STEPS.length;
  const progress = step > 0 ? (step / (totalSteps -1)) * 100 : 0;

  const [form, setForm] = useState({
    role: '', interests: [], genres: [], moods: [], companions: [],
  });
  
  const [isCompleted, setIsCompleted] = useState(false);

  const cur = STEPS[step];

  const toggle = (key, id, multi) => {
    setForm((prev) => {
      if (!multi) return { ...prev, [key]: id };
      const arr = new Set(prev[key] || []);
      arr.has(id) ? arr.delete(id) : arr.add(id);
      return { ...prev, [key]: Array.from(arr) };
    });
  };

  const selectedCount = Array.isArray(form[cur.key]) ? form[cur.key].length : form[cur.key] ? 1 : 0;
  const canNext = selectedCount >= (cur.min ?? 0);

  const prev = () => setStep((s) => Math.max(0, s - 1));

  const next = async () => {
    if (!canNext) return;
    if (step === totalSteps - 1) {
      await completeSignup(form);
      setIsCompleted(true);
      return;
    }
    setStep((s) => s + 1);
  };
  
  async function completeSignup(payload) {
    console.log('Final onboarding data:', payload);
    // 실제 API 호출 로직
  }

  // <<< 각 스텝에 맞는 UI를 렌더링하는 함수
  const renderStepContent = () => {
    const key = cur.key;
    const SimpleTile = (props) => <Tile {...props} className="h-[60px] p-0" />;

    switch (key) {
      case 'role':
        return (
          <div className="w-full h-full flex flex-col items-center mt-[200px]">
            <div className="space-y-10 w-full max-w-sm justify-end">
              <Tile type={1} title="일반 유저" sub="작품을 보는게 좋아요." selected={form.role === 'viewer'} onClick={() => toggle('role', 'viewer', false)} image={generalImg}/>
              <Tile type={1} title="작가 유저" sub="내 작품을 사람들에게 보여주고 싶어요." selected={form.role === 'artist'} onClick={() => toggle('role', 'artist', false)} image={artistImg}/>
            </div>
          </div>
        );
      case 'interests':
      case 'genres':
        return (
          <div className="w-full h-full pt-4">
            <div className="grid grid-cols-2 gap-3">
              {cur.options.map((op) => (
                <SimpleTile type={2} key={op.id} title={op.title} selected={form[key].includes(op.id)} onClick={() => toggle(key, op.id, true)} />
              ))}
            </div>
          </div>
        );
      case 'moods':
      case 'companions':
        return (
          <div className="w-full h-full pt-4">
            <div className="grid grid-cols-2 gap-3">
              {cur.options.map((op) => (
                <Tile type={3} key={op.id} title={op.title} selected={form[key].includes(op.id)} onClick={() => toggle(key, op.id, true)} image={op.image} sub={op.sub}/>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  if (isCompleted) {
    return (
      <div className="mx-auto w-full max-w-[450px] min-h-dvh bg-white flex flex-col items-center justify-center text-center p-5">
        <div className="flex-grow flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">가입이 완료되었습니다!</h1>
        </div>
        <div className="w-full pb-6">
            <BtnPrimary onClick={() => navigate('/')} className="w-full">완료</BtnPrimary>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[450px] min-h-dvh bg-white flex flex-col">
      {/* Header & Progress Bar */}
      <div className="h-[60px] px-5 pt-4">
        {step === 0 ? (
          <button type="button" onClick={() => navigate(-1)} className="text-[14px] text-darkgrey01">&lt; 시작 화면</button>
        ) : (
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-2 bg-[#9769E1] transition-all" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 px-5 py-2 flex flex-col">
        <h1 className="text-[22px] font-bold">{cur.title}</h1>
        {cur.note && <p className="mt-1 text-[14px] text-darkgrey01">{cur.note}</p>}
        
        <div className="mt-4 flex-grow">
          {renderStepContent()} {/* <<< 여기서 스텝별 컨텐츠를 렌더링 */}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="px-5 pb-6">
        <div className="flex items-center justify-between">
          {step === 0 ? <div className="w-[168px]" /> : <BtnGhost onClick={prev}>뒤로가기</BtnGhost>}
          <BtnPrimary onClick={next} disabled={!canNext}>
            {step === totalSteps - 1 ? '완료' : '다음'}
          </BtnPrimary>
        </div>
      </div>
    </div>
  );
}