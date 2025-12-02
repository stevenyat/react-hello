import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {
	
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState ([]);


		return (
		<div className="d-flex justify-content-center align-items-center flex-column">
			<h1>TODOS</h1>
			<input 
				type="text"
				placeholder="What needs to be done?"
				className="form-control w-25 mx-auto"
				onChange={(e) => setTask (e.target.value)}
				onKeyUp={(e) => {
					if (e.key === "Enter") {
						setTaskList([...taskList, task]);
						setTask("");
					}
				}}
			/>
			{/* <button onClick={() => setTaskList([...taskList, task])} className="btn btn-primary my-2">
				Add Task
			</button> */}
			{taskList.length === 0 && <p className="mt-3">No hay tareas, añadir tareas</p>}
			<ul>
				{taskList.map((task, index) => <li key={index}>{task}
					<button onClick={()=> setTaskList(taskList.filter((item,ind)=> ind !== index)) }
						className="btn-close"></button> 
					</li>)}
			</ul>
		</div>
	);
};

export default Home;