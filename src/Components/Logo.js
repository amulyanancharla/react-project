import React from "react";

function Logo({ color = "black", size = 2 }) {
  return (
    <svg
      width={32 * size}
      height={32 * size}
      viewBox={`0 0 ${32 * size} ${32 * size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2947 26.5859H36.405V49.1437C35.6284 49.7296 34.6818 50.2667 33.5654 50.7549C32.4975 51.2432 31.3326 51.6582 30.0705 52C28.857 52.3418 27.5707 52.5859 26.2116 52.7324C24.901 52.9277 23.6147 53.0254 22.3527 53.0254C19.1005 53.0254 16.1153 52.5127 13.397 51.4873C10.6788 50.4132 8.32461 48.8019 6.33447 46.6535C4.34433 44.4564 2.79105 41.6977 1.67463 38.3775C0.55821 35.0085 0 31.0535 0 26.5127C0 21.7765 0.67956 17.7239 2.03868 14.3549C3.3978 10.9859 5.16951 8.25165 7.35381 6.15211C9.53811 4.00376 11.9894 2.44131 14.7076 1.46479C17.4259 0.488263 20.1441 0 22.8623 0C25.7747 0 28.1775 0.170891 30.0705 0.512674C31.9636 0.805631 33.5654 1.22066 34.876 1.75775L33.347 7.10423C31.0171 5.98122 27.6921 5.41972 23.372 5.41972C21.3333 5.41972 19.2947 5.78592 17.256 6.51831C15.2658 7.20188 13.4699 8.37371 11.868 10.0338C10.2662 11.6939 8.95563 13.8667 7.93629 16.5521C6.91695 19.2376 6.40728 22.5578 6.40728 26.5127C6.40728 30.1258 6.81987 33.2507 7.64505 35.8873C8.47023 38.524 9.61092 40.7211 11.0671 42.4789C12.5719 44.1878 14.3678 45.4817 16.4551 46.3606C18.5423 47.1906 20.8237 47.6057 23.2992 47.6057C26.4058 47.6057 29.0512 46.9953 31.2355 45.7747V31.493L19.2947 30.0282V26.5859Z"
        fill={color}
      />
      <path
        d="M64 16.7697L48.1274 18.7747L46.4835 64H42.9911L42.0842 18.7747L26.2116 16.7697V13.3549H64V16.7697Z"
        fill="black"
      />
    </svg>
  );
}

export default Logo;
