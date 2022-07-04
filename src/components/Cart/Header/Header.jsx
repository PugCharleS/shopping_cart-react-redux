import { useContext } from "react";
import { Context } from "../../../context/context";

const Header = () => {
  const { emptyCart } = useContext(Context);

  return (
    <header className="header">
      <div className="header-summary">
        <svg
          id="cart-shopping-fast"
          xmlns="http://www.w3.org/2000/svg"
          width="28.381"
          height="22.705"
          viewBox="0 0 28.381 22.705"
        >
          <g id="Group_14" data-name="Group 14">
            <path
              id="Path_4"
              data-name="Path 4"
              d="M28.094,32.565A1.409,1.409,0,0,0,26.96,32H8.246l2.162,11.352h14.12a1.424,1.424,0,0,0,1.364-1.03l2.433-8.514A1.409,1.409,0,0,0,28.094,32.565Zm-27.03,4.4H4.612a1.064,1.064,0,0,0,0-2.129H1.064a1.064,1.064,0,0,0,0,2.129Zm0,3.548H5.321a1.064,1.064,0,0,0,0-2.129H1.064a1.064,1.064,0,0,0,0,2.129Zm4.967,1.419H1.064a1.064,1.064,0,1,0,0,2.129H6.031a1.064,1.064,0,1,0,0-2.129Z"
              transform="translate(0 -30.581)"
              fill="#3f4c58"
              opacity="0.4"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M84.576,18.448A2.129,2.129,0,1,0,86.7,20.576,2.129,2.129,0,0,0,84.576,18.448Zm-12.771,0a2.129,2.129,0,1,0,2.129,2.129A2.129,2.129,0,0,0,71.8,18.448ZM85.64,14.9H71.976L69.3.865A1.064,1.064,0,0,0,68.257,0H65.064a1.064,1.064,0,0,0,0,2.129h2.312L70.05,16.163a1.064,1.064,0,0,0,1.045.865H85.64a1.064,1.064,0,0,0,0-2.129Z"
              transform="translate(-61.162)"
              fill="#3f4c58"
            />
          </g>
        </svg>
        <div className="orderSummary">Order summary</div>
      </div>
      <button className="removeAll" onClick={emptyCart}>
        Remove all
      </button>
    </header>
  );
};

export default Header;
