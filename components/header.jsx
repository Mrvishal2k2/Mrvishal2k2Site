import config from "../config";
import Link from "next/link";


export default function Customhead() {


  return (
    <div id="home">
      <nav className="navbar navbar-light bg-dark">
        <Link href="/">
          <a className={"navbar-brand logo"} >
            <img
              src="./code.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="mrvishal2k2"
            />
            <kbd id="username">{config.websiteName}</kbd>
          </a>
        </Link>

      </nav>
    </div>
  );
}
