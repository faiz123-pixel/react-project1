import './App.css'
import A from './components/A'
import {ErrorBoundary} from "react-error-boundary"
import B from './components/B';
import C from './components/C';


function ErrorFallback({error}){
  return (
    <>
    <p>Somthing went Wrong, {error.message}</p>
    </>
  );
}

function App() {

  return (
    <>
    {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
      <A/>
    </ErrorBoundary> */}
    {/* <ErrorBoundary fallbackRender={({error, resetErrorBoundary })=>{
      return (
        <>
          <h1>Somthing went Wrong : {error.message}</h1>
          <button onClick={()=>resetErrorBoundary()}>Reset</button>
        </>
      )
    }}>
      <A/>
    </ErrorBoundary> */}
    <ErrorBoundary fallback={<h1>Somthing went wrong.</h1>}>
      {/* <A/> */}
      {/* <B/> */}
      <C/>
    </ErrorBoundary>
    </>
  )
}

export default App
