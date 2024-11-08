import CreateUser from './CreateUser';
import { useListUsersQuery } from '../../../redux/apis/userManagementApi';
import { useEffect, useState } from 'react';
import DeleteUser from './DeleteUser';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCrown } from '@fortawesome/free-solid-svg-icons';

const Users = () => {
  const { data: users } = useListUsersQuery();

  const [usersToShow, setUsersToShow] = useState([]);
  const [showArchivedUsers, setShowArchivedUsers] = useState(false);

  useEffect(() => {
    if (users) {
      setUsersToShow(
        users
          ?.filter((u) => (showArchivedUsers ? true : !u.isArchived))
          ?.slice()
          ?.sort((a, b) =>
            `${a.lastname}${a.firstname}`
              ?.toLowerCase()
              ?.localeCompare(`${b.lastname}${b.firstname}`?.toLowerCase()),
          ),
      );
    }
  }, [users, showArchivedUsers]);

  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-12 col-md-8">
          <h4>Benutzerverwaltung</h4>
          <div className="form-check form-switch">
            <label className="form-check-label">
              <input
                type="checkbox"
                checked={showArchivedUsers}
                onChange={() => setShowArchivedUsers(!showArchivedUsers)}
                className="form-check-input"
              />
              Archivierte Benutzer anzeigen
            </label>
          </div>
        </div>
        <div className="col-12 col-md-4 text-end">
          <CreateUser />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>E-Mail</th>
                <th>Name</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {usersToShow?.map((user, uI) => (
                <tr key={uI}>
                  <td>
                    {user.username}
                    {user.isAdmin ? (
                      <FontAwesomeIcon icon={faCrown} className="ms-2" />
                    ) : null}
                  </td>
                  <td>
                    {user.lastname}
                    {user.lastname && user.firstname ? ', ' : null}
                    {user.firstname}
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <Link
                        to={`/users/${user.id}`}
                        className="btn btn-sm btn-primary"
                      >
                        <FontAwesomeIcon icon={faPencil} />
                      </Link>
                      <DeleteUser user={user} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
