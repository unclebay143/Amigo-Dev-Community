const team = 
[
  {
    'githubName' : 'horlajay',
    'displayName' : 'HOLAY',
    'role' : 'Last team'
  },
  {
    'githubName' : 'Osaiteh',
    'displayName' : 'Glory',
    'role' : 'team'
  },

  {
    'githubName' : 'buhari44',
    'displayName' : 'Buhari',
    'role' : 'team'
  }
]

const getFollowers = async (name) => {
  const url = `https://api.github.com/users/${name}`;
  // try {
  //   const response = await fetch(url);
  //   console.log(url)
  //   const data = await response.json();
  //   document.getElementById("name").innerHTML = JSON.stringify(data.public_repos)
  //   if (data.message) {
  //     throw data.message;
  //   } else {
  //     // console.log(JSON.stringify(data))
  //     return { followers: data.followers, followers: data.name, repos: data.public_repos };
  //   }
  // } catch (error) {
  //   console.error(error);
  //   return { followers: 0, repos: 0 };
  // }

  // setTimeout( ()=>{
    let n = await fetch(url)
    let m = await n.json()

    console.log(m.public_repos)
    // document.getElementById("name2").innerHTML = `<tr>${m.public_repos}</tr>`
};

// for (let name of team){
//   getFollowers(name.githubName)
// }

for (let name = 0; name < team.length; name++ ){
  getFollowers(team[name].githubName)
  console.log(team[name].githubName)
  // document.getElementById("name3").innerHTML = team[name].githubName + "here"
}