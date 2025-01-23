import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="w-1/5 text-black min-h-screen p-5" style={{ backgroundColor: "#FBF5DD" }}>
      <h2 className="text-lg font-bold mb-5">Menu</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="block py-2 px-3 hover:bg-cyan-600 rounded">
            Home
          </Link>
        </li>
        <li>
          <Link href="/register-user" className="block py-2 px-3 hover:bg-cyan-600 rounded">
            Register User
          </Link>
        </li>
        <li>
          <Link href="/user-data" className="block py-2 px-3 hover:bg-cyan-600 rounded">
            User Data
          </Link>
        </li>
      </ul>
    </nav>
  );
}
