const Tag = ({text, id}) => {
    return (
        <div className={`flex py-[5px] px-[10px] rounded-[27px] text-[12px] w-fit border ${id % 2 === 1 ? 'bg-pink01 text-pink02 border-pink02' : 'bg-lightpurple02 text-purple_main border-purple02'}`}>
            <p># {text}</p>
        </div>
    )
}

export default Tag;