import React from "react";

isLoggedIn = false;

let isLoggedIn = true;
function RednderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    <div className="min-h-screen bg-[#50a3a2] font-light text-white">
      <div className="mx-auto py-20 text-center">
        <h1 className="text-4xl font-light">Hello</h1>
        <form className="py-5 relative">
          <input
            className="border border-white bg-white bg-opacity-20 w-64 rounded-md font-source-sans-pro p-2 mx-auto mb-4 block text-center text-lg font-light"
            type="text"
            placeholder="Username"
          />
          <input
            className="border border-white bg-white bg-opacity-20 w-64 rounded-md font-source-sans-pro p-2 mx-auto mb-4 block text-center text-lg font-light"
            type="password"
            placeholder="Password"
          />
          <button
            className="appearance-none outline-none bg-white border-none p-2 text-blue-500 rounded-md w-64 text-lg font-light"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>;
  }
}

export default RednderConditionally;
