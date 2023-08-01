export default function SummaryCards() {
  return (
    
    <div className="summary-cards-container">
        <div className="summary-card">
          <section className="section-heading">
            <img
              src="/assets/graph.svg"
              className="card-icon graph-icon"
              alt="graph icon"
            />

            <span>
              This week
              <img
                src="/assets/chevron-down1.svg"
                alt="down icon"
                className="down-icon"
              />
            </span>
          </section>

          <section className="card-info-container">
            <div className="title-number title-number1">
              <span className="title">Sales</span>

              <span className="number number1">4,000,000.00</span>
            </div>

            <div className="title-number title-number2">
              <span className="title">Volumes</span>

              <span className="number number2">
                450 <small>+20.00%</small>
              </span>
            </div>
          </section>
        </div>

        <div className="summary-card">
          <section className="section-heading">
            <img
              src="/assets/user.svg"
              className="card-icon user-icon"
              alt="user icon"
            />

            <span>
              This week
              <img
                src="/assets/chevron-down1.svg"
                alt="down icon"
                className="down-icon"
              />
            </span>
          </section>

          <section className="card-info-container">
            <div className="title-number title-number1">
              <span className="title">Customers</span>

              <span className="number number1">
                1250 <small>+15.80%</small>
              </span>
            </div>

            <div className="title-number title-number2">
              <span className="title">Active</span>

              <span className="number number2">
                1180 <small>+20.00%</small>
              </span>
            </div>
          </section>
        </div>

        <div className="summary-card summary-card-3">
          <section className="section-heading">
            <img
              src="/assets/bag.svg"
              className="card-icon bag-icon"
              alt="bag icon"
            />

            <span>
              This week
              <img
                src="/assets/chevron-down1.svg"
                alt="down icon"
                className="down-icon"
              />
            </span>
          </section>

          <section className="card-info-container">
            <div className="title-number title-number1">
              <span className="title">All Orders</span>

              <span className="number number1">450</span>
            </div>

            <div className="title-number title-number2">
              <span className="title">Pending</span>

              <span className="number number2">5</span>
            </div>

            <div className="title-number title-number3">
              <span className="title">Completed</span>

              <span className="number number3">445</span>
            </div>
          </section>
        </div>
    </div>
  )
}
