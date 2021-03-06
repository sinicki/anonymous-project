import React from "react";

//@ts-ignore
export default ({ loading, children }) => {
  return (
    <div>
      {loading ? (
        <div>
          <img src={`${process.env.PUBLIC_URL + "/img/loader.gif"}`} />
        </div>
      ) : (
        children
      )}
    </div>
  );
};
