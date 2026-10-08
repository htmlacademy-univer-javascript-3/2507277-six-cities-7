import { AppRoute } from '../../const';

type HeaderProps = {
  isAuthorized?: boolean;
  favoritesCount?: number;
  showNavigation?: boolean;
};

function Header({ isAuthorized = false, favoritesCount = 0, showNavigation = true }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href={AppRoute.Main}>
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          {showNavigation && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href={isAuthorized ? AppRoute.Favorites : AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {isAuthorized ? (
                      <>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">{favoritesCount}</span>
                      </>
                    ) : <span className="header__login">Sign in</span>}
                  </a>
                </li>
                {isAuthorized && (
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#todo">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
