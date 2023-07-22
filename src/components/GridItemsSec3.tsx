type Props = {
  author: string;
  head: string;
  text: string;
  imgP?: string;
};

const GridItemsSec3 = ({ author, head, text, imgP }: Props) => {
  return (
    <div className="w-full bg-white h-[450px]">
      <img src={imgP} alt="imgP" className="w-full h-[200px] object-cover " />
      <div className="w-full px-5 leading-tight mt-5">
        <p className="text-[12px] mb-3 text-gray-p">by {author}</p>
        <div className="text-gray-head hover:text-lime-green cursor-pointer">
          <h3 className="mb-3">{head}</h3>
        </div>
        <p className="text-xs md:text-sm text-gray-p overflow-hidden">{text}</p>
      </div>
    </div>
  );
};

export default GridItemsSec3;
