import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/shops";
import { API } from "aws-amplify";
import { listShops } from "../api/queries";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";

const Slotbook = (props) => {
  const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState("");
  const id = props.id;
  // const {id}=useParams();
  // const history = useHistory();
  //   const {shops } = useContext(ShopContext);
  const [shops, setshops] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchshops();
  }, []);

  const fetchshops = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listShops,
      });
      const shops = data.listShops.items;
      // console.log(shops);

      setshops(shops);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleScheduled = (date) => {};

  const shop = shops.find((shop) => {
    return shop.id === id;
  });
  console.log(id);
  if (!shop) {
    return <h3>Loading...</h3>;
  }

  const { name, owner, location } = shop;

  return (
    // <section className="shop-details">
    <div className="detail-description">
      <h2>{name}</h2>
      <h3>{owner}</h3>
      <h4> Address-{location}</h4>
      <DayTimePicker
        timeSlotSizeMinutes={15}
        isLoading={isScheduling}
        isDone={isScheduled}
        err={scheduleErr}
        onConfirm={handleScheduled}
      />
      {/* <button className="btn">Add to Cart</button> */}
    </div>
    // </section>
  );
};

export default Slotbook;
