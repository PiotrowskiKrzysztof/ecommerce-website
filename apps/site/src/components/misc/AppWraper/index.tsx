import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from "react";

const AppContext = createContext({
  productCounter: 0,
  counterFunction: function () {
    this.productCounter++;
  }
});

export const AppWraper: React.FC<PropsWithChildren<unknown>> = ({
  children
}) => {
  const [productCounter, setProductCounter] = useState(0);
  useEffect(() => {
    let counter = 0;
    const keys = Object.keys(localStorage);
    let index = keys.length;
    while (index--) {
      if (
        JSON.parse(localStorage.getItem(keys[index]) || "{}").id ===
        keys[index]
      ) {
        counter++;
      }
    }
    setProductCounter(counter);
  }, []);
  const cart = {
    productCounter: productCounter,
    counterFunction: function () {
      setProductCounter(productCounter + 1);
    }
  };
  return (
    <AppContext.Provider value={cart}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
