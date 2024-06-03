import { useEffect, useState } from 'react';
import { json, useRouteLoaderData } from 'react-router-dom';

import TeamTable from '../../component/Team/TeamTable';
import { TeamProps } from '../teams/Teams';
import { PlayerProps } from '../teamIncantation/TeamIncantation';

import { CLIENT_URL, PLAYERS_URL, TEAMS_URL } from '../../config';

import styles from './TeamDetail.module.css';
interface TeamDetailProps {
  team: TeamProps;
  players: PlayerProps[];
}

const TeamDetail = () => {
  const routeLoaderData: TeamDetailProps = useRouteLoaderData('team-detail') as TeamDetailProps;

  const [teamPlayers, setTeamPlayers] = useState<PlayerProps[]>([]);
  const { players, team } = routeLoaderData;

  // to filter players that belong to the team
  useEffect(() => {
    const playersOfCurrentTeam = players.filter((player) => player.team_id === team.id);

    setTeamPlayers(playersOfCurrentTeam);
  }, [routeLoaderData]);
  //TODO: style the component
  return (
    <div className={styles.container}>
      <h1>Team</h1>
      <h2>{team.name}</h2>
      <h3>{team.slogan}</h3>
      {/* <ul>
        {teamPlayers.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul> */}
      <TeamTable data={teamPlayers} showRemove={false} />
    </div>
  );
};

export default TeamDetail;

export const loader = async ({ request, params }: any) => {
  const id = params.teamId;

  //TODO: use service functions
  const [teamResponse, playersResponse] = await Promise.all([
    fetch(CLIENT_URL + TEAMS_URL + '/' + id),
    fetch(CLIENT_URL + PLAYERS_URL)
  ]);

  //TODO: !response.ok

  const teamData = await teamResponse.json();
  const playersData = await playersResponse.json();

  return json({
    team: teamData,
    players: playersData
  });
};
