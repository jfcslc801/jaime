/* eslint-disable */
const project = async (
  name,
  description,
  technologies,
  imageCover,
  website
) => {
  console.log(name, description, technologies, imageCover, website);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/projects',
      data: {
        name,
        description,
        technologies,
        imageCover,
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
  const imageCover = document.getElementById('imageCover').value;
  const website = document.getElementById('website').value;
  project(name, description, technologies, imageCover, website);
});
