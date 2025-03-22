import React from "react";

type Item = {
  id: string;
  value: string;
};

const Dropdown = ({
  open,
  data,
  setValue,
}: {
  open: boolean;
  data: Item[];
  setValue: (value: string) => void;
}) => {
  if (!open) {
    return null;
  }

  return (
    <ul className="bg-white absolute rounded-[20px] flex flex-col gap-2 p-3 top-[50px] border w-full max-w-[150px] border-black z-10 ">
      {data && data.length > 0 ? (
        data.map((item) => (
          <li
            onClick={() => {
              setValue(item.value);
            }}
            key={item.id}
          >
            {item.value}
          </li>
        ))
      ) : (
        <li>Not found</li>
      )}
    </ul>
  );
};

export default Dropdown;
