var axios = require('axios');
var prompt = require('prompt');

function getStudent(github_login) {
	axios.get(`https://api.github.com/users/${github_login}`)
	  .then(function (response) {
	    console.log('Username:', response['data'].login);
	    console.log('Name:', response['data'].name);
	    console.log('Public repos:', response['data'].public_repos);
	    // console.log('Last Updated:', response['data'].updated_at);
	    // console.log('URL:', response['data'].html_url);
	    console.log('-----')
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
};

var class_list = [{name: 'Divij', github: 'divijm'}, {name: 'Paulina', github: 'paulinaika'}, {name: 'Ethan', github: 'ethankhoa'}, {name: 'Advait', github: 'advaitju'}, {name: 'Joshua', github: 'jedney0901'}, {name: 'Stefan', github: 'AR8Stefan'}, {name: 'Hannah', github: 'hannahcancode'}, {name: 'Nick', github: 'nickwu78'}, {name: 'Elise', github: 'EliseYoung22'}, {name: 'Jess', github: 'JessTaDa'}, {name: 'Lee', github: 'shadolee'}, {name: 'Binny', github: 'BinnyK'}, {name: 'John', github: 'alucinare'}, {name: 'Charlotte', github: 'charhagelin'}, {name: 'Patrick', github: 'abazilla'}, {name: 'Dan', github: 'danmartin99'}, {name: 'Sav', github: 'savsaville'}, {name: 'Shouhei', github: 'shouheiyamauchi'}, {name: 'Aljosa', github: 'Al-josh'}, {name: 'Surya', github: 'suryast'}, {name: 'Kirsten', github: 'kirstenfrager'}, {name: 'Hyun', github: 'Hyunkim95'}, {name: 'Anna', github: 'StrannikAD'}, {name: 'Firman', github: 'Firmanc'}, {name:  'Marlon', github: 'marlbones'}, {name: 'Alex', github: 'arapl3y'}, {name: 'Sam', github: 'samturner3'}, {name: 'Taka', github: 'TakahiroSuzukiqq'}, {name: 'Bandita', github: 'Bdita'}]
// , {name: 'Sylvia', github: '?'}
// , {name: 'Asher', github: '?'}
// , {name: 'Tiong', github: '?'}

console.log("Getting class data from GitHub... \n")

class_list.map(function(student) {
	return getStudent(student.github)
});
