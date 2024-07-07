import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <ul role="list" className="flex items-center space-x-4">
        <li>Tips</li>
        <li>Comp</li>
        <li>League</li>
        <li>
          <button className="bg-gray-200 p-2 rounded-lg flex items-center space-x-2 text-black">
            <FaSignOutAlt />
            <h2>Logout</h2>
          </button>
        </li>
      </ul>
    </nav>
  );
}
