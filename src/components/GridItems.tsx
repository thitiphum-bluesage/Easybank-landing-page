type Props = {
  title: string;
  text: string;
  imageP: string;
};

const GridItems = ({ title, text, imageP }: Props) => {
  return (
    <div className="w-full h-[280px] text-center lg:text-left lg:mb-6">
      <img src={imageP} alt="imageP" className="mb-[30px] lg:mx-0 mx-auto" />
      <h2 className="mb-[25px] text-gray-head text-[25px]">{title}</h2>
      <p className="text-gray-p ">{text}</p>
    </div>
  );
};

export default GridItems;
