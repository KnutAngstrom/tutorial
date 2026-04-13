 export default function WorkerPage(props) {
 console.log("Entering Worker, props", props);

  return (
  <>
  <h2>Worker Page</h2>
    <div>
      <button onClick={props.onClick} >Click to Log out</button>
    </div>
  </>
  );
}
