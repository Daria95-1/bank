export type BranchesProps = {
  name: string;
  coordinates: [number, number];
  address: string;
  phone: string;
  email?: string;
};

export const bankBranches: BranchesProps[] = [
  {
    name: "Главный офис",
    coordinates: [55.7571, 37.6156],
    address: "ул. Большая Никитская, д. 15",
    phone: "+7 (999) 999-99-99",
    email: "bank@mail.com",
  },
  {
    name: "Отделение 2",
    coordinates: [55.7524, 37.6011],
    address: "ул. Тверская, д. 10",
    phone: "+7 (495) 234-56-78",
  },
  {
    name: "Отделение 3",
    coordinates: [55.7608, 37.6192],
    address: "ул. Арбат, д. 12",
    phone: "+7 (495) 345-67-89",
  },
  {
    name: "Отделение 4",
    coordinates: [55.7483, 37.6047],
    address: "ул. Мясницкая, д. 7",
    phone: "+7 (495) 456-78-90",
  },
];
