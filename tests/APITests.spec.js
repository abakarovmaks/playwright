const { test, expect } = require('@playwright/test');
const { log } = require('console');

let userId = '';

test('GET users', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  console.log('Response TEST:', await response.json());
  expect(response.status()).toBe(200);
});
test('CREATE user', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Maksym',
      job: 'QA Lead',
    },
    headers: { Accept: 'application/json' },
  });
  console.log(response.json());
  expect(response.status()).toBe(201);

  const res = await response.json();
  console.log('ID:------------', res.id);
  userId = res.id;
});
test('UPDATE user', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/' + userId, {
    data: {
      name: 'Maksym',
      job: 'Automation QA',
    },
    headers: { Accept: 'application/json' },
  });
  console.log(response.json());
  expect(response.status()).toBe(200);

  const res = await response.json();
  console.log('JOB:------------', res.job);
});
test('DELETE user', async ({ request }) => {
  const response = await request.delete(
    'https://reqres.in/api/users/' + userId
  );
  expect(response.status()).toBe(204);
  console.log('User ', userId, ' was deleted');
});
