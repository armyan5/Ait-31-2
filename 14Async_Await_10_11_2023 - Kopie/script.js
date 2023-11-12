const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const usersBtn = document.getElementById('loadUsersBtn');
const postsBtn = document.getElementById('loadPostsBtn');


postsBtn.addEventListener('click',async() => {
  const posts = await fetchPosts();
  displayUsers(posts);
})


async function fetchPosts() { // delayem functia fatchUsers
  try {
  const response = await fetch(`${BASE_URL}posts`); // delayem zapros po ssilke i tochnee na users (await-spasi ) !!!
  const posts = await response.json();
  return posts;

  } catch (error) {
    console.log(error);

  };
};


function displayPosts(posts) { // delayem functia displayUsers
  postList.innerHTML = ' ';
  posts.forEach(({title,body}) => {
    const li = document.createElement('li');  // kisata erkrord knopifunkcian nayel codi mej u uxxel
  
    li.innerHTML = `                   
    <h4>${title}</h4>
    <p>${title}</p>
    `;
     name + ' ' + phoneFormatted;
    postList.appendChild(li);

  });
}



usersBtn.addEventListener('click',async() => {
  const users = await fetchUsers();
  displayUsers(users);
})


async function fetchUsers() { // delayem functia fatchUsers
  try {
  const response = await fetch(`${BASE_URL}users`); // delayem zapros po ssilke i tochnee na users (await-spasi ) !!!
  const users = await response.json();
  return users;

  } catch (error) {
    console.log(error);

  };
};


function displayUsers(users) { // delayem functia displayUsers
  userList.innerHTML = ' ';
  users.forEach(({name, phone, address : {geo: {let, ing}}}) => {
    const li = document.createElement('li');
    const phoneFormatted = phone.split(' ')[0];
    li.textContent = name + ' ' + phoneFormatted;
    userList.appendChild(li);

  });
}



// const list = document.getElementById('userList');
// const details = document.getElementById('userDetails');


// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => {
//         users.forEach(user => {
//             const li = document.createElement('li');
//             li.classList.add('li');
//             li.textContent = user.name;
//             // () => displayUserDetails(user) !!! displayUserDetails(user)  !!! displayUserDetails // shat tarber bameren
//             li.addEventListener('click', () => displayUserDetails(user));
//             list.appendChild(li);
//         })

//       })

//       .catch(err => {
//         const li = document.createElement('li');
//         li.textContent = err;
//         list.appendChild(li);

//       } ) 
//       .finally(console.log('Finish'));

//       function displayUserDetails({name, email, phone, website, company: {name: brand}, address:{city,street,suite}}) {
//         details.innerHTML = `
//         <h2>${name}</h2>
//         <p><strong>Email: </strong>${email}</p>
//         <p><strong>Phone: </strong>${phone}</p>
//         <p><strong>Website: </strong>${website}</p>
//         <p><strong>Company: </strong>${brand}</p>
//         <p><strong>Address: </strong>${city} ${street} ${suite}</p>

//         `;

        
//       }



    