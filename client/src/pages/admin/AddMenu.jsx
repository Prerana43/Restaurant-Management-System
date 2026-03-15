import { useState } from "react";
import API from "../../api/axios";

const AddMenu = () => {

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: ""
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

      await API.post("/menu", form);

      alert("Menu item added successfully");

      setForm({
        name: "",
        description: "",
        price: "",
        category: ""
      });

    } catch (err) {

      console.log(err);
      alert("Error adding menu item");

    }

  };

  return (

    <div className="dashboard">

      <h2>Add Menu Item</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <button type="submit">
          Add Item
        </button>

      </form>

    </div>
  );
};

export default AddMenu;