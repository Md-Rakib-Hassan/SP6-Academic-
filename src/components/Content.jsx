
const Content = () => {
    return (
        <div>
            <section className="section__container banner__container" id="special">
      <div className="banner__card">
        <p>TRY IT OUT TODAY</p>
        <h4>MOST POPULAR BURGER</h4>
      </div>
      <div className="banner__card">
        <p>TRY IT OUT TODAY</p>
        <h4>MORE FUN<br />MORE TASTE</h4>
      </div>
      <div className="banner__card">
        <p>TRY IT OUT TODAY</p>
        <h4>FRESH & CHILI</h4>
      </div>
    </section>

    <section className="section__container order__container" id="menu">
      <h3>ALWAYS TASTEY BURGER</h3>
      <h2 className="section__header">CHOOSE & ENJOY</h2>
      <p className="section__description">
        Whether you crave classNameic flavors or daring combinations, this is where
        your culinary journey begins. Indulge your cravings and savor every bite
        as you create your personalized burger experience with Burger Company.
      </p>
      <div className="order__grid">
        <div className="order__card">
          <img src="../assets/order-1.png" alt="order" />
          <h4>Chicken Burger</h4>
          <p>
            Sink your teeth into the timeless perfection of our Chicken Burger,
            an experience that never goes out of style.
          </p>
          <button className="btn">ORDER NOW</button>
        </div>
        <div className="order__card">
          <img src="../assets/order-2.png" alt="order" />
          <h4>Veggie Delight Burger</h4>
          <p>
            Embrace the vibrant flavors of our Veggie Delight Burger, a
            celebration of freshness and wholesome goodness.
          </p>
          <button className="btn">ORDER NOW</button>
        </div>
        <div className="order__card">
          <img src="../assets/order-3.png" alt="order" />
          <h4>BBQ Bacon Burger</h4>
          <p>
            Indulge in a symphony of smoky, savory flavors with our BBQ Bacon
            Burger, grilled and topped with crispy bacon.
          </p>
          <button className="btn">ORDER NOW</button>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Content;