export default function AtagComponent({ to }) {
  return (
    <a
      href={to}
      target="_blank"
      className="bg-gray-100 rounded border-black border-2"
    >
      Click here to load project
    </a>
  );
}
