const UserList = [
    {
        id: 1,
        name: 'Harsha',
        username: 'khv2077',
        age: 23,
        nationality: 'USA',
        friends: [
            {
                id: 2,
                name: 'Vamsi',
                username: 'kvk2022',
                age: 25,
                nationality: 'CANADA'
            },
            {
                id: 4,
                name: 'Hema',
                username: 'hema2017',
                age: 22,
                nationality: 'INDIA'
            }
        ]
    },
    {
        id: 2,
        name: 'Vamsi',
        username: 'kvk2022',
        age: 25,
        nationality: 'CANADA',
        friends: [
            {
                id: 1,
                name: 'Harsha',
                username: 'khv2077',
                age: 23,
                nationality: 'USA'
            },
            {
                id: 5,
                name: 'Samba Siva Rao',
                username: 'kssr1966',
                age: 56,
                nationality: 'VIETNAM'
            }
        ]
    },
    {
        id: 3,
        name: 'Nandu',
        username: 'deepak2020',
        age: 24,
        nationality: 'AUSTRALIA',
        friends: [
            {
                id: 4,
                name: 'Hema',
                username: 'hema2017',
                age: 22,
                nationality: 'INDIA'
            }
        ]
    },
    {
        id: 4,
        name: 'Hema',
        username: 'hema2017',
        age: 22,
        nationality: 'INDIA'
    },
    {
        id: 5,
        name: 'Samba Siva Rao',
        username: 'kssr1966',
        age: 56,
        nationality: 'VIETNAM'
    }
];

const MovieList = [
    {
        id: 1,
        name: 'Avengers Endgame',
        yearOfPublication: 2019,
        isInTheaters: true
    },
    {
        id: 2,
        name: 'Interstellar',
        yearOfPublication: 2007,
        isInTheaters: true
    },
    {
        id: 3,
        name: 'Superbad',
        yearOfPublication: 2009,
        isInTheaters: true
    },
    {
        id: 4,
        name: 'Harsha The Movie',
        yearOfPublication: 2035,
        isInTheaters: false
    }
];

module.exports = { UserList, MovieList };
