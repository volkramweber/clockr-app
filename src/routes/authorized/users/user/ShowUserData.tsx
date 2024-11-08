import { useTranslation } from 'react-i18next';

const ShowUserData = ({ user }) => {
  const { t } = useTranslation();
  return user ? (
    <table className="table">
      <tbody>
        <tr>
          <td>E-Mail</td>
          <td>{user.username}</td>
        </tr>
        <tr>
          <td>Nachname</td>
          <td>{user.lastname}</td>
        </tr>
        <tr>
          <td>Vorname</td>
          <td>{user.firstname}</td>
        </tr>
        <tr>
          <td>Bundesland</td>
          <td>{t(`germanStates.${user.germanState}`)}</td>
        </tr>
        <tr>
          <td>Administrator</td>
          <td>{t(`user.isAdmin.${user.isAdmin?.toString()}`)}</td>
        </tr>
        <tr>
          <td>Archiviert</td>
          <td>{t(`user.isArchived.${user.isArchived?.toString()}`)}</td>
        </tr>
      </tbody>
    </table>
  ) : null;
};

export default ShowUserData;
