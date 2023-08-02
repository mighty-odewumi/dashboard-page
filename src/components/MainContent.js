import OrderListing from "./OrderListing";
import SummaryCards from "./SummaryCards";
// import { handleDropdownClick } from "./SummaryCards";

export default function MainContent() {

  return (
    <div className="main-content-container">
      <SummaryCards />

      <section className="main-content">
        <div className="left-info">
          <div className="top-info">
            <div className="top-left-info">
              <section className="section-heading">
                <h3>Marketing</h3>

                <span>
                  This week
                  <img
                    src="/assets/chevron-down1.svg"
                    alt="down icon"
                    className="down-icon"
                    //{onClick={handleDropdownClick}}
                  />
                </span>
              </section>

              <div className="key-maps">
                <div className="key-map key-map1">
                  <span className="key-blue key-color"></span>
                  <span className="key-text">Acquisition</span>
                </div>

                <div className="key-map key-map2">
                  <span className="key-pink key-color"></span>
                  <span className="key-text">Purchase</span>
                </div>

                <div className="key-map key-map3">
                  <span className="key-green key-color"></span>
                  <span className="key-text">Retention</span>
                </div>
              </div>

              <img
                src="/assets/group2.svg"
                className="graph-img"
                alt="a donut graph"
              />
            </div>

            <div className="top-right-info">
              <div className="product-info">
                <section className="section-heading">
                  <img
                    src="/assets/folder.svg"
                    className="card-icon bag-icon"
                    alt="graph icon"
                  />
                </section>

                <section className="card-info-container">
                  <div className="title-number title-number1">
                    <span className="title">All Products</span>

                    <span className="number number1">45</span>
                  </div>

                  <div className="title-number title-number2">
                    <span className="title">Active</span>

                    <span className="number number2">
                      32 <small className="small-colored">+24%</small>
                    </span>
                  </div>
                </section>
              </div>

              <div className="abandoned-cart-info">
                <section className="section-heading">
                  <img
                    src="/assets/shopping-cart.svg"
                    className="card-icon cart-icon"
                    alt="graph icon"
                  />

                  <span>
                    This week
                    <img
                      src="/assets/chevron-down1.svg"
                      alt="down icon"
                      className="down-icon"
                      // {onClick={handleDropdownClick}}
                    />
                  </span>
                </section>

                <section className="card-info-container">
                  <div className="title-number title-number1">
                    <span className="title">Abandoned Cart</span>

                    <span className="number number1">
                      20% <small>+0.00%</small>
                    </span>
                  </div>

                  <div className="title-number title-number2">
                    <span className="title">Customers</span>

                    <span className="number number2">30</span>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="bottom-info">
            <section className="section-heading">
              <div className="summary-sales">
                <h3>Summary</h3>

                <span>
                  Sales
                  <img
                    src="/assets/chevron-down1.svg"
                    alt="down icon"
                    className="down-icon"
                  />
                </span>
              </div>

              <span>
                Last 7 Days
                <img
                  src="/assets/chevron-down1.svg"
                  alt="down icon"
                  className="down-icon"
                />
              </span>
            </section>

            <img
              src="/assets/graphBar.png"
              className="graph-bar"
              alt="a graph bar"
            />
          </div>
        </div>

        <OrderListing />
      </section>
      
    </div>
  );
}

