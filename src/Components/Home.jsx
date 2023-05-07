import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import close from "../images/icon-close.svg";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import image_product_1 from "../images/image-product-1.jpg";
import image_product_2 from "../images/image-product-2.jpg";
import image_product_3 from "../images/image-product-3.jpg";
import image_product_4 from "../images/image-product-4.jpg";
import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import deletee from "../images/icon-delete.svg";

const Home = () => {
  const [showpanier, setshowpanier] = useState(false);

  const imagess = [
    image_product_1,
    image_product_2,
    image_product_3,
    image_product_4,
  ];
  const [indeximage, setindeximage] = useState(0);

  const [quantity, setquantity] = useState(0);
  useEffect(() => {
    if (quantity < 0) {
      setquantity(0);
    }
  }, [quantity]);

  const [addCart, setaddCart] = useState(false);

  const [showmodal, setshowmodal] = useState(false);
  const small_img = document.getElementsByClassName("small_img");
  const [somme, setSomme] = useState("0")

  useEffect(() => {
    indeximage < 0
      ? setindeximage(3)
      : indeximage > 3
      ? setindeximage(0)
      : small_img[indeximage].classList.add("small_img_effect");
  });
  
  const removeEffect = () => {
    indeximage < 0
      ? setindeximage(3)
      : indeximage > 3
      ? setindeximage(0)
      : small_img[indeximage].classList.remove("small_img_effect");
  };

  return (
    <div className="home">

      
      {/*NavBar*/}

      <nav>
        <div className="left_nav">
          <img
            src={menu}
            alt="menu"
            className="open_nav"
            onClick={() =>
              document
                .getElementsByClassName("nav_side")[0]
                .classList.add("nav_side_open")
            }
          />
          <img src={logo} alt="logo" id="logo" />

          <div className="nav_side">
            <ul className="nav_list">
              <img
                src={close}
                alt="close"
                className="close_nav"
                onClick={() =>
                  document
                    .getElementsByClassName("nav_side")[0]
                    .classList.remove("nav_side_open")
                }
              />
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div
              className="rest_side"
              onClick={() =>
                document
                  .getElementsByClassName("nav_side")[0]
                  .classList.remove("nav_side_open")
              }
            ></div>
          </div>
        </div>
        <div className="right_nav">
          <div className="cart_nav_drop">
            <div className="cart_icon">
              {addCart ? <span>{somme}</span> : null}

              <img
                src={cart}
                alt="cart"
                id="cart_nav"
                onClick={() => setshowpanier(!showpanier)}
              />
            </div>
            {showpanier ? (
              <div className="cart_drop_box">
                <div>
                  <h4>Cart</h4>
                </div>
                {addCart && somme > 0 ? (
                  <div className="non_empty_cart cart_drop_cont">
                    <div className="cart_product">
                      <img src={image_product_1} alt="" />
                      <div>
                        <span id="prod_name">
                          Fall Limited Edition Sneakers{" "}
                        </span>
                        <span>
                          $125.00 x <span id="quantity">{somme}</span>{" "}
                          <span id="total_price">${somme * 125.0}</span>
                        </span>
                      </div>
                      <img
                        src={deletee}
                        alt=""
                        id="delete"
                        onClick={() => setSomme(0)}
                      />
                    </div>
                    <button id="checkout">Checkout</button>
                  </div>
                ) : (
                  <div className="empty_cart cart_drop_cont">
                    <h4>Your cart is empty</h4>
                  </div>
                )}
              </div>
            ) : null}
          </div>
          <img src={avatar} alt="avatar" id="avatar" />
        </div>
      </nav>

      {/*Content*/}

      <section>
        {showmodal ? (
          <div className="image_modal">
            <img
              src={close}
              alt=""
              id="close"
              onClick={() => setshowmodal(false)}
            />
            <div className="images">
              <img src={imagess[indeximage]} alt="" className="product_img" />
              <div className="product_small_images">
                <img
                  src={image_product_1}
                  alt=""
                  onClick={() => (removeEffect(), setindeximage(0))}
                  className="small_img"
                />
                <img
                  src={image_product_2}
                  alt=""
                  className="small_img"
                  onClick={() => (removeEffect(), setindeximage(1))}
                />
                <img
                  src={image_product_3}
                  alt=""
                  onClick={() => (removeEffect(), setindeximage(2))}
                  className="small_img"
                />
                <img
                  src={image_product_4}
                  alt=""
                  onClick={() => (removeEffect(), setindeximage(3))}
                  className="small_img"
                />
              </div>
              <div className="slides">
                <img
                  src={previous}
                  alt=""
                  onClick={() => setindeximage(indeximage - 1)}
                />
                <img
                  src={next}
                  alt=""
                  onClick={() => setindeximage(indeximage + 1)}
                />
              </div>
            </div>
          </div>
        ) : null}

        <div className="images">
          <img
            src={imagess[indeximage]}
            alt=""
            className="product_img"
            onClick={() => setshowmodal(true)}
          />
          <div className="product_small_images">
            <img
              src={image_product_1}
              alt=""
              onClick={() => (removeEffect(), setindeximage(0))}
              className="small_img"
            />
            <img
              src={image_product_2}
              alt=""
              className="small_img"
              onClick={() => (removeEffect(), setindeximage(1))}
            />
            <img
              src={image_product_3}
              alt=""
              onClick={() => (removeEffect(), setindeximage(2))}
              className="small_img"
            />
            <img
              src={image_product_4}
              alt=""
              onClick={() => (removeEffect(), setindeximage(3))}
              className="small_img"
            />
          </div>
          <div className="slides">
            <img
              src={previous}
              alt=""
              onClick={() => setindeximage(indeximage - 1)}
            />
            <img
              src={next}
              alt=""
              onClick={() => setindeximage(indeximage + 1)}
            />
          </div>
        </div>

        <div className="desc">
          <h5>SNEAKER COMPANY</h5>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <div className="price_after_promotion">
              <h1>$125.00</h1>
              <span>50%</span>
            </div>
            <span className="price_before_promotion">$250.00</span>
          </div>
          <div className="cart_count_add">
            <div className="number_products">
              <img
                src={minus}
                onClick={() => setquantity(quantity - 1)}
                alt=""
              />
              <span>{quantity}</span>
              <img
                src={plus}
                onClick={() => setquantity(quantity + 1)}
                alt=""
              />
            </div>
            <button
              className="add_button"
              onClick={() =>((quantity > 0 ? setaddCart(true) : null),(setSomme(quantity),setquantity(0)))
                
              }
            >
              {" "}
              <img src={cart} alt="" /> <h3>Add to cart</h3>{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
