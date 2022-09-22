import { useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { options } from "./consts";
import { QuantitySelectProps } from "./types";

const QuantitySelect: React.FC<QuantitySelectProps> = ({
  id,
  quantity,
  name,
  image,
  price,
  setProducts,
  setForceUpdate
}) => {
  const [selectedOption, setSelectedOption] = useState({
    value: Number(quantity),
    label: String(quantity)
  });
  useEffect(() => {
    localStorage.setItem(
      id,
      JSON.stringify({
        id: id,
        name: name,
        image: image,
        price: price,
        quantity: selectedOption?.value
      })
    );
  }, [selectedOption]);

  const quantityHandler = useCallback((event) => {
    setSelectedOption({
      value: Number(event.value),
      label: String(event.value)
    });
    setProducts((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === id) {
          return { ...obj, quantity: event.value };
        }
      });
      return newState;
    });
    setForceUpdate((prev) => !prev);
  }, []);

  return (
    <Select
      defaultValue={selectedOption}
      onChange={quantityHandler}
      options={options}
    />
  );
};

export default QuantitySelect;
