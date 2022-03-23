/* 2. 객체 - Object.keys() */
/* Object.key()는 메소드는 주어진 객체의 속성 이름들을 일반적인 
반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다. */

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

// key값을 output하려면 Object.keys()해주면됨

const keys = Object.keys(data); // object의 data안에 들어있는 keys들을 뽑아낼때 사용
console.log(keys);

/** 객체 Object.keys(data)의 output:
 * 
[
  'squadName',
  'homeTown',
  'formed',
  'secretBase',
  'active',
  'members'
]
 */