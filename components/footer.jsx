
import config from "../config"
import Link from "next/link"
export default function footer() {
  return (
    <div>
      <footer className="page-footer font-small blue ">
        <ul className="list-unstyled list-inline text-center">

          <li className="list-inline-item">
            <a
              href={"https://linkedin.com/in/" + config.githubUsername}
              className="btn-floating btn-tw mx-1"
            >
              <img
                style={{ width: "35px", height: "35px" }}
                src="https://img.icons8.com/ios/50/000000/linkedin-circled--v1.png"
                alt="linkedin"
              />
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href={"https://t.me/" + config.tgUsername}
              className="btn-floating btn-tw mx-1"
            >
              <img
                style={{ width: "35px", height: "35px" }}
                src="https://img.icons8.com/fluent/50/000000/telegram-app.png"
                alt="telegram"
              />
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href={"https://www.instagram.com/" + config.instaUsername}
              className="btn-floating btn-tw mx-1"
            >
              <img
                style={{ width: "35px", height: "35px" }}
                src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                alt="Instagram"
              />
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href={"https://github.com/" + config.githubUsername}
              className="btn-floating btn-tw mx-1"
            >
              <img
                style={{ width: "35px", height: "35px" }}
                src="https://img.icons8.com/doodle/48/000000/github.png"
                alt="github"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
