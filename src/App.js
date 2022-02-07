import logo from './logo.svg';
import './App.css';
import { NamedOne } from "./components/1.functions/namedone";
// import Welcome from "./components/2.class/welcome";
import Hello from "./2.jsx/hello";
import Greeting from "./props/greeting";
import Welcome from "./props/welcome";
import Counter from "./state/counter";
import CounterOne from "./state/counterOne";
import Message from "./state/message";
import Person from "./state/Person";
import FunctionClick from "./event-handling/FunctionClick";
import ClassClick from "./event-handling/classClick";
import EventBind from "./event-handling/event-bind";
import EventBindOne from "./event-handling/eventBindOne";
import Parent from "./event-handling/parent-child/Parent";
import UserGreeting from "./conditional-rendering/UserGreeting";
import UserGreetingOne from "./conditional-rendering/UserGreetingOne";


function App() {
  return (
    <div className="container">
        <UserGreetingOne/>
        {/*<Parent/>*/}
        {/*<EventBindOne/>*/}
        {/*<ClassClick/>*/}
        {/*<CounterOne/>*/}
        {/*<FunctionClick/>*/}
        {/*<EventBind/>*/}
        {/*<Person/>*/}
        {/*<Message/>*/}
        {/*<Counter desc={'This is counter'}/>*/}
        {/*<Greeting name={'sumit'} role={"Manager"} age={21} />*/}
        {/*<Greeting name={"amit"} role={"Developer"} age={20}/>*/}
        {/*<Greeting name={"aryan"} role={"Scrum master"} age={34}/>*/}
        {/*<Greeting name={'Arush'} role={'Head'} age={12}>*/}
        {/*    <Hello/>*/}
        {/*<Welcome message={'welcome'} author={'ankit bhadauria'}/>*/}
        {/*</Greeting>*/}
        {/*<NamedOne/>*/}
        {/*<Welcome/>*/}
        {/*<Hello />*/}
    </div>
  );
}

export default App;
