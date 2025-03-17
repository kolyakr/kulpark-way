import Image from "next/image";
import React from "react";

const RootPage = () => {
  return (
    <div className="text-[var(--green-color)]">
      Настя тут може бути твоя реклама
      <Image src="/images/nastya.jpg" width={1000} height={1000} alt="image" />
    </div>
  );
};

export default RootPage;
