import { useState } from "react";
import API from "../../api/axios";
import Navbar from "../../components/Navbar";

const Reservation = () => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/reservations", form);
    alert("Reservation booked");
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Book a Table</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="date"
            name="date"
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            onChange={handleChange}
          />

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            onChange={handleChange}
          />

          <button type="submit">Reserve</button>
        </form>
      </div>
    </>
  );
};

export default Reservation;