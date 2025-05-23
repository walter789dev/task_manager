import ImageLogo from "../../assets/svg/logo.svg";

// Componente visual que muestra el logo de la app
const Logo = () => {
  return (
    <div className="flex flex-col items-center w-fit">
      <div className="w-17 h-17">
        <img
          className="object-cover"
          src={ImageLogo}
          alt="Logo de la compañia"
        />
      </div>
      <h3 className="text-xl font-bold">
        <span className="inline-block mr-1 text-[#3A5B9D]">Max</span>
        Power
      </h3>
    </div>
  );
};

export default Logo;
