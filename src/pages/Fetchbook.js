import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { listBooks } from "../api/queries";
import ScotchInfoBar from "./ScotchInfoBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MediaCard = ({ image, distance, name, count, location }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Product Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            <div>Distance in miles-{distance}</div>
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            <div>Address-{name}</div>
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            <div>Quantity available-{count}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Show full details
        </Button>
      </CardActions>
    </Card>
  );
};

const Searchbar = () => {
  const [books, setBooks] = useState([]);
  const [value, setValue] = useState("Location");
  const [filtered, setfiltered] = useState(books);
  const [patanhikyon, setpatanhikyon] = useState(books);
  // const handleSelect = (e) => {
  //   console.log(e);
  //   setValue(e);
  // };
  // const [products, setProduct] = useState(null);
  const [input, setinput] = useState(null);
  const [productname, setProductname] = useState(null);
  const [text, settext] = useState("Login");
  const [field, setfield] = useState(false);
  //   const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      //   setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listBooks,
        authMode: "API_KEY",
      });
      const books = data.listBooks.items;

      const featured = books.filter((book) => {
        // console.log(book.location);
        return !!book.featured;
      });
      setBooks(books);
      //   setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  function Type(event) {
    const name = event.target.value;
    setinput(name);
  }
  function Pname(event) {
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (event.target.value !== "") {
      // Assign the original list to currentList
      currentList = patanhikyon;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter((item) => {
        // change current item to lowercase
        const lc = item.product.toString().toLowerCase();
        // change search term to lowercase
        const filter = event.target.value.toString().toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      newList = patanhikyon;
    }
    // Set the filtered state based on what our rules added to newList

    setfiltered(newList);
    const name = event.target.value;
    setProductname(name);
  }
  function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
  function setClick() {
    if (text === "Login") {
      setfield(true);
      settext("Logout");
      fetchData();
    } else {
      settext("Login");
      setinput("");
      setfield(false);
      setpatanhikyon(books);
      setfiltered(books);
      setProductname("");
    }
  }
  const fetchData = async () => {
    const add = [];
    for (var i = 0; i < books.length; i++) {
      // console.log(books[i].name, input);
      const name = books[i].address;
      const product = books[i].title;
      const availability = books[i].count;
      const image = books[i].image;
      // if (product_name === productname) {
      let new_url =
        "https://www.mapquestapi.com/directions/v2/route?key=qzsc6KhG31nCmMhx8TBukwEXElNb87tP&from=" +
        input +
        "&to=" +
        name +
        "&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false";
      console.log(new_url);
      const response = await axios.get(new_url);
      const distance = response.data.route.distance;
      add.push({ distance, name, product, availability, image });
      // }
    }
    var n = add.length;
    if (value === "Location") {
      for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
          if (add[j].distance > add[j + 1].distance) {
            swap(add, j, j + 1);
          }
        }
      }
    } else {
      for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
          if (add[j].available < add[j + 1].available) {
            swap(add, j, j + 1);
          }
        }
      }
    }
    // setProduct(add);
    setfiltered(add);
    setpatanhikyon(add);
  };
  return (
    <div className="App">
      {/* <div style={{display:"flex",flexDirection:"column",justifyItems:"flex-start "}}>
      <h4>Search by {value}</h4>
      <h1>Amazingshop</h1>

      </div> */}

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <button onClick={setClick} className="fetch-button" variant="contained" color="primary">
          {" "}
          {text}{" "}
        </button>
        <input
          onChange={Type}
          placeholder="Enter your city"
          value={input}
          disabled={field}
        />
        <input
          onChange={Pname}
          placeholder="Enter name of product"
          value={productname}
        />
      </div>
      {/* <Box> */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-around",
          justifyItems: "center",
        }}
      >
        {filtered.map((item) => (
          <MediaCard
            name={item.name}
            location={item.location}
            image={item.image}
            distance={item.distance}
            count={item.availability}
          />
        ))}
      </div>
      {/* </Box> */}

      {/* <ScotchInfoBar seriesNumber="7" /> */}
    </div>
  );
};

export default Searchbar;
