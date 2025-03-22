"use client";
import {
  searchTicketSchema,
  SearchTicketType,
} from "@/lib/validations/searchTicket";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Dropdown from "../shared/dropdown";
import { getCities } from "@/lib/actions/station.actions";
import { motion } from "framer-motion";

type InputType = "to" | "from";
type City = {
  value: string;
  id: string;
};

const SearchTicketForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SearchTicketType>({
    resolver: zodResolver(searchTicketSchema),
  });

  const [isToOpen, setIsToOpen] = useState<boolean>(false);
  const [isFromOpen, setIsFromOpen] = useState<boolean>(false);

  const [toAvailableCities, setToAvailableCities] = useState<City[]>([]);
  const [fromAvailableCities, setFromAvailableCities] = useState<City[]>([]);

  const to = watch("to");
  const from = watch("from");

  const [shakeFields, setShakeFields] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const cities = await getCities();
      setFromAvailableCities(cities);
      setToAvailableCities(cities);
    })();
  }, []);

  const handleSubmitWithValidation = async (e: React.FormEvent) => {
    e.preventDefault();
    const emptyFields: string[] = [];

    if (
      to === "" ||
      !toAvailableCities.some(
        (city) => city.value.toLowerCase() === to.toLowerCase()
      )
    ) {
      emptyFields.push("to");
    }

    if (
      from === "" ||
      !fromAvailableCities.some(
        (city) => city.value.toLowerCase() === from.toLowerCase()
      )
    ) {
      emptyFields.push("from");
    }

    if (emptyFields.length > 0) {
      setShakeFields(emptyFields);
      setTimeout(() => setShakeFields([]), 1000);
      return;
    }

    handleSubmit(onSubmit)();
  };

  const onSubmit = (data: SearchTicketType) => {
    console.log(data);
  };

  const handleChange = async (value: string, type: InputType) => {
    setValue(type, value);
    if (type === "from") {
      setFromAvailableCities(await getCities(value));
    } else {
      setToAvailableCities(await getCities(value));
    }
  };

  const changeDirections = () => {
    if (to !== "" && from !== "") {
      setValue("to", from);
      setValue("from", to);
      setFromAvailableCities(toAvailableCities);
      setToAvailableCities(fromAvailableCities);
    }
  };

  return (
    <form
      onSubmit={handleSubmitWithValidation}
      className="bg-[var(--light-green-color)] rounded-[15px] p-12 flex justify-between items-end gap-3 flex-wrap mx-[20px] md:mx-[50px] xl:mx-[100px]"
    >
      <div className="flex gap-8 flex-wrap flex-col md:flex-row ">
        <div className="relative">
          <motion.div
            className="relative"
            animate={
              shakeFields.includes("from") ? { x: [-10, 10, -10, 0] } : {}
            }
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              className="py-2 px-4 bg-white rounded-[15px] max-w-[250px] md:max-w-[150px]"
              placeholder="From..."
              {...register("from")}
              onFocus={() => setIsFromOpen(true)}
              onBlur={() => setTimeout(() => setIsFromOpen(false), 200)}
              onChange={(e) => handleChange(e.target.value, "from")}
            />
            <Dropdown
              open={isFromOpen}
              data={fromAvailableCities}
              setValue={(val) => setValue("from", val)}
            />
          </motion.div>
        </div>
        <div onClick={changeDirections} className="cursor-pointer">
          <Image
            src="/icons/direct-right.svg"
            alt="direct right"
            width={30}
            height={30}
          />
        </div>
        <div className="relative">
          <motion.div
            className="relative"
            animate={shakeFields.includes("to") ? { x: [-10, 10, -10, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              className="py-2 px-4 bg-white rounded-[15px] max-w-[250px] md:max-w-[150px]"
              placeholder="To..."
              {...register("to")}
              onFocus={() => setIsToOpen(true)}
              onBlur={() => setTimeout(() => setIsToOpen(false), 200)}
              onChange={(e) => handleChange(e.target.value, "to")}
            />
            <Dropdown
              open={isToOpen}
              data={toAvailableCities}
              setValue={(val) => setValue("to", val)}
            />
          </motion.div>
        </div>
        <input
          type="date"
          className="py-2 px-4 bg-white rounded-[15px] max-w-[150px]"
          placeholder="From..."
          {...register("date")}
        />
      </div>
      <button
        type="submit"
        className="rounded-[25px] bg-[var(--green-color)] text-white py-2 px-4 max-h-[40px]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchTicketForm;
