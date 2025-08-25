import { useEffect, useState } from "react";
import { getArtistExhibition } from "../apis/user";

const MyExhibitionList = () => {
    const [exhibitionList, setExhibitionList] = useState([]);

    useEffect(() => {
        const fetchArtistExhibition = async () => {
          try {
            const res = await getArtistExhibition();
            //console.log(res);
            setExhibitionList(res);
            // setMyExh(true);
          } catch (err) {
            console.log(err);
          }
        }
        fetchArtistExhibition();
      }, []);
    return (
        <div>
        <div className="px-5">
                <div className="w-full h-[1px] bg-grey06 mt-[13px]" />
              </div>
        
              <div className="px-5">
                <p className="text-[20px] font-bold leading-[125%] not-italic mt-[13px]">
                  전시
                </p>
              </div>
        
              {/* 구분선 */}
              <div className="px-5">
                <div className="w-full h-[1px] bg-grey06 mt-[13px]" />
              </div>

              {exhibitionList.map((exh, idx) => (
                <div key={idx} className="px-5">
                <div className="w-full flex flex-row gap-[15px] h-[136px] mt-[8px]">
                  <img src={exh.posterImageUrl} alt="" className="w-[92px] h-[120px]" />
                  <div className="w-[256px] h-[120px] flex flex-col mt-[20px]">
                    <p className="text-[16px] font-[600] leading-1.5">{exh.title}</p>
                    <p className="text-[14px] text-darkgrey03 font-[500] leading-[21px] mt-[24px]">
                      {exh.startDate} <br /> - {exh.endDate}
                    </p>
                    <div className="w-full h-[1px] bg-grey06 mt-[34px]" />
                  </div>
                </div>
              </div>
              ))}
              </div>
    )
}

export default MyExhibitionList;