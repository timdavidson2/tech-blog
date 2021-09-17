const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();
  const description = document.querySelector("#blog-desc").value.trim();

  if (title && description) {
    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("FAILED TO CREATE BLOG");
    }
  }
};

const delButtonHandler = async (event) => {};
