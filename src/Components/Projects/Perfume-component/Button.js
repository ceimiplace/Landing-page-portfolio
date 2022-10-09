export default function Button({ icon, text }) {
  return (
    <a
      href="#"
      className="block text-center text-sm bg-emerald-600 text-white w-full rounded-md p-2"
    >
      <i className={`fa-solid fa-${icon}`}></i>

      <span className="ml-2">{text}</span>
    </a>
  );
}
