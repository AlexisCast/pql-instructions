import { FormEvent, useRef, useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';

import { getPlayers } from '../../services/players';
import { createTeam } from '../../services/teams';

import styles from './TeamIncantation.module.css';

interface PlayerProps {
  age: number;
  id: number;
  name: string;
  position: string;
  team_id: number;
}

type FormValues = {
  name: FormDataEntryValue;
  description: FormDataEntryValue;
};

type newTeamProps = {
  name: string;
  slogan: string;
  players: number[];
};

type Role = 'Seeker' | 'Beater' | 'Chaser' | 'Keeper';

type Abilities = {
  [key in Role]: string[];
};

const TeamIncantation = () => {
  const dataLoader: PlayerProps[] = useLoaderData() as PlayerProps[];

  const [availablePlayers, setAvailablePlayers] = useState<PlayerProps[]>(dataLoader);
  const [availablePlayersReset, setAvailablePlayersReset] = useState<PlayerProps[]>(dataLoader);
  const form = useRef<HTMLFormElement>(null);

  const handleRemovePlayer = (id: number) => {
    setAvailablePlayers((prev) => prev.filter((player) => player.id !== id));
  };

  const handleReset = () => {
    setAvailablePlayers([...availablePlayersReset]);
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as FormValues;

    console.log({ data });

    // Extracting only the id values
    const arrayOfPlayerIds = availablePlayers.map((player) => player.id);

    const newTeam: newTeamProps = {
      name: data.name as string,
      slogan: data.description as string,
      players: arrayOfPlayerIds
    };
    console.log({ newTeam });

    try {
      const response = await createTeam(newTeam);
      console.log('Response status:', response.status);

      if (!response.ok) {
        const res = await response.json();
        console.log('Error:', res);
      } else {
        const res = await response.json();
        console.log('Team created', res);
        form.current?.reset();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const abilities: Abilities = {
    Seeker: ['Enhanced Vision', 'Speed Burst'],
    Beater: ['Power Swing', 'Iron Defense'],
    Chaser: ['Accurate Pass', 'Agility'],
    Keeper: ['Quick Reflexes', 'Wall Defense']
  };

  return (
    <div className={styles.container}>
      <h1>Team Incantation</h1>

      <form className={styles.form} onSubmit={handleOnSubmit} ref={form}>
        <section className={styles.section}>
          <div className={styles.section__field}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Name" required />
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
                  <td>
                    {abilities[`${position}` as Role].map((ability, index) => (
                      <p key={index}>{ability}</p>
                    ))}
                  </td>
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
          <button type="button" onClick={() => handleReset()}>
            Reset Players
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamIncantation;

export const loader = async ({ request, params }: any) => {
  console.log('TeamIncantation Loader');

  const response = await getPlayers();

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch players...' },
      {
        status: 500
      }
    );
  } else {
    return response;
  }
};
