import React from "react";
import styles from "./CheckoutForm.module.css"; // Import the CSS module
import CheckOutModal from "../UI/CheckOutModal";

const ORDER_PRODUCTS = [
  {
    title: "Free Run 3.0 Women",
    Price: "30.00",
  },
  {
    title: "Free Run 3.0 Men",
    Price: "30.00",
  },
  {
    title: "Free Run 3.0 Child",
    Price: "30.00",
  },
  {
    title: "Double LaunchBox",
    Price: "15.00",
  },
];

const CheckoutForm = () => {
  return (
    <CheckOutModal>
      <div className={styles["order-info"]}>
        <div className={`${styles["order-info-content"]} ${styles["thin"]}`}>
          <h2 className={styles.orderSummary}>Order Summary</h2>
          <div className={styles["products-container"]}>
            <div className={styles["line"]}></div>
            {/* <table className={styles['order-table']}>
                <tbody>
                  <tr>
                    <td>
                      <br /> <span className={styles['thin']}>Nike</span>
                      <br /> Free Run 3.0 Women<br />{' '}
                      <span className={`${styles['thin']} ${styles['small']}`}>
                        Color: Grey/Orange, Size: 10.5<br />
                        <br />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className={styles['price']}>$99.95</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles['line']}></div>
              <table className={styles['order-table']}>
                <tbody>
                  <tr>
                    <td>
                      <br /> <span className={styles['thin']}>Fjällräven</span>
                      <br /> Vintage Backpack<br />{' '}
                      <span className={`${styles['thin']} ${styles['small']}`}>Color: Olive, Size: 20L</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className={styles['price']}>$235.95</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles['line']}></div>
              <table className={styles['order-table']}>
                <tbody>
                  <tr>
                    <td>
                      <br /> <span className={styles['thin']}>Monobento</span>
                      <br /> Double Lunchbox<br />{' '}
                      <span className={`${styles['thin']} ${styles['small']}`}>Color: Pink, Size: Medium</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className={styles['price']}>$25.95</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles['line']}></div> */}
            {ORDER_PRODUCTS.map((items) => {
              return (
                <div>
                  <table className={styles["order-table"]}>
                    <tbody>
                      <tr>
                        <td>
                          <br />{" "}
                          <span className={styles["thin"]}>{items.title}</span>
                          <br /> Double Lunchbox
                          <br />{" "}
                          <span
                            className={`${styles["thin"]} ${styles["small"]}`}
                          >
                            Color: Pink, Size: Medium
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className={styles["price"]}>{items.Price}</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={styles["line"]}></div>
                </div>
              );
            })}
          </div>
          <div className={styles["total"]}>
            <span style={{ float: "left" }}>
              <div className={`${styles["thin"]} ${styles["dense"]}`}>
                VAT 19%
              </div>
              <div className={`${styles["thin"]} ${styles["dense"]}`}>
                Delivery
              </div>
              TOTAL
            </span>
            <span style={{ float: "right", textAlign: "right" }}>
              <div className={`${styles["thin"]} ${styles["dense"]}`}>
                $68.75
              </div>
              <div className={`${styles["thin"]} ${styles["dense"]}`}>
                $4.95
              </div>
              $435.55
            </span>
          </div>
        </div>
      </div>
      <div className={styles["credit-info"]}>
        <div className={`${styles["credit-info-content"]} ${styles["thin"]}`}>
          <h2 className={styles.personalInfo}>
            Please Enter Your Personal Info
          </h2>
          Card Number
          <input className={`${styles["input-field"]}`} type="text" />
          Card Holder
          <input className={`${styles["input-field"]}`} type="text" />
          <table className={`${styles["half-input-table"]}`}>
            <tr>
              <td>
                Expires
                <input className={`${styles["input-field"]}`} type="text" />
              </td>
              <td>
                CVC
                <input className={`${styles["input-field"]}`} type="text" />
              </td>
            </tr>
          </table>
          <button className={`${styles["pay-btn"]}`}>Checkout</button>
        </div>
      </div>
    </CheckOutModal>
  );
};

export default CheckoutForm;
