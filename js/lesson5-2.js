
const objTeam = {
    name: 'Chicago_Bulls',
};
console.log(objTeam);

const objTeamII = Object.create(objTeam);
objTeamII.wins = 100;
console.log(objTeamII);

const objTeamIII = Object.create(objTeamII);
objTeamIII.playerscount = 8;
console.log(objTeamIII);


