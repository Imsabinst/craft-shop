import React, { useEffect, useState } from "react";
import Item from "../../Components/item";
import axios from "axios";

import "./newCollection.css";

const NewCollection = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    const getNewCollection = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}api/v1/product/getNewCollection`
      );

      if (data?.success) {
        setNewCollection(data.newCollection);
      }
    };
    getNewCollection();
  }, []);

  return (
    <div className="newCollection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollection &&
          newCollection.map((item) => <Item key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default NewCollection;
