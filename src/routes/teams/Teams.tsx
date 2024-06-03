import { json, useLoaderData, useNavigate } from 'react-router-dom';

import { getTeams } from '../../services/teams';

import styles from './Teams.module.css';

export interface TeamProps {
  id: number;
  name: string;
  slogan: string;
}

const Teams = () => {
  const navivate = useNavigate();
  const dataLoader: TeamProps[] = useLoaderData() as TeamProps[];

  const handleShowTeam = (id: number) => {
    navivate(`/teams/${id}`);
  };

  return (
    <>
      <h1>Teams Page</h1>
      <ul className={styles.product_list}>
        {dataLoader.map((team) => (
          <li key={team.id}>
            <div className={styles.card}>
              <h3>{team.name}</h3>
              <p>{team.slogan}</p>
              <div>
                <button onClick={() => handleShowTeam(team.id)}>Show Full Team</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Teams;

export const loader = async ({ request, params }: any) => {
  console.log('TeamIncantation Loader');

  const response = await getTeams();

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch teams...' },
      {
        status: 500
      }
    );
  } else {
    return response;
  }
};
