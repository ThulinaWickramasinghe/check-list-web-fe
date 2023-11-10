import fs from 'fs';
import path from 'path';
import { faker } from '@faker-js/faker';

import {statuses } from './data.mjs';

const tasks = Array.from({ length: 100 }, () => ({
  id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(statuses).value,
}));

fs.writeFileSync(
 'F:\\PersonalProjects\\check-list\\check-list-fe\\src\\__mocks__\\tasks\\tasks.json',
  JSON.stringify(tasks, null, 2)
);

console.log('✅ Tasks data generated.');
