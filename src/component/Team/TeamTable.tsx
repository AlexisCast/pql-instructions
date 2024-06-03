import { PlayerProps } from '../../routes/teamIncantation/TeamIncantation';
import { Button } from '../UI/Button/Button';

import styles from './TeamTable.module.css';

type DataProps = {
  data: PlayerProps[];
  handleRemovePlayer: (id: number) => void;
};

export type Role = 'Seeker' | 'Beater' | 'Chaser' | 'Keeper';

type Abilities = {
  [key in Role]: string[];
};

const TeamTable = ({ data, handleRemovePlayer }: DataProps) => {
  const abilities: Abilities = {
    Seeker: ['Enhanced Vision', 'Speed Burst'],
    Beater: ['Power Swing', 'Iron Defense'],
    Chaser: ['Accurate Pass', 'Agility'],
    Keeper: ['Quick Reflexes', 'Wall Defense']
  };

  return (
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
          {data.map(({ age, id, name, position, team_id }: PlayerProps) => (
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
                <Button
                  className={styles.button}
                  type="button"
                  onClick={() => handleRemovePlayer(id)}>
                  remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
