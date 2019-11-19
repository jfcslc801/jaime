/* eslint-disable */
const project = async (
  name,
  description,
  technologies,
  photo,
  website
) => {
  console.log(name, description, technologies, photo, website);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/projects',
      data: {
        name,
        description,
        technologies,
        photo,
        website
      }
    });
    console.log('Successful login: ', res);
  } catch (err) {
    console.log(err);
  }
};

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const technologies = document.getElementById('technologies').value;
  const photo = document.getElementById('photo').value;
  const website = document.getElementById('website').value;
  project(name, description, technologies, photo, website);
});
