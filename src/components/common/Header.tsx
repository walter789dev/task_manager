import { FC } from "react";

interface PropsHeader {
  image: string;
  title: string;
}


const Header: FC<PropsHeader> = ({ image, title }) => {
  const date = new Date();
  const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

  return (
    <header className="relative h-40">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover brightness-75"
          src={image}
          alt="Imagen de fondo"
        />
      </div>
      <div className="relative h-full flex items-center justify-between px-10 text-white">
        <div>
          <span className="text-[14px]">Proyect / {title}</span>
          <h1 className="text-3xl">{title}</h1>
        </div>
        <span className="block mt-13">{formatDate}</span>
      </div>
    </header>
  );
};

export default Header;
