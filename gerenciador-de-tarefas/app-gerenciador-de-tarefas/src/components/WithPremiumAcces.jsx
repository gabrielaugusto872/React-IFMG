import React from "react";
import { useState } from "react";

const withPremiumAccess = (Component) => {
  return function PremiumComponent(props) {

    const [isPremium, setIsPremium] = useState(false);

    if (!isPremium) {
      return (
        <div>
          <h2>🔒 Conteúdo Premium</h2>
          <p>Você precisa ser premium para acessar esta página.</p>
          <p>Faça um upgrade para acessar</p>
          <button className="btn-add-task" onClick={() => setIsPremium(true)}>UPGRADE!</button>
        </div>
      );
    }

    return <Component {...props} />;
  };
};

export default withPremiumAccess;