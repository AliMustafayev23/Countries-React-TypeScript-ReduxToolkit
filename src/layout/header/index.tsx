import { useSelector, useDispatch } from "react-redux";
import { FaRegLightbulb, FaRegMoon } from "react-icons/fa";
import { dark, light } from "../../redux/slice/modeSlice";
import { RootState } from "../../redux/store";
const Header = () => {
  const mode = useSelector((state: RootState) => state.mode);

  const dispatch = useDispatch();

  return (
    <div
      className={
        mode.mode
          ? " bg-white text-black py-8  font-nunito drop-shadow-xl"
          : "bg-grey text-white py-8  font-nunito drop-shadow-xl"
      }
    >
      <div className="container flex items-center justify-around">
        <h1 className="text-xl">Where in the world?</h1>
        <div
          className={
            mode.mode === true
              ? "flex items-center justify-center gap-3"
              : "hidden"
          }
          onClick={() => dispatch(light())}
        >
          <FaRegMoon />
          <h3>Dark Mode</h3>
        </div>
        <div
          className={
            mode.mode === false
              ? "flex items-center justify-center gap-3"
              : "hidden"
          }
          onClick={() => dispatch(dark())}
        >
          <FaRegLightbulb />
          <h3>Light Mode</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
