import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePageWrapper}>
      <header>
        <div className={s.headContainer}>
          <h1>Welcome to Car Rental</h1>
        </div>
      </header>

      <div className={s.homePageWrapper}>
        <div className={s.textWrapper}>
          <h2>Your Journey Starts Here</h2>
          <p>
            Experience the freedom of the open road with our premium car rental
            service.
          </p>
          <p>
            Whether you're a traveler exploring new destinations, a business
            <br />
            professional on the go, or a local resident in need of temporary
            transportation, Car Rental is here to meet all your vehicle needs.
          </p>
          <img
            className={s.imgHome}
            src="https://cdn.northropandjohnson.com/uploads/Ferrari-180707-car-portofino.jpg?auto=format&q=35&h=1"
            alt="Luxury car on a scenic road"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
