import { FormEvent, useState } from 'react';
import { json, useLoaderData, useNavigate } from 'react-router-dom';

import { Form, FormInputSection } from '../../component/UI/Form/Form';
import { Input } from '../../component/UI/Forms/Input/Input';
import TeamTable from '../../component/Team/TeamTable';
import { Button } from '../../component/UI/Button/Button';

import { getPlayers } from '../../services/players';
import { createTeam } from '../../services/teams';

import styles from './TeamIncantation.module.css';

export interface PlayerProps {
  age: number;
  id: number;
  name: string;
  position: string;
  team_id: number;
}

type NameProp = string;

type DescriptionProp = string;

type newTeamProps = {
  name: NameProp;
  slogan: DescriptionProp;
  players: number[];
};

const TeamIncantation = () => {
  const navigate = useNavigate();
  const dataLoader: PlayerProps[] = useLoaderData() as PlayerProps[];

  const [name, setName] = useState<NameProp>('');
  const [description, setDescription] = useState<DescriptionProp>('');

  const [availablePlayers, setAvailablePlayers] = useState<PlayerProps[]>(dataLoader);
  const [availablePlayersReset, setAvailablePlayersReset] = useState<PlayerProps[]>(dataLoader);

  const handleRemovePlayer = (id: number) => {
    setAvailablePlayers((prev) => prev.filter((player) => player.id !== id));
  };

  const handleReset = () => {
    setAvailablePlayers([...availablePlayersReset]);
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ name });
    console.log({ description });

    // Extracting only the id values
    const arrayOfPlayerIds = availablePlayers.map((player) => player.id);

    const newTeam: newTeamProps = {
      name,
      slogan: description,
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

        setName('');
        setDescription('');

        navigate(`/teams/${res.newTeamId}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h1>Team Incantation</h1>
      <Form onSubmit={handleOnSubmit}>
        <FormInputSection>
          <Input
            label="Name"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Description"
            id="description"
            name="name"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormInputSection>

        <TeamTable data={availablePlayers} handleRemovePlayer={handleRemovePlayer} />
        <div className={styles.buttons}>
          <Button type="button" onClick={() => handleReset()}>
            Reset Players
          </Button>
          <Button variant="secondary">Create Team</Button>
        </div>
      </Form>
    </>
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
