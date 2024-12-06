document.getElementById('blogForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  const image = document.getElementById('image').files[0]; // Get the uploaded image file

  // Validate input
  if (!title || !content) {
    alert("Title and Content are required!");
    return;
  }

  // Create a new post element
  const postContainer = document.createElement('div');
  postContainer.classList.add('bg-white', 'dark:bg-gray-800', 'p-6', 'rounded-lg', 'shadow-md');

  // Title
  const postTitle = document.createElement('h3');
  postTitle.classList.add('text-xl', 'font-semibold');
  postTitle.textContent = title;
  
  // Content
  const postContent = document.createElement('p');
  postContent.classList.add('text-gray-700', 'dark:text-gray-300');
  postContent.textContent = content;

  // If image is uploaded, create an image element
  let postImage = null;
  if (image) {
    const reader = new FileReader();
    reader.onload = function(e) {
      postImage = document.createElement('img');
      postImage.src = e.target.result;
      postImage.classList.add('mt-4', 'rounded-lg', 'w-full');
      postContainer.appendChild(postImage);
      postContainer.appendChild(postTitle);
      postContainer.appendChild(postContent);

      // Append the new post to the posted news container
      document.getElementById('postedNews').appendChild(postContainer);

      // Clear the form
      document.getElementById('title').value = '';
      document.getElementById('content').value = '';
      document.getElementById('image').value = '';
    };
    reader.readAsDataURL(image);
  } else {
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postContent);

    // Append the new post to the posted news container
    document.getElementById('postedNews').appendChild(postContainer);

    // Clear the form
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
  }
});
