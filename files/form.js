const formElem = document.getElementById('form');

formElem.addEventListener('submit', async (event) => {
  event.preventDefault();

  const body = new FormData(formElem);

  const reader = new FileReader();
  const data = {};

  reader.addEventListener('click', (e) => {
    console.log(e.target.result);
    console.log(new Uint8Array(e.target.result));
  });

  for (const key of body.keys()) {
    data[key] = body.get(key);
  }

  reader.readAsArrayBuffer(data.file);

  const fetchOptions = {
    method: 'POST',
    body,
  };

  const res = await fetch(
    'https://if-student-api.onrender.com/api/file',
    fetchOptions,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json;
    })
    .then((result) => result)
    .catch((error) => console.log(error.message));

  console.log(res);
});
