import { fetchTodos } from './api';

test('fetchTodos returns the correct data', async () => {
  const data = await fetchTodos();
  expect(data).toEqual([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build something cool' }
  ]);
});
