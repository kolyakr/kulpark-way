export const data = {
  stations: [
    { id: "station1", name: "Київ-Пасажирський", city: "Київ", code: "KYIV" },
    { id: "station2", name: "Львів", city: "Львів", code: "LVIV" },
    { id: "station3", name: "Одеса-Головна", city: "Одеса", code: "ODESA" },
    { id: "station4", name: "Харків-Пас", city: "Харків", code: "KHARKIV" },
    { id: "station5", name: "Дніпро-Головний", city: "Дніпро", code: "DNIPRO" },
    {
      id: "station6",
      name: "Івано-Франківськ",
      city: "Івано-Франківськ",
      code: "IF",
    },
    { id: "station7", name: "Запоріжжя-1", city: "Запоріжжя", code: "ZP" },
  ],
  trains: [
    {
      id: "train1",
      name: "Інтерсіті+",
      trainNumber: "IC123",
      type: "Швидкісний",
      seats: 100,
    },
    {
      id: "train2",
      name: "Нічний Експрес",
      trainNumber: "NE456",
      type: "Нічний",
      seats: 200,
    },
    {
      id: "train3",
      name: "Пасажирський",
      trainNumber: "P789",
      type: "Звичайний",
      seats: 150,
    },
  ],
  routes: [
    {
      id: "route1",
      trainId: "train1",
      departureId: "station1",
      arrivalId: "station2",
      departureTime: "2025-03-23T08:00:00.000Z",
      arrivalTime: "2025-03-23T12:00:00.000Z",
      duration: 240,
    },
    {
      id: "route2",
      trainId: "train1",
      departureId: "station2",
      arrivalId: "station3",
      departureTime: "2025-03-24T10:00:00.000Z",
      arrivalTime: "2025-03-24T14:30:00.000Z",
      duration: 270,
    },
    {
      id: "route3",
      trainId: "train2",
      departureId: "station1",
      arrivalId: "station4",
      departureTime: "2025-03-25T21:00:00.000Z",
      arrivalTime: "2025-03-26T07:30:00.000Z",
      duration: 630,
    },
    {
      id: "route4",
      trainId: "train2",
      departureId: "station4",
      arrivalId: "station5",
      departureTime: "2025-03-26T09:00:00.000Z",
      arrivalTime: "2025-03-26T12:00:00.000Z",
      duration: 180,
    },
    {
      id: "route5",
      trainId: "train3",
      departureId: "station2",
      arrivalId: "station6",
      departureTime: "2025-03-27T14:00:00.000Z",
      arrivalTime: "2025-03-27T18:00:00.000Z",
      duration: 240,
    },
    {
      id: "route6",
      trainId: "train3",
      departureId: "station3",
      arrivalId: "station7",
      departureTime: "2025-03-28T06:00:00.000Z",
      arrivalTime: "2025-03-28T10:30:00.000Z",
      duration: 270,
    },
  ],
};
