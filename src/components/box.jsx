/* eslint-disable react/prop-types */
function Box({ children }) {
  return (
    <div className="p-4   bg-lime-200 rounded-md  shadow-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      {children}
    </div>
  );
}

export default Box;
