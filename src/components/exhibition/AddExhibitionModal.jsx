// components/AddExhibitionModal.jsx
import { useEffect, useMemo, useRef, useState } from 'react';
import Modal from './Modal';
import button_photo from '../../assets/button_photo.png';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apis/axios';
import writing from '../../assets/writing.gif';
import { createMyExhibition } from '../../apis/addExhibition';
import icon_addfriend from '../../assets/icon_addfriend.svg';
import icon_addfriend2 from '../../assets/icon_addfriend2.svg';

/* 공통 버튼 */
const BtnPrimary = ({ className = '', ...p }) => (
  <button
    {...p}
    className={`px-15 py-2.5 rounded-[10px] text-white shrink-0 inline-flex whitespace-nowrap justify-center
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

        {/* 🔹초대 슬롯 4개 (오버레이로 검색) */}
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
            placeholder="YYYY/MM/DD"
            className="pb-1.5 w-full text-[16px] bg-transparent text-center placeholder:text-darkgrey01 border-0 focus:outline-none focus:ring-0"
            value={data.startDate || ''}
            onChange={(e) => update({ startDate: e.target.value })}
          />
          <span className="px-2 text-darkgrey01">-</span>
          <input
            type="text"
            inputMode="numeric"
            placeholder="YYYY/MM/DD"
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

/* ── (오버레이용) 작가 검색 ─────────────────────────────────── */
function SearchArtist({ pendingPick, setPendingPick }) {
  const [q, setQ] = useState('');
  const [debounced, setDebounced] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(q.trim()), 300);
    return () => clearTimeout(t);
  }, [q]);

// SearchArtist.jsx

// SearchArtist.jsx 의 useEffect

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
      const { data } = await axiosInstance.get(`/api/v1/users/${debounced}`, {      withCredentials: true,});
      

      if (data && data.userId !== undefined) {
        const formattedUser = {
          id: data.userId,            
          name: data.nickname,    
          avatarUrl: data.profileImageUrl, 
        };
        setResults([formattedUser]);
      } else {
        setResults([]);
      }

    } catch (error) {
      if (error.response && error.response.status === 404) {
        setResults([]);
      } else {
        setErr('유저 정보 조회에 실패했어요.');
      }
    } finally {
      setLoading(false);
    }
  };
  run();
}, [debounced]);

  return (
    <div>
      <div className="w-[300px] h-[48px] ml-2 shrink-0 justify-center items-center flex self-center">
        <input
          type="text"
          className="w-full h-full mt-[40px] px-4 text-[16px] text-black bg-transparent border-[1px] border-solid rounded-[10px]"
          placeholder="작가 이름/아이디를 검색하세요"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="mt-4 w-[300px] mx-auto grid gap-2">
        {loading && (
          <p className="text-center text-sm text-darkgrey01">검색 중…</p>
        )}
        {err && <p className="text-center text-sm text-red-600 mt-2">{err}</p>}
        {!loading && !err && debounced && results.length === 0 && (
          <p className="text-center text-sm mt-2 text-darkgrey01">
            검색 결과가 없어요.
          </p>
        )}
        {results.map((u) => {
          const picked = pendingPick?.id === u.id;
          return (
            <button
              key={u.id}
              type="button"
              onClick={() => setPendingPick(picked ? null : u)}
              className={`w-full flex items-center mt-[20px] justify-between px-2 py-2 rounded-lg hover:bg-grey01/40  ${
                picked ? 'text-[14px] font-[600] leading-1.5 ring-2 ring-purple_main' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-[54px] h-[54px] rounded-full bg-grey03 overflow-hidden grid place-items-center">
                  {u.avatarUrl ? (
                    <img
                      src={u.avatarUrl}
                      alt={u.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-[12px] text-darkgrey01">
                      {u.name?.[0] ?? 'A'}
                    </span>
                  )}
                </div>
                <span className="text-[16px] leading-1.5 font-[600]">{u.name}</span>
              </div>
              <div>
                {(picked ? (<img src={icon_addfriend2}/>) : (<img src={icon_addfriend}/>))}
              </div>
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
      try {
        URL.revokeObjectURL(previewUrlRef.current);
      } catch {}
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
            try {
              URL.revokeObjectURL(previewUrlRef.current);
            } catch {}
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
            try {
              URL.revokeObjectURL(previewUrlRef.current);
            } catch {}
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
          try {
            URL.revokeObjectURL(img.url);
          } catch {}
        }
      });
      if (previewUrlRef.current) {
        try {
          URL.revokeObjectURL(previewUrlRef.current);
        } catch {}
        previewUrlRef.current = null;
      }
    };
  }, []);

  const thumbs = images.slice(0, 4);
  const remain = Math.max(0, images.length - 4);

  return (
    <div className="relative pb-[90px]">
      <p className="text-[15px] font-[600] leading-1.5 font-[#000] mt-15 mb-3">
        전시 또는 작품 사진을 업로드해주세요. (최대 10장)
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
    </div>
  );
}

/* 스텝 4: 임시 안내 */
function StepPending() {
  return (
    <div className="flex flex-col items-center justify-center bg-white gap-1">
      <div className="w-full h-full rounded-[10px] bg-white place-items-center">
        <p className="font-semibold text-purple01 text-[15px]">
          상세 페이지 제작 중...
        </p>
        <img src={writing} alt="제작 중..." />
      </div>
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
  
  /* 🔹초대 관련 상태 (오버레이) */
  const [invited, setInvited] = useState([null, null, null, null]); // 슬롯 4개
  const [inviteSlot, setInviteSlot] = useState(null); // 현재 채우는 슬롯 idx
  const [pendingPick, setPendingPick] = useState(null); // 검색에서 선택된 유저 1명
  const [inviteOpen, setInviteOpen] = useState(false); // 오버레이 on/off

  const steps = useMemo(
    () => [
      { label: '기본 정보', component: StepBasic },
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
      if (!data.startDate?.trim() || !data.endDate?.trim())
        e.date = '시작일과 종료일을 모두 입력해 주세요.';
      if (!data.place?.trim()) e.place = '전시장 정보를 입력해 주세요.';
    }
    if (idx === 1) {
      // Concept
      if (!data.concept?.trim()) e.concept = '내용을 입력해 주세요.';
    }
    if (idx === 2) {
      // Upload
      if (!data.images || data.images.length < 1)
        e.images = '이미지를 1장 이상 업로드하세요.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onInviteSlot = (idx) => {
    setInviteSlot(idx);
    setPendingPick(null);
    setInviteOpen(true);
  };

  const confirmInvite = () => {
    if (pendingPick != null && inviteSlot != null) {
      setInvited((prev) => {
        const next = [...prev];
        next[inviteSlot] = pendingPick;
        update({ artists: next.filter(Boolean) }); // 제출 데이터에 반영
        return next;
      });
    }
    setPendingPick(null);
    setInviteSlot(null);
    setInviteOpen(false); // 닫기
  };

  const cancelInvite = () => {
    setPendingPick(null);
    setInviteSlot(null);
    setInviteOpen(false); // 닫기
  };

  const handleNext = async () => {
    if (!validate(step)) return;

    // ⭐️ 여기가 Step 3 (이미지 업로드) 완료 시점입니다. (수정될 부분)
    if (step === 2) {
      setStep(3); // 로딩 화면(StepPending)으로 전환

      try {
        // ✅ 수정된 API 호출:
        // payload를 따로 만들 필요 없이, 파일과 텍스트 정보가 모두 담긴
        // 'data' state를 그대로 넘겨줍니다.
        const response = await createMyExhibition(data);

        console.log('전시 생성 성공:', response);

        // API 호출 성공 후, 다음 페이지로 이동합니다.
        // 이때, 생성된 전시의 ID와 업로드할 이미지 파일들을 함께 넘겨주면 좋습니다.
        onClose?.();
        navigate('/exhibitionDetailConfirm', {
          state: {
            exhibitionId: response.id, // 예시: 백엔드로부터 받은 새 전시 ID
          },
        });

        // 상태 초기화
        setStep(0);
        setData({ images: [], artists: [] });
        setErrors({});
        setInvited([null, null, null, null]);
        // ... (기타 상태 초기화)
      } catch (error) {
        // 에러 처리는 기존과 동일
        console.error('전시 생성에 실패했습니다:', error);
        alert('전시 생성 중 오류가 발생했습니다. 다시 시도해 주세요.');
        setStep(2); // 오류 발생 시 이전 단계로 되돌리기
      }
      return;
    }

    setStep((s) => Math.min(s + 1, total - 1));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <>
      <Modal open={open} onClose={onClose}>
        {/* 메인 스텝 콘텐츠 */}
        <Current
          data={data}
          update={update}
          errors={errors}
          scanning={scanning}
          setScanning={setScanning}
          invited={invited}
          onInviteSlot={onInviteSlot}
        />

        {/* 하단 진행 버튼 */}
        <div className="absolute left-4 right-4 bottom-[22px] flex justify-between">
          {step === 0 ? (
            <BtnGhost onClick={onClose}>등록 취소</BtnGhost>
          ) : step === total - 1 ? (
            <div className="w-[152px] h-[44px]" />
          ) : (
            <BtnGhost onClick={prev}>이전 단계</BtnGhost>
          )}

          {step < total - 1 ? (
            <BtnPrimary onClick={handleNext}>다음</BtnPrimary>
          ) : (
            <div className="w-[152px] h-[44px]" />
          )}
        </div>
      </Modal>

      {/* 🔹초대 오버레이 모달 (스텝 흐름과 독립) */}
      <Modal open={inviteOpen} onClose={cancelInvite}>
        <SearchArtist
          pendingPick={pendingPick}
          setPendingPick={setPendingPick}
        />

        <div className="absolute left-4 right-4 bottom-[22px] flex justify-between">
          <BtnGhost onClick={cancelInvite}>취소</BtnGhost>
          <BtnPrimary onClick={confirmInvite} disabled={!pendingPick}>
            추가하기
          </BtnPrimary>
        </div>
      </Modal>
    </>
  );
}
