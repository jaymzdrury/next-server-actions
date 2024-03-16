import React from "react";

function withTitle<P>(Component: React.ComponentType<P>, title: string) {
  const ComponentWithTitle = (props: P) => (
    <>
      <h2>{title}</h2>
      <Component {...props} title={title} />
    </>
  );

  return ComponentWithTitle;
}

export default withTitle;
