import {UseStateTutor, UseReducerTu, UseRefTutor } from "./Hooks"

function App() {
  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems: "center", marginTop:"10%"}}>
      {/* <UseStateTutor/>
      <UseReducerTutor/> */}
      <UseRefTutor />
    </div>
  );
}

export default App;
