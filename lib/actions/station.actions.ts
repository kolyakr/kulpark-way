"use server";

import prisma from "@/db/db";
import { Station } from "@prisma/client";

export const getCities = async (search?: string) => {
  try {
    let stations;

    if (search) {
      stations = await prisma.station.findMany({
        where: {
          city: {
            contains: search,
            mode: "insensitive",
          },
        },
        take: 5,
      });
    } else {
      stations = await prisma.station.findMany({
        orderBy: { id: "asc" },
        take: 5,
      });
    }

    const cities = stations.map((station: Station) => {
      return { value: station.city, id: station.id };
    });
    return cities;
  } catch (err) {
    throw err;
  }
};
