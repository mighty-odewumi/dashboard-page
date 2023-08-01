/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <img src="/assets/logo.png" alt="metrix logo" className="logo-img" />

        <div className="top-menu">
          <ul>
            <li>
              <a href="#"  className="active">
                <img
                  src="/assets/category.svg"
                  alt="icon"
                  className="sidebar--icon active--icon"
                />
                <span className="sidebar--menu-text active--text">
                  Dashboard
                </span>
              </a>
            </li>

            <li>
              <img src="/assets/bag.svg" alt="icon" className="sidebar--icon" />

              <span className="sidebar--menu-text">Orders</span>

              <span className="sidebar--number">3</span>
            </li>

            <li>
              <img
                src="/assets/user.svg"
                alt="icon"
                className="sidebar--icon"
              />

              <span className="sidebar--menu-text">Customers</span>
            </li>

            <li>
              <img
                src="/assets/folder.svg"
                alt="icon"
                className="sidebar--icon"
              />

              <span className="sidebar--menu-text">Inventory</span>
            </li>

            <li>
              <img
                src="/assets/chat.svg"
                alt="icon"
                className="sidebar--icon "
              />

              <span className="sidebar--menu-text">Conversations</span>

              <span className="sidebar--number">18</span>
            </li>

            <li>
              <img
                src="/assets/setting.svg"
                alt="icon"
                className="sidebar--icon"
              />

              <span className="sidebar--menu-text">Setting</span>
            </li>
          </ul>
        </div>

        <div className="bottom-menu">
          <ul>
            <li>
              <img
                src="/assets/headphones.svg"
                alt="icon"
                className="sidebar--icon"
              />
              <span className="sidebar--menu-text">Contact Support</span>
            </li>

            <li className="banner">
              <img
                src="/assets/gift.svg"
                alt="gift icon"
                className="sidebar--icon"
              />

              <span className="sidebar--menu-text">Free Gift awaits You!</span>

              <a href="https://www.google.com">
                <p>
                  Upgrade your account
                  <img
                    src="/assets/chevron-down2.svg"
                    alt="greater than icon"
                    className="sidebar--icon"
                  />
                </p>
              </a>
            </li>

            <li className="logout-section">
              <img src="/assets/logout.svg" alt="logout icon" />

              <span className="sidebar--menu-text">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

