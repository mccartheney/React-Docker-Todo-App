// inporting themes images
import darkImage from "../../../images/icon-sun.svg"
import lightImage from "../../../images/icon-moon.svg"

// function to change image theme by theme
const ThemeImage = ({ theme }) => {
    if (theme === "dark") return (<img srcSet={darkImage} alt="changeTheme"/>)
    else if (theme === "light") return (<img srcSet={lightImage} alt="changeTheme" />)
};

// function to change theme
const changeTheme = (theme, setTheme) => {
    if (theme === "light") { setTheme("dark") }
    else if (theme === "dark") { setTheme("light") }
};

// fuction that returns todo header
const TodoHeader = (props) => {
    // get themes states from props
    const {theme, setTheme} = props;

    // return todo header
    return (
        <>
            {/* header */ }
            <div className="main_component_todo_todos_header">
                <h1>
                    TODO
                </h1>

                {/* button to change theme */}
                <button onClick={() => changeTheme(theme, setTheme)}><ThemeImage theme={theme} /></button>
            </div>
        </>
    )
}

// export TodoHeader
export default TodoHeader;