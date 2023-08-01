import MainContent from "./MainContent";

export default function MainPage() {
  return (
    <main className="main-page">

      <div className="top-nav">
        <section className="top-nav-upper">
          <h2>Dashboard</h2>

          <div className="top-nav-right-items">
            <span className="shop-name">
              Nanny's shop
              <img
                src="/assets/chevron-down1.svg"
                alt="dropdown icon"
                className="dropdown-icon"
              />
            </span>

            <img
              src="/assets/notification.svg"
              alt="icon"
              className="notification-icon"
            />

            <img
              src="/assets/avatar.png"
              alt="user avatar"
              className="avatar"
            />
          </div>
        </section>

        <div className="home-icon-container">
          <img src="/assets/home.svg" alt="home icon" className="home-icon" />
        </div>
      </div>

      <MainContent />  
    </main>
  );
}
