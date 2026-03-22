import { useEffect, useState } from "react";
import API from "../../api/axios";
import Navbar from "../../components/Navbar";

const ManageReservations = () => {

  const [reservations, setReservations] = useState([]);

  useEffect(() => {

    const fetchReservations = async () => {

      const res = await API.get("/reservations");

      setReservations(res.data);

    };

    fetchReservations();

  }, []);

  return (

    <>
      <Navbar />

      <div className="dashboard">

        <h2>Manage Reservations</h2>

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>User</th>
            </tr>

          </thead>

          <tbody>

            {reservations.map((r) => (

              <tr key={r._id}>

                <td>{r.user?.name}</td>
                <td>{new Date(r.date).toLocaleDateString()}</td>
                <td>{r.time}</td>
                <td>{r.guests}</td>
                <td>{r.user?.email}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </>
  );
};

export default ManageReservations;