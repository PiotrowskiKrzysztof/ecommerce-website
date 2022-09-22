import { useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { options } from "./consts";
import { QuantitySelectProps } from "./types";

const QuantitySelect: React.FC<QuantitySelectProps> = ({
  id,
  quantity,
  name,
  image,
  price
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
        quantity: Number(selectedOption?.label)
      })
    );
  }, [selectedOption]);

  console.log(selectedOption);

  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  );
};

export default QuantitySelect;
