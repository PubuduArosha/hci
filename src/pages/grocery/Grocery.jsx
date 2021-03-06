import React, { useState, useEffect } from "react";
import "./style.css";
import Select from "react-select";
import ProductCard from "../../components/ProductCard";
import Whislist from "../wishlist/wishlist";

export default function Grocery(props) {
  let data = JSON.parse(localStorage.getItem("data"));
  let grocery = data.grocery;

  function getdata() {
    data = JSON.parse(localStorage.getItem("data"));
  }

  useEffect(() => {
    getdata();

    // console.log(groceryy);
  });

  const addWishlist =(data)=>{
    props.additemToWishlist(data)
}

  const options = [{ value: "price", label: "price" }];

  let [minmax, setMinmax] = useState({
    min: "0",
    max: "20",
  });

  let cardCount = 8;

  return (
    <>
      <div>
        <h3 id="cart_ttitle">Grocery</h3>
      </div>
      <div id="content_top">
        <div id="price_range">
          <div id="price_range_title">Choose Price Range</div>
          <div id="price_range_container">
            {minmax.min} - {minmax.max} LKR
            <div id="price_range_selector">
              <input
                type="range"
                name=""
                className="range"
                id="range_low"
                onChange={(e) => setMinmax({ ...minmax, min: e.target.value })}
              />
              <input
                type="range"
                name=""
                className="range"
                id="range_hi"
                onChange={(e) => setMinmax({ ...minmax, max: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div id="whistlist_holder">
          <Whislist id="whishlist_comp" />
        </div>
      </div>

      <div id="content_sort">
        <div id="item_count">
          <div id="items_number">223 Items</div>
        </div>
        <div id="sort_controllers">
          <div className="first_controllers">
            <div>
              Sort by <Select options={options} id="sorter" />
            </div>

            <button>
              <i class="ar-down"></i>
            </button>
            <button>
              <i class="ar-up"></i>
            </button>
          </div>
          <div id="search_controller">
            <i class="ar-search"></i>
            <input type="text" name="" id="search_box_c" />
          </div>
          <div id="wishlist_btn_holder">
            <div id="wishlist_round">
              <i class="ar-heart"></i>
            </div>
          </div>
        </div>
      </div>

      <section id="product_container">
        <div id="product_list_cards">
          {grocery.map((data, index) => {
            return (
              <ProductCard
              addw={addWishlist}
                key={index}
                index={"grocery"}
                id={data.id}
                img={data.image}
                title={data.tital}
                price={data.price}
                des={data.description}
                stock={data.inStock}
              ></ProductCard>
            );
          })}
        </div>
      </section>
    </>
  );
}
