import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { fetchTodos } from './utils/api';

jest.mock('./utils/api');

test('renders TodoList and loads todos', async () => {
  fetchTodos.mockResolvedValue([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build something cool' }
  ]);

  render(<App />);

  expect(screen.getByText(/My Todo List/i)).toBeInTheDocument();

  const loadButton = screen.getByText(/Load Todos/i);
  fireEvent.click(loadButton);

  const todoItems = await screen.findAllByText(/Build something cool/i);
  expect(todoItems).toHaveLength(1);
});
