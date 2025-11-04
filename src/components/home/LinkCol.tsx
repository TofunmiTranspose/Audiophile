import Button2 from "../../utils/Button2";

type LinkDetail = {
  title: string;
  link: string;
};

const LinkCol = ({ detail: { title, link } }: { detail: LinkDetail }) => {
  return (
    <div className="w-full h-full md:p-10 flex flex-col gap-3 md:gap-5 justify-center md:pl-25 rounded-lg">
      <h2 className="font-bold manrope text-2xl md:text-3xl">{title}</h2>
      <Button2 link={link} />
    </div>
  );
};

export default LinkCol;
