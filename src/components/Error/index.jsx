import React, { useEffect, useRef } from "react";
import "./index.css";
import Lottie from "lottie-react";
import errorLottie from "../../images/404.json";

function Error() {
  const lottieRef = useRef(null);

  return (
    <div className="error_page">
      <Lottie
        animationData={errorLottie}
        loop={true}
        lottieRef={lottieRef}
        className="lottie_animation"
      />
      <h1 className="error_title">Oops! Page Not Found</h1>
      <p className="error_message">
        The page you're looking for doesn't exist or an error occurred.
      </p>
      <button
        className="restricted_button"
        onClick={() =>
          window.open("https://buytrucknbus-osp3dev.home.tatamotors/")
        }
      >
        Go to OSP Platform
      </button>
    </div>
  );
}

export default Error;
