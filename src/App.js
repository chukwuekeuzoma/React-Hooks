import {
  UseStateTutor,
  UseReducerTutor,
  UseRefTutor,
  ImperitiveHandleTutor,
  ReactMemoTutor,
} from "./Hooks";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
      }}
    >
      {/* <UseStateTutor/>
      <UseReducerTutor/> */}
      {/* <UseRefTutor /> */}
      {/* <ImperitiveHandleTutor /> */}
      <ReactMemoTutor />
    </div>
  );
}

export default App;
