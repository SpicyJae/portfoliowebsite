import React, { useEffect, useState } from "react";
import { Preloader } from './Preloader';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>{
      !loading ? (
        <div className="App">
          <header className="App-header">
            loaded
          </header>
        </div>
      ) : (
        <Preloader/>
      )
    }
    </>

  );
}

export default App;
