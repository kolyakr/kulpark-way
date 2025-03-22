import SearchTicketForm from "@/components/forms/search-ticket-form";
import Hero from "@/components/hero";
import React from "react";

const RootPage = () => {
  return (
    <div className="py-[50px] wrapper">
      <SearchTicketForm />
      <Hero />
    </div>
  );
};

export default RootPage;
