export default function Prices({ newPrice, oldPrice }) {
  return (
    <div className="my-2">
      <span className="text-green-700 text-2xl font-medium mr-2">
        {newPrice}
      </span>
      <span className="text-stone-400 text-xs line-through">{oldPrice}</span>
    </div>
  );
}
