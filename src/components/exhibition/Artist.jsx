const Artist = ({name}) => {
    return (
        <div className="flex flex-col items-center gap-[2px]">
            <div className="w-[48px] h-[48px] rounded-[50px] bg-grey05"></div>
            <p className="font-semibold text-[14px]">{name}</p>
        </div>
    )
}

export default Artist;