import BrownieCard from "./BrownieCard";
import "./BrownieList.css";
import { brownieList } from "../../mock";
export default function BrownieList({ addToCart }) {
  console.log(brownieList, "brownie");
  return (
    <section className="brownie-list">
      <h2>Our Brownie Selection</h2>
      <div className="brownie-grid">
        {brownieList?.map((brownie) => (
          <BrownieCard
            key={brownie.id}
            brownie={brownie}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}
