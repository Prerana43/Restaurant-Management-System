import { useEffect, useState } from "react";
import API from "../../api/axios";
import Navbar from "../../components/Navbar";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await API.get("/menu");
      setMenu(res.data);
    };

    fetchMenu();
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Restaurant Menu</h1>

        <div className="card-container">
          {menu.map((item) => (
            <div className="card" key={item._id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>₹ {item.price}</p>
              <button>Order</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;