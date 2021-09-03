import { useRef } from "react";

const Eyes = (props) => {
  const eyeBallsRef = useRef([]);

  document.onmousemove = (e) => {
    let x = (e.clientX * 100) / window.innerWidth + "%";
    let y = (e.clientY * 100) / window.innerHeight + "%";

    eyeBallsRef.current.forEach((item, idx) => {
      item.style.left = x;
      item.style.top = y;
      item.style.transform = `translate(-${x},-${y})`;
    });
  };

  return (
    <div className="eyeContainer">
      <div className="eye">
        <div
          className="eyeBall"
          ref={(ref) => (eyeBallsRef.current[0] = ref)}
        ></div>
      </div>

      <div className="eye">
        <div
          className="eyeBall"
          ref={(ref) => (eyeBallsRef.current[1] = ref)}
        ></div>
      </div>
    </div>
  );
};
export default Eyes;
