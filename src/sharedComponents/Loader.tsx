import React from "react";

export default ({ loading, children }) => {
  return (
    <div>
      {loading ? (
        <div>
          <img src={`${process.env.PUBLIC_URL + "/img/loader.gif"}`} />
        </div>
      ) : (
        { children }
      )}
    </div>
  );
};
