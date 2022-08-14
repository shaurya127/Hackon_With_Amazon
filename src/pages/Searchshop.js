import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
import { listShops } from "../api/queries";
import { bynameandlocation } from "../api/queries";
import { bylocation } from "../api/queries";
import SearchBar from "material-ui-search-bar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slotbook from "./Slotbook";
import Slot from "./Slots";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Shops = (shops) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  if (!shops.arr.length) {
    return <h3>No Shop Available</h3>;
  }

  return (
    <div>
      {shops.arr.map(({ id, name, owner, location }) => (
        <Card className={classes.root} key={id}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Shop Name
            </Typography>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Address
            </Typography>
            <Typography variant="body2" component="p">
              {location}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Slot
              slotno="1"
              shopid={id}
              starttime="10am"
              endtime="2:00pm"
              name={name}
              location={location}
            />
            <Slot
              slotno="2"
              shopid={id}
              starttime="3:00pm"
              endtime="6:00pm"
              name={name}
              location={location}
            />
            <Slot
              slotno="3"
              shopid={id}
              starttime="6:01pm"
              endtime="9:30pm"
              name={name}
              location={location}
            />
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

//getshop component
const Getshops = () => {
  const [shops, setshops] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shopname, setshopname] = useState("");
  const [shoplocation, setshoplocation] = useState("");
  const [bookslotclick, setbookslotclick] = useState(false);
  const [idval, setid] = useState("");
  // useEffect(() => {
  //   fetchshops();
  // }, [shopname, shoplocation]);

  const fetchshops = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql(
        graphqlOperation(bylocation, {
          location: shoplocation,
        })
      );
      const shops = data.bylocation.items;
      // console.log(shops);

      setshops(shops);
      setid(shops[0].id);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <SearchBar
        value={shoplocation}
        onChange={(newValue) => setshoplocation(newValue)}
        onRequestSearch={() => fetchshops()} placeholder="Copy and paste location of product to search shop"
      />
      <Shops arr={shops} />
      {/* {
        bookslotclick===true && (<Slotbook id={idval} />)
      } */}
    </div>
  );
};

export default Getshops;
