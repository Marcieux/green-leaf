import { faker } from '@faker-js/faker';

export const person = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  review: faker.lorem.sentences(3),
  jobTitle: faker.person.jobTitle(),
  img: faker.image.avatar(),
}));
