export default function Section({ title, children }) {
  return (
    <div className="pl-4  my-10">
      <p className="text-3xl text-gray-500 mb-4 ">{title}</p>
      <div>{children}</div>
    </div>
  );
}
