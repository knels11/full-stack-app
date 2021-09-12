async function newFormHandler(event) {
  event.preventDefault();

  const pet_name = document.querySelector('input[name="pet-name"]').value;
  const pet_age = document.querySelector('input[name="pet-age"]').value;
  const pet_type = document.querySelector('input[name="pet-type"]').value;
  const pet_health = document.querySelector('input[name="pet-health"]').value;

  const response = await fetch(`/api/pets/`, {
    method: "POST",
    body: JSON.stringify({
      pet_name,
      pet_age,
      pet_type,
      pet_health,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log(response);
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-pet-form")
  .addEventListener("submit", newFormHandler);
