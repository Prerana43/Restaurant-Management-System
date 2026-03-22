import { useState } from "react";
import API from "../../api/axios";
import Navbar from "../../components/Navbar";

const Reservations = () => {

  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/reservations", form);

      alert("Reservation submitted!");

      setForm({
        name: "",
        date: "",
        time: "",
        guests: ""
      });

    } catch (err) {

      console.log(err);
      alert("Reservation failed");

    }

  };

  return (

    <>
      <Navbar />

      <div className="dashboard">

        <h2>Table Reservation</h2>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
          />

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={form.guests}
            onChange={handleChange}
          />

          <button type="submit">
            Book Table
          </button>

        </form>

      </div>
    </>
  );
};

export default Reservations;