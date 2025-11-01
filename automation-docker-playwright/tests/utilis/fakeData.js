import { faker } from "@faker-js/faker";

// Função específica para os dados da PÁGINA DE LOGIN
export const createLoginUser = () => {
  return {
    email: faker.internet.email(),
    senha: faker.internet.password({ length: 10, prefix: "Tes12$" }),
  };
};

// Função específica para os dados da PÁGINA DE REGISTRO
export const createRegisterUser = () => {
  return {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password({ length: 10, prefix: "Tes12$" }),
  };
};

// Função para os dados da PÁGINA DE CHECKOUT
export const createBillingInfo = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    companyName: faker.company.name(),
    email: faker.internet.email(), 
    country: "usa",
    city: "Afghanistan",
    zip: faker.location.zipCode("#####-###"),
    address: faker.location.streetAddress(),
    notes: faker.lorem.sentence(),
  };
};