import { useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';

import { CLIENT_URL, PLAYERS_URL } from '../../config';

import styles from './TeamIncantation.module.css';

interface PlayerProps {
  age: number;
  id: number;
  name: string;
  position: string;
  team_id: number;
}

const TeamIncantation = () => {
  const dataLoader: PlayerProps[] = useLoaderData() as PlayerProps[];
  console.log({ dataLoader });

  const [availablePlayers, setAvailablePlayers] = useState<PlayerProps[]>(dataLoader);

  const handleRemovePlayer = (id: number) => {
    console.log({ id });
    setAvailablePlayers((prev) => prev.filter((player) => player.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Team Incantation</h1>

      <form className={styles.form}>
        <section className={styles.section}>
          <div className={styles.section__field}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Name" required />
          </div>
          <div className={styles.section__field}>
            <label htmlFor="description">Description</label>
            <input id="description" name="description" type="text" placeholder="Description" />
          </div>
        </section>

        <div className={styles.table__conatainer}>
          <table className={styles.table}>
            <thead className={styles.table__header}>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>Special Ability</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className={styles.table__body}>
              {availablePlayers.map(({ age, id, name, position, team_id }: PlayerProps) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{position}</td>
                  <td>special ability</td>
                  <td>
                    <button type="button" onClick={() => handleRemovePlayer(id)}>
                      remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <button>Create Team</button>
        </div>
      </form>
    </div>
  );
};

export default TeamIncantation;

export const loader = async ({ request, params }: any) => {
  console.log('TeamIncantation Loader');

  const response = await fetch(CLIENT_URL + PLAYERS_URL + '/available', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    return json({
      isError: true,
      msg: 'Could not fetch products',
      status: response.status
    });
  } else {
    return response;
  }
};
