import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {
	
	const [task, setTask] = useState("");
	const [taskList, setTaskList] = useState ([]);


		return (
		<div id="tares" className="d-flex justify-content-center align-items-center flex-column">
			<h1 id="titulo">TODOS</h1>
			<div className="card rounded-0 d-flex justify-content-center align-items-center flex-column mt-5">
				<div className="card-body p-0">
					<input 
						type="text"
						placeholder="What needs to be done?"
						className="form-control border-0 focus-ring focus-ring-light border-bottom rounded-0 ps-4 p-2"
						onChange={(e) => setTask (e.target.value)}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								setTaskList([...taskList, task]);
								setTask("");
								e.target.value = "";
							}
						}}
					/>
					{/* <button onClick={() => setTaskList([...taskList, task])} className="btn btn-primary my-2">
						Add Task
					</button> */}
					{taskList.length === 0 && <p className="mt-3 text-center">No tasks, add tasks</p>}
					{taskList.map((task, index) => 
						<p key={index}
							className="d-flex border-bottom justify-content-between align-items-center m-0 ps-4 p-2">
							{task}
							<button 
								onClick={()=> setTaskList(taskList.filter((item,ind)=> ind !== index)) }
								className="btn-close">
							</button> 
						</p>)
					}
					<h6
						className="fw-lighter text-muted m-2"
					>
							{taskList.length} {taskList.length === 1 ? "item" : "items"} left
					</h6>
				</div>
			</div>
		</div>
	);
};

export default Home;