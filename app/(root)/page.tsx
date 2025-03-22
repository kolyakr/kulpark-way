import SearchTicketForm from "@/components/forms/search-ticket-form";
import Hero from "@/components/hero";
import News from "@/components/news";
import React from "react";

const RootPage = () => {
  return (
    <div className="py-[50px] wrapper flex flex-col gap-30">
      <SearchTicketForm />
      <Hero />
      <News />
    </div>
  );
};

export default RootPage;
