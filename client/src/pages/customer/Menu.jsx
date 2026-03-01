import { useEffect, useState } from "react";
import API from "../../api/axios";
import Navbar from "../../components/layout/Navbar";

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const { data } = await API.get("/menu");
      setItems(data);
    };
    fetchMenu();
  }, []);

  return (
    <>
      <Navbar />
      <h2>Menu</h2>
      {items.map((item) => (
        <div key={item._id}>
          <h4>{item.name}</h4>
          <p>₹ {item.price}</p>
        </div>
      ))}
    </>
  );
};

export default Menu;