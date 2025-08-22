import prevImg from "../../assets/prev.svg";

const Header = ({text, onClick}) => {
    return (
        <div className="pr-[16px] mt-[4px]">
        <div className="w-full h-14 bg-white flex items-center mb-[15px]">
            <div className="flex-1 flex justify-start">
                <button className="cursor-pointer" onClick={onClick}>
                    <img src={prevImg} alt="prev" className="w-6 h-6" />
                </button>
            </div>
            
            <div className="flex-1 flex justify-center">
                <h1 className="text-[16px] font-bold">
                    {text}
                </h1>
            </div>

            <div className="flex-1 flex justify-end"></div>
        </div></div>
    )
}

export default Header;