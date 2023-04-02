import { faker } from "@faker-js/faker"

export const generateUsers = () => {
  const users = [];
  for (let i = 1; i <= 1000; i++) {
    const user = {
      id: i,
      username: faker.name.fullName(),
      address: faker.address.streetAddress() + ", " + faker.address.city() + ", " + faker.address.country(),
      age: faker.datatype.number({ min: 18, max: 80 }),
      phone_number: faker.phone.number(),
      occupation: faker.name.jobTitle(),
      vehicle_make: faker.vehicle.manufacturer(),
      vehicle_model: faker.vehicle.model(),
      vehicle_age: faker.datatype.number({ min: 1, max: 30 }),
    };
    users.push(user);
  }
  return users;
};

export const usersInfo = generateUsers();
