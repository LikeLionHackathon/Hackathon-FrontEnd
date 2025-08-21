import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BtnPrimary = ({ className = '', ...p }) => (
  <button
    {...p}
    className={`w-[168px] h-[44px] rounded-[10px] text-white text-[15px]
                bg-purple_main disabled:bg-gray-300 disabled:text-white/70 ${className}`}
  />
);
const BtnGhost = ({ className = '', ...p }) => (
  <button
    {...p}
    className={`w-[168px] h-[44px] rounded-[10px] text-[15px]
                bg-grey05 text-white disabled:bg-gray-100 disabled:text-gray-400 ${className}`}
  />
);

// 선택 카드(타일)
function Tile({ selected, onClick, title, sub, icon }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-[96px] rounded-[12px] border text-left px-4 py-3 flex items-center gap-3 
        ${selected ? 'border-transparent bg-lightpurple02' : 'border-none bg-grey01 '}`}
    >
      {icon && (
        <div className="w-10 h-10 grid place-items-center rounded-lg bg-[#7B3EFF]/10">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <p
          className={`text-[15px] font-semibold ${selected ? 'text-purple_main' : 'text-darkgrey01'}`}
        >
          {title}
        </p>
        {sub && <p className="text-[12px] text-darkgrey01 mt-0.5">{sub}</p>}
      </div>
    </button>
  );
}

export default function Onboarding() {
  const navigate = useNavigate();

  // 스텝 정의
  const STEPS = useMemo(
    () => [
      {
        key: 'role',
        title: '유저 포지션을 선택하세요',
        multi: false,
        min: 1,
        options: [
          { id: 'viewer', title: '일반 유저', sub: '작품을 보는게 좋아요.' },
          {
            id: 'artist',
            title: '작가 유저',
            sub: '내 작품을 사람들에게 보여주고 싶어요.',
          },
        ],
        layout: 'col', // 세로 2장
      },
      {
        key: 'interests',
        title: '관심사를 선택하세요',
        note: '(복수 선택 가능)',
        multi: true,
        min: 1,
        options: [
          { id: 'nature', title: '자연' },
          { id: 'city', title: '도시' },
          { id: 'emotion', title: '감정' },
          { id: 'human', title: '인간' },
          { id: 'history', title: '역사' },
          { id: 'tech', title: '기술' },
          { id: 'photo', title: '사진' },
          { id: 'craft', title: '공예' },
        ],
        layout: 'grid', // 2열 그리드
      },
      {
        key: 'moods',
        title: '전시장에서 어떤 분위기를 좋아하시나요?',
        note: '(복수 선택 가능)',
        multi: true,
        min: 1,
        options: [
          { id: 'calm', title: '차분하고 사색적인' },
          { id: 'dense', title: '몰입감 있고 밀도적인' },
          { id: 'warm', title: '따뜻하고 낭만적인' },
          { id: 'experimental', title: '실험적이고 도전적인' },
        ],
        layout: 'grid',
      },
      {
        key: 'companions',
        title: '전시는 보통 누구와 함께 즐기시나요?',
        note: '(복수 선택 가능)',
        multi: true,
        min: 1,
        options: [
          { id: 'solo', title: '혼자 집중해서' },
          { id: 'lover', title: '연인과 함께' },
          { id: 'friends', title: '친구와 함께' },
          { id: 'family', title: '가족과 함께' },
        ],
        layout: 'grid',
      },
    ],
    []
  );

  const [step, setStep] = useState(0);
  // 전체 스텝 개수
  const total = STEPS.length; // 4
  // 프로그레스에 포함될 스텝 수(첫 페이지 제외)
  const progressTotal = total - 1; // 3
  // 현재 프로그레스 인덱스(첫 페이지 제외한 0..2)
  const progressIndex = Math.max(0, step - 1);
  // 퍼센트: 1/3, 2/3, 3/3
  const progress = ((progressIndex + 1) / progressTotal) * 100;

  // 응답 상태
  const [form, setForm] = useState({
    role: '', // 'viewer' | 'artist'
    interests: [], // string[]
    moods: [], // string[]
    companions: [], // string[]
  });

  const cur = STEPS[step];

  // 선택 토글
  const toggle = (key, id, multi) => {
    setForm((prev) => {
      if (!multi) return { ...prev, [key]: id };
      const arr = new Set(prev[key] || []);
      arr.has(id) ? arr.delete(id) : arr.add(id);
      return { ...prev, [key]: Array.from(arr) };
    });
  };

  // 유효성 (다음 버튼 활성화)
  const selectedCount = Array.isArray(form[cur.key])
    ? form[cur.key].length
    : form[cur.key]
      ? 1
      : 0;
  const canNext = selectedCount >= (cur.min ?? 0);

  // 진행 바
  const isFirst = step === 0;

  const prev = () => setStep((s) => Math.max(0, s - 1));
  const next = async () => {
    if (!canNext) return;
    if (step < total - 1) {
      setStep((s) => s + 1);
      return;
    }
    // 마지막 스텝 → 완료 처리
    await completeSignup(form);
  };

  // 완료(저장) 처리 — 실제 API로 교체
  async function completeSignup(payload) {
    // 예: await fetch('/api/onboarding', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    // 완료 후 메인/마이페이지 등 원하는 곳으로
    navigate('/'); // 혹은 navigate('/mypage');
  }

  // 옵션 렌더링
  const renderOptions = () => {
    const isMulti = !!cur.multi;
    const value = form[cur.key];

    if (cur.layout === 'col') {
      return (
        <div className="mt-[158px] space-y-10 justify-center">
          {cur.options.map((op) => (
            <Tile
              key={op.id}
              title={op.title}
              sub={op.sub}
              selected={isMulti ? value.includes(op.id) : value === op.id}
              onClick={() => toggle(cur.key, op.id, isMulti)}
            />
          ))}
        </div>
      );
    }

    // grid 2열
    return (
      <div className="w-[348px] mt-4 grid grid-cols-2 gap-3">
        {cur.options.map((op) => (
          <Tile
            key={op.id}
            title={op.title}
            selected={isMulti ? value.includes(op.id) : value === op.id}
            onClick={() => toggle(cur.key, op.id, isMulti)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="mx-auto w-full max-w-[450px] min-h-dvh bg-white flex flex-col ">
      {/* 헤더 + 프로그레스 */}
      {isFirst ? (
        // ✅ 1번 스텝: 프로그레스 바 X, '< 시작 화면' 버튼만
        <div className="px-5 pt-4 h-10 flex items-center">
          <button
            type="button"
            onClick={() => navigate('/')} // 시작 화면 경로에 맞게 수정
            className="text-[14px] text-darkgrey01 "
          >
            &lt; 시작 화면
          </button>
        </div>
      ) : (
        <div className="px-5 pt-4">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-[30px] bg-[#9769E1] transition-all "
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      {/* 콘텐츠 */}
      <div className="flex-1 px-5 py-6">
        <h1 className="text-[18px] font-semibold">{cur.title}</h1>
        {cur.note && (
          <p className="mt-1 text-[12px] text-darkgrey01">{cur.note}</p>
        )}

        {renderOptions()}
      </div>

      {/* 풋터 버튼 */}
      <div className="px-5 pb-6 flex items-center justify-between">
        {isFirst ? (
          <div className="w-[168px] h-[44px]" />
        ) : (
          <BtnGhost onClick={() => setStep((s) => Math.max(0, s - 1))}>
            뒤로가기
          </BtnGhost>
        )}
        <BtnPrimary onClick={next} disabled={!canNext}>
          {step === total - 1 ? '완료' : '다음'}
        </BtnPrimary>
      </div>
    </div>
  );
}
