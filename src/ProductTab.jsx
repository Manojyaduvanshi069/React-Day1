import Product from "./Product.jsx";

function ProductTab() {
  let options = ["hi-tech, ","durable, ","fast "];
  let options1 = [<li>hi-tech</li>,<li>durable</li>,<li>fast</li>];
  return (
    <div>
      <Product title="Phone" price={30000} features={options}/>
      <Product title="Tab" price={45000} features={options1}/>
      <Product title="Laptop" price={90000}/>
    </div>
  );
}

export default ProductTab;