document.querySelector('#new-post').addEventListener('click', () => {
  // Logic to add a new post
});

document.querySelectorAll('.delete-post').forEach((button) => {
  button.addEventListener('click', async (event) => {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete post.');
    }
  });
});

document.querySelectorAll('.update-post').forEach((button) => {
  button.addEventListener('click', async (event) => {
    const id = event.target.getAttribute('data-id');
    // Logic to update a post
  });
});
