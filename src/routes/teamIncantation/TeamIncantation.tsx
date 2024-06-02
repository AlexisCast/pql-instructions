import styles from './TeamIncantation.module.css';

const TeamIncantation = () => {
  return (
    <div>
      <h1>Team Incantation</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Name" required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input id="description" name="description" type="text" placeholder="Description" />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>Special Ability</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>age</td>
                <td>position</td>
                <td>special ability</td>
                <td>
                  <button>remove</button>
                </td>
              </tr>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>age</td>
                <td>position</td>
                <td>special ability</td>
                <td>
                  <button>remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button>Create Team</button>
      </form>
    </div>
  );
};

export default TeamIncantation;
