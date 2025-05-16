import { drinks } from "../Data";

export default function List15() {
  const listItems = drinks.map((item) => (
    <li>
      <p>
        <img src={drinks.imagedId} alt="" />
      </p>
      <h2>{drinks.name}</h2>
      <p>{drinks.accomplishement}</p>
    </li>
  ));
  return (
    <div>
      <h2>drink</h2>
      <ul className="card-list">{listItems}</ul>
    </div>
  );
}
