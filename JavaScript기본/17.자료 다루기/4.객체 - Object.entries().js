/* Object.entries() */

const data = { // :을 기준으로 좌측은 key 우측은 value
    squadName: "Super hero squad",
    homeTown: "Metro city",
    formed: 2022,
    secretBase: "Super tower",
    active: true,
    members: [
        {
            name: "Molecule Man",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers: ["Radiation resistance", "turning tiny", "Radiation blast"],
        },
        {
            name: "Madame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes"],
        },
        {
            name: "Eternal Flame",
            age: 1000000,
            secretIdentity: "Unknown",
            powers: ["Immortality", "Heat Immunity", "Inferno", "Teleportation", "Interdimensional"],
        },
    ],
};

// Object.entries()는 [key, value] 둘다 같이 반환한다.
// key, value 따로 output하는 것이 아니라 둘다 같이 output을 할때 사용가능하다.

const entries = Object.entries(data);
console.log(entries);
/** output:
[
  [ 'squadName', 'Super hero squad' ],
  [ 'homeTown', 'Metro city' ],
  [ 'formed', 2022 ],
  [ 'secretBase', 'Super tower' ],
  [ 'active', true ],
  [ 'members', [ [Object], [Object], [Object] ] ]
]
 */