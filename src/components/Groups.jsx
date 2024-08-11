import { useEffect, useState } from "react";

const GroupTable = ({ group }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`/group${group}.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: " + data);
        if (data.teams && data.teams.length > 0) {
          setTeams(data.teams);
        }
      });
  }, [group]);

  return (
    <div className="relative inline-block border border-[#D4E2EA] mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="249"
        height="38"
        viewBox="0 0 249 38"
        fill="none"
      >
        <path
          d="M0.928345 0.126221H249.178V42.1262L0.928345 32.9387V0.126221Z"
          fill={group === "A" ? "#00BA5D" : "#EB3323"}
        />
      </svg>
      <h2 className="font-extra absolute top-2 left-[50%] transform -translate-x-[50%] flex justify-center items-center">
        GROUP {group}
      </h2>

      {teams.length > 0 &&
        teams.map((team) => (
          <div
            key={team.name}
            className="flex justify-center items-center font-eurobold text-[12px] gap-2 my-3"
          >
            <div>{team.pos}</div>
            <div className="flex gap-2 bg-[#0000004d] p-2 w-44 items-center">
              <img src={`./src/assets/${team.logo}`} className="h-5" alt="" />
              <div>{team.name}</div>
            </div>
            <div className="flex justify-center items-center bg-white text-black h-8 w-8">
              {team.points}
            </div>
          </div>
        ))}
    </div>
  );
};

const Groups = () => {
  return (
    <div className="flex flex-col items-center">
      <GroupTable group="A" />
      <GroupTable group="B" />
    </div>
  );
};

export default Groups;
