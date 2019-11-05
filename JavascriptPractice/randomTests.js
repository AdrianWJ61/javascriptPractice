// let arr = [1,2,3,4];

// let newArr = arr.map((v,i,a) => {
//     console.log(v % 2 === 0 ? v * 2 : v);
//   });


  const myUsers = [
    { name: 'chuloo', likes: 'grilled chicken' },
    { name: 'chris', likes: 'cold beer' },
    { name: 'sam', likes: 'fish biscuits' }
]

const usersByFood = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

    return container;
})


console.log(usersByFood);