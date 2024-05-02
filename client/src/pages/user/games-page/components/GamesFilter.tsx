import { gameType } from "../../../../tools/data-types/gameType";

const GamesFilter = ({
  setFiltered,
  games,
}: {
  setFiltered: any;
  games: [gameType] | [];
}) => {
  const filterGames = (filter: string) =>
    setFiltered(games.filter((game) => game.level === filter));

  return (
    <select
      className="rounded-lg bg-black/25 border-2 outline-none border-white/40 p-2"
      onChange={(e) => filterGames(e.target.value)}
    >
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="Advanced">Adbanced</option>
    </select>
  );
};

export default GamesFilter;