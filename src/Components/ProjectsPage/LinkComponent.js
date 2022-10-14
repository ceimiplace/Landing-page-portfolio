import { Link } from "react-router-dom";
export default function LinkComponent({ to }) {
  return (
    <Link to={to} className="bg-gray-100 rounded border-black border-2">
      Click here to load project
    </Link>
  );
}
