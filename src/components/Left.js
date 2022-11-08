import { IoIosArrowDropright } from "react-icons/io";
function Left() {
  return (
    <div className="esquerda">
      <h1>Subscribe our newslatter</h1>
      <p className="descricao">
        Browse local restaurants and businesses for delivery by antering your
        addrees blow.
      </p>
      <input
        className="inputStyle"
        type="text"
        placeholder="Enter your email adress"
      />
      <button className="button">
        <spam> Discover </spam> <IoIosArrowDropright className="icone" />
      </button>
    </div>
  );
}

export default Left;
