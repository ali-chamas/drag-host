import { useContext, useEffect, useState } from "react";
import GamesFilter from "./components/GamesFilter";
import { gameType } from "../../../tools/data-types/gameType";

import Gamecard from "./components/Gamecard";
import Loader from "../../../common/components/Loader";
import { UserContext, UserContextType } from "../../../context/userContext";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { GamesContext, GamesContextType } from "../../../context/gamesContext";

const Games = () => {
  const { user } = useContext(UserContext) as UserContextType;

  const { globalGames } = useContext(GamesContext) as GamesContextType;

  const [games, setGames] = useState<[gameType] | []>([]);
  const [filteredGames, setFilteredGames] = useState<[gameType] | []>(games);
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<boolean>(false);

  const getApprovedGames = async () => {
    setLoading(true);

    if (globalGames) {
      const approvedGames = globalGames.filter(
        (e: gameType) => e.isApproved == false
      ) as [gameType];
      setGames(approvedGames);
    }
    setLoading(false);
  };

  const getFinalGamesArray = () => {
    if (user?.games.length && user?.games.length > 0) {
      const gamesWithNoUser = games.filter(
        (game) => !user?.games.find((userGame) => game._id === userGame._id)
      );

      setFilteredGames(user?.games.concat(gamesWithNoUser) as [gameType]);
    } else {
      setFilteredGames(games);
    }
  };
  console.log(filteredGames);

  const checkIfGameInProgress = () => {
    user?.games.map((game) => {
      if (game.isStarted && !game.isComplete) {
        setProgress(true);
      }
    });
  };

  useEffect(() => {
    getApprovedGames();
  }, [globalGames.length]);

  //in a seperate use effect to prevent fetching twice
  useEffect(() => {
    getFinalGamesArray();
  }, [games.length, user]);

  useEffect(() => {
    checkIfGameInProgress();
  }, [filteredGames.length]);

  return (
    <div className="flex flex-col mt-12 gap-12 min-h-[80vh] ">
      <h1 className="text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] self-center">
        CHOOSE YOUR MISSION
      </h1>
      <div className="self-end">
        <GamesFilter setFiltered={setFilteredGames} games={games} />
      </div>
      {loading ? (
        <div className="self-center">
          <Loader />
        </div>
      ) : (
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
          {filteredGames.length > 0 ? (
            filteredGames.map((game, i) => (
              <div key={i}>
                <SwiperSlide>
                  <Gamecard game={game} user={user} checkProgress={progress} />
                </SwiperSlide>
              </div>
            ))
          ) : (
            <SwiperSlide>No games yet</SwiperSlide>
          )}
        </Swiper>
      )}
    </div>
  );
};

export default Games;