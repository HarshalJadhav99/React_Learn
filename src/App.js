import React, { createContext } from "react";
import ComponentClass from "./ComponentClass";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import Heading from "./Heading";
import List from "./List";
import Sample from "./Sample";
import Events from "./components/Events";
import Talker from "./components/Talker";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import LifeCycleA from "./components/LifeCycleA";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterProps from "./components/CounterProps";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
import ClassCounter from "./hooks/ClassCounter";
import HookCounter from "./hooks/HookCounter";
import HookCounterTwo from "./hooks/HookCounterTwo";
import HookCounterThree from "./hooks/HookCounterThree";
import HookCounterFour from "./hooks/HookCounterFour";
import CompoA from "./hooks/CompoA";
import HookEffect from "./hooks/HookEffect";
import HookMouse from "./hooks/HookMouse";
import FocusInput from "./hooks/FocusInput";
import FormHandler from "./components/FormHandler";
const FirstName = createContext();
const LastName = createContext();

function App() {
	return (
		<div className="App">
			{/* <Sample/>
        <Heading/>
        <List/>
        <ComponentClass/> */}

			{/* <Greet name="HJ" heroName="Superman"/>
        <Greet name="KJ" heroName="wonderwoman"/> */}

			{/* <Greet name="HJ" heroName="Superman"><p>This is children props.</p></Greet>
        <Greet name="KJ" heroName="wonderwoman"><button>Action</button></Greet>
        <Welcome name="HJ" heroName="Superman"/>
        <Welcome name="KJ" heroName="Wonderwoman"/> */}

			{/* <Message/> */}
			{/* <Counter /> */}

			{/* <Events/>
			<Talker /> */}

			{/* <FunctionClick/>
<ClassClick/> */}

			{/* <EventBinding/> */}

			{/* <LifeCycleA/> */}

			{/* <ClickCounter/>
<HoverCounter/> */}

			{/* <ClickCounterTwo/>
<HoverCounterTwo/> */}

			{/* <User name={(isLoggedIn)=> isLoggedIn ? 'Harshal' :'Guset'}/> */}

			{/* <CounterProps render={(count,incrementCount)=>(<ClickCounterTwo count={count} incrementCount={incrementCount} />)} />

<CounterProps render={(count,incrementCount)=>(<HoverCounterTwo count={count} incrementCount={incrementCount} />)} /> */}

			{/* <CounterProps>
{(count,incrementCount)=>(<ClickCounterTwo count={count} incrementCount={incrementCount} />)}
</CounterProps>

<CounterProps>
{(count,incrementCount)=>(<HoverCounterTwo count={count} incrementCount={incrementCount} />)}
</CounterProps> */}

			{/* <UserProvider value="Harshal">
				<ComponentC />
			</UserProvider> */}

			{/* <ClassCounter/> */}

			{/* <HookCounter/>
			<HookCounterTwo/>
			<HookCounterThree/>
			<HookCounterFour/> */}

			{/* <FirstName.Provider value={"Harshal"}>
				<LastName.Provider value={"Jadhav"}>
					<CompoA />
				</LastName.Provider>
			</FirstName.Provider> */}

			{/* <HookEffect/> */}
			
			{/* <HookMouse/> */}

			<FocusInput/>
			<FormHandler/>
		</div>
	);
}
export default App;
export { FirstName,LastName };
