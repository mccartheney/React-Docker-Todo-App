// import react things
import { useState } from "react";

// import components
import Background from "./componenets/Background/Background";
import Todo from "./componenets/Todo/Todo";

// return application
const App = () => {
    // state to manage theme
    const [theme, setTheme] = useState("dark")

    // return all components from App
    return(
        <div className={`mainContent ${theme}`}>
            {/* component for background */}
            <Background theme={theme}/>
 
            {/* component for todo */}
            <Todo theme={theme} setTheme={setTheme}/>
        </div>
    )
};

// export App
export default App