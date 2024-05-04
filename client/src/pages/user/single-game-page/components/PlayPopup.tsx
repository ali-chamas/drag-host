import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { modelType } from "../../../../tools/data-types/modelType";
import { useState } from "react";
import { gameType } from "../../../../tools/data-types/gameType";
import scratchImg from "../../../../assets/Scratch-cat.png";
const PlayPopup = ({
  gameId,
  open,
  setOpen,
  model,
  setTrigger,
  game,
}: {
  gameId: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  model: modelType;
  game: gameType;
}) => {
  const [complete, setComplete] = useState(game.isComplete);

  return (
    <div className="popup ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="popup-child flex flex-col gap-4 items-center"
      >
        <div className="flex justify-between items-center w-full ">
          <h1 className=" text-lg ">Play with your model</h1>

          <button onClick={() => setOpen(false)} className="text-xl ">
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col items-center gap-3 bg-black/25 rounded-md pb-3 m-auto">
          <img
            src={scratchImg}
            className="w-[220px] md:w-[250px] rounded-t-md"
            alt=""
          />
          Scratch!
          <button className="btn-primary-dark">Go!</button>
        </div>
        {complete ? (
          <button className="btn-primary-dark">Restart</button>
        ) : (
          <button className="btn-primary-white self-end mt-auto">
            Complete
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default PlayPopup;
