/* Object.values() */

/* Object.values() 메소드는 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의
값들로 이루어진 배열을 리턴합니다
이 배열은 for.... in 구문과 동일한 순서를 가집니다. (for in 반복문은 프로토타입 체인 또는
    열거한다는 점에서 차이가 있습니다.) */

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

// value를 출력하려면 Object.values()해주면 된다.

const value = Object.values(data);
console.log(value);

/** 객체 Object.values()의 output:
[
  'Super hero squad',
  'Metro city',
  2022,
  'Super tower',
  true,
  [
    {
      name: 'Molecule Man',
      age: 29,
      secretIdentity: 'Dan Jukes',
      powers: [Array]
    },
    {
      name: 'Madame Uppercut',
      age: 39,
      secretIdentity: 'Jane Wilson',
      powers: [Array]
    },
    {
      name: 'Eternal Flame',
      age: 1000000,
      secretIdentity: 'Unknown',
      powers: [Array]
    }
  ]
]
 */