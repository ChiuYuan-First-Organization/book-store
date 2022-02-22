import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    title: "My first book",
    description: "The first book I ever wrote",
    price: 6,
  },
  {
    title: "My second book",
    description: "The second book I ever wrote",
    price: 5,
  },
];

const Products = () => {
  return (
    <section className={styles.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem key={item.title} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
