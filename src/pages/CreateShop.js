import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import config from "../aws-exports";
import { createShop } from "../graphql/mutations";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const CreateShop = () => {
  const [image, setImage] = useState(null);
  const [shopdetails, setShopdetails] = useState({
    name: "",
    location: "",
    owner: "",
  });
   



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!shopdetails.name || !shopdetails.location) return;
      await API.graphql(graphqlOperation(createShop, { input: shopdetails }));
      setShopdetails({
        name: "",
        location: "",
        owner: "",
      });
    } catch (err) {
      console.log("error creating slots:", err);
    }
  };

  return (
    <section className="admin-wrapper">
      <AmplifyAuthenticator>
        <section>
          <header className="form-header">
            <h3>Add Your Shop</h3>
            <AmplifySignOut></AmplifySignOut>
          </header>
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="form-fields">
              <div className="title-form">
                <p>
                  <label htmlFor="title">Name of shop</label>
                </p>
                <p>
                  <input
                    name="shopname"
                    type="title"
                    placeholder="Type the shop name"
                    onChange={(e) =>
                      setShopdetails({ ...shopdetails, name: e.target.value })
                    }
                    required
                  />
                </p>
              </div>

              <div className="author-form">
                <p>
                  <label htmlFor="author">Owner Name</label>
                </p>
                <p>
                  <input
                    name="author"
                    type="text"
                    placeholder="Type the owner's name"
                    onChange={(e) =>
                      setShopdetails({ ...shopdetails, owner: e.target.value })
                    }
                    required
                  />
                </p>
              </div>
              <div className="location-form">
                <p>
                  <label htmlFor="location">Address</label>
                  <input
                    name="address"
                    type="text"
                    placeholder="What is the address of the product"
                    onChange={(e) =>
                      setShopdetails({
                        ...shopdetails,
                        location: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="submit-form">
                <button className="btn" type="submit">
                  Add the shop
                </button>
              </div>
            </div>
          </form>
        </section>
      </AmplifyAuthenticator>
    </section>
  );
};

export default CreateShop;
