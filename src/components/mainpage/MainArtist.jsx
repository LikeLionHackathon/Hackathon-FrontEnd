import ArtistCard from "./ArtistCard";
import PlaceCard from "./PlaceCard";

const MainArtist = () => {
    return (
        <div className="mx-auto w-full max-w-[450px] pl-[22px] mt-[23px]">
            <div>
                <h1 className="font-bold text-[20px]">함께할 작가를 찾고 있습니다</h1>
                <div className="mt-[12px] flex flex-row gap-[12px] overflow-x-scroll">
                    <div className="flex-shrink-0">
                        <ArtistCard name={"예나"} num={8} place={"홍아트플레이스"}/>
                    </div>
                    <div className="flex-shrink-0">
                        <ArtistCard name={"예나"} num={8} place={"홍아트플레이스"}/>
                    </div>
                    <div className="flex-shrink-0">
                        <ArtistCard name={"예나"} num={8} place={"홍아트플레이스"}/>
                    </div>
                    <div className="flex-shrink-0">
                        <ArtistCard name={"예나"} num={8} place={"홍아트플레이스"}/>
                    </div>
                    
                </div>
            </div>

            <div className="mt-[47px] pr-[18px]">
                <h1 className="font-bold text-[20px]">비어있는 전시 공간</h1>
                <div className="flex flex-col mt-[12px]">
                    <PlaceCard />
                    <PlaceCard />
                    <PlaceCard />
                    <PlaceCard />
                    <PlaceCard />
                </div>
            </div>
        </div>
    )
}

export default MainArtist;