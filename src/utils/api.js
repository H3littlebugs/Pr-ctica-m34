export const fetchTodos = async () => {
    // Simular una llamada a una API
    return new Promise(resolve =>
      setTimeout(() => resolve([
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build something cool' }
      ]), 1000)
    );
  };

  