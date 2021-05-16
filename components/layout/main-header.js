import classees from "./main-header.module.css";
import Link from "next/link";

function MainHeader() {
  return (
    <header className={classees.header}>
      <div className={classees.logo}>
        <Link href="/"> NextEvents </Link>
      </div>
      <nav className={classees.navigation}>
        <ul>
          <li>
            <Link href="/events"> Browse All Events </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
