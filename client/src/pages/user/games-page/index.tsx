import { useContext, useEffect, useState } from "react";
import GamesFilter from "./components/GamesFilter";
import { gameType } from "../../../tools/data-types/gameType";

import Gamecard from "./components/Gamecard";

import { UserContext, UserContextType } from "../../../context/userContext";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { GamesContext, GamesContextType } from "../../../context/gamesContext";

const Games = () => {
  const { user } = useContext(UserContext) as UserContextType;

  const { approvedGames, gamesStateTrigger } = useContext(
    GamesContext
  ) as GamesContextType;

  const [filteredGames, setFilteredGames] = useState<[gameType] | []>();

  const [progress, setProgress] = useState<boolean>(false);

  const checkIfGameInProgress = () => {
    user?.games.map((game) => {
      if (game.isStarted && !game.isComplete) {
        setProgress(true);
      }
    });
  };

  useEffect(() => {
    setFilteredGames(approvedGames);
    console.log("triggered");
  }, [approvedGames?.length, gamesStateTrigger]);

  useEffect(() => {
    checkIfGameInProgress();
  }, [user]);

  // console.log(filteredGames);
  console.log(approvedGames);

  return (
    <div className="flex flex-col mt-12 gap-12 min-h-[80vh] ">
      <h1 className="text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] self-center">
        CHOOSE YOUR MISSION
      </h1>
      <div className="self-end">
        <GamesFilter setFiltered={setFilteredGames} games={approvedGames} />
      </div>

      {(filteredGames?.length as number) > 0 ? (
        <Swiper
          spaceBetween={30}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1900: {
              slidesPerView: 4,
            },
          }}
          className="w-full cursor-grab "
        >
          {filteredGames?.map((game, i) => (
            <SwiperSlide key={i}>
              <Gamecard game={game} user={user} checkProgress={progress} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <p className="text-lg lg:text-2xl">No games yet!</p>
        </div>
      )}
    </div>
  );
};

export default Games;
