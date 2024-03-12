import React, { useState } from "react";
import DropIn from "braintree-web-drop-in-react";

const FirstDropIn = ({ clientToken }) => {
  const [instance, setInstance] = useState(null);

  return (
    <DropIn
      options={{
        authorization: clientToken,
        paypal: {
          flow: "vault",
        },
      }}
      onInstance={(instance) => setInstance(instance)}
    />
  );
};

export default FirstDropIn;
