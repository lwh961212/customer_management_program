import "./App.css";
import Customer from "./components/Customer/Customer";
const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "이원희",
    birthday: "960114",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "이원희2",
    birthday: "960114",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "이해피",
    birthday: "960114",
    gender: "여자",
    job: "대학생",
  },
];
function App() {
  //수정
  return (
    <div>
      {customers.map((customer) => {
        return (
          <Customer
            key={customer.id}
            id={customer.id}
            image={customer.image}
            name={customer.name}
            birthday={customer.birthday}
          />
        );
      })}
    </div>
  );
}

export default App;
