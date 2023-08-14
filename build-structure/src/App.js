import './App.css';

function App() {
  let fruit = ['apple', 'banana', 'peach', 'pear']
  let [apple, ...etc] = fruit
  // 전개연산자 (...)은 반드시 마지막 요소에 넣어주어야 한다.


  const users = [
    {
      name: '이지형',
      age : 20,
      gender: '남',
      address: {
        city: {
          cityName: '서울',
          ward: {
            wardName: '중구',
          }
        }
      }
    },
    {
      name: '킹민재',
      age : 27,
      gender: '남',
      address: {
        city: {
          cityName: '인천',
          ward: {
            wardName: '부평구',
          }
        }
      }
    }
  ]

  
  
  // const [{name, age, gender, address: {
  //   city: {
  //     cityName, ward: {
  //       wardName
  //     }
  //   }
  // }}] = users;



  // users.map(({name, age, gender, cityName}) => {
  //   console.log(name)
  //   return console.log(cityName)
  // });

  return (
    <div className="App">
     {users.map((user) => (
        <div>{user.address.city.cityName}</div>
     ))}
    </div>
  );
}

export default App;
