export default function LoginPage(props) {
console.log("Entering LoginPage, props", props);
  return (
	<>
	<h2>Login Page</h2>
	 	<div>
			<button onClick={props.onClick} >Click to Log in</button>
		</div>
	</>
	);
}