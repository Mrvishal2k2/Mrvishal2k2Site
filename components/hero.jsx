
import Typed from "react-typed";
import config from "../config";

export default function Hero() {
  function AlertIt() {
    if (window.confirm("open Telegram?"))
      window.location = `https://t.me/${config.tgUsername}`;
  }
  function BlogAlertIt() {
    window.open("https://www.mrprogeeky.com", "_blank"); 
  }

  return (
    <div className={"container mt-5"}>
      <h3>
        <kbd className={"text-light"}>{config.heroHead}</kbd>
        <br />
        <code className="text-light">{config.heroText}</code>
        <div>
          <span className="badge badge-warning">
            <Typed strings={config.typedArray} typeSpeed={40} loop ={true} />
          </span>
        </div>
      </h3>

      <button
        className={"btn btn-primary btn-md active mt-4"}
        onClick={() => BlogAlertIt()}
      >
        Blog
      </button>
      <p></p>
      <button
        className={"btn btn-primary btn-md active mt-4"}
        onClick={() => AlertIt()}
      >
        Telegram me
      </button>


    </div>
  );
}
