import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listShops } from "../api/queries";


const ShopContext =React.createContext()

//getshop component
const ShopProvider = ({children}) => {
  const [shops, setshops] = useState([]);
  const [loading, setLoading] = useState(false);
    useEffect(() => {
      fetchshops();
    }, []);

  const fetchshops = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql(
        {
            query: listShops,
          }
      );
      const shops = data.listShops.items;
      console.log(shops);

      setshops(shops);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <ShopContext.Provider value={{ shops}}>
      {children}
    </ShopContext.Provider>
    </div>
  );
};

export {ShopContext, ShopProvider};


