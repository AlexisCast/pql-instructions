import { json, useLoaderData, useNavigate } from 'react-router-dom';

import { getTeams } from '../../services/teams';

import styles from './Teams.module.css';
import { Button } from '../../component/UI/Button/Button';

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
              <h2>{team.name}</h2>
              <h3>{team.slogan}</h3>
              <div>
                <Button onClick={() => handleShowTeam(team.id)}>Show Full Team</Button>
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
