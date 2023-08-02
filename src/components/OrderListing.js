import data from "./data";

export default function OrderListing() {

  const phoneData = data.map((val, index) => (
    <div className="order-listing" key={index}>
      <img
        src={val.imgUrl}
        alt="a mobile phone"
        className="phone-img"
      />

      <div className="listing-details">
        <span className="listing-name">{val.phoneName}</span>
        <span className="amount">#{val.amount} x {val.numberOfGoods}</span>
      </div>

      <section className="listing-date-status">
        <span className="date">{val.date}</span>
        <span className="status">{val.status}</span>
      </section>
    </div>
  ));

  return (
    <div className="right-info">
      <h4>Recent Orders</h4>
      {phoneData}
    </div>
  )
}
