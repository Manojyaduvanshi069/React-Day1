import "./Product.css";

function Product({ title, price, features }) {
  let isDiscount = price > 30000 ? "Discount of 5%" : "Not any discount !";
  let styles = { backgroundColor: price > 30000 ? "gray" : "" };
  return (
    <div className="Product" style={styles}>
      <h2>
        Price of {title} : {price}
      </h2>
      <h4>Features : {features}</h4>
      <p>{isDiscount}</p>
    </div>
  );
}

export default Product;
