import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <main>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>На главную</Link>
    </main>
  );
}

export default NotFoundPage;
