
const Reservation = () => {
    return (
        <section className="reservation" id="contact">
      <div className="section__container reservation__container">
        <h3>RESERVATION</h3>
        <h2 className="section__header">BOOK YOUR TABLE</h2>
        <form action="/">
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="date" placeholder="DATE" />
          <input type="time" placeholder="TIME" />
          <input type="number" placeholder="PEOPLE" />
          <button className="btn" type="submit">FIND TABLE</button>
        </form>
      </div>
      <img
        src="assets/reservation-bg-1.png"
        alt="reservation"
        className="reservation__bg-1"
      />
      <img
        src="assets/reservation-bg-2.png"
        alt="reservation"
        className="reservation__bg-2"
      />
    </section>
    );
};

export default Reservation;