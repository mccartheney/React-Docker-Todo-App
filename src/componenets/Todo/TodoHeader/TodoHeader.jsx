import darkImage from "../../../images/icon-sun.svg"
import lightImage from "../../../images/icon-moon.svg"


const ThemeImage = ({ theme }) => {
    if (theme === "dark") return (<img srcSet={darkImage} alt="changeTheme"/>)
    else if (theme === "light") return (<img srcSet={lightImage} alt="changeTheme" />)
};

const changeTheme = (theme, setTheme) => {
    if (theme === "light") { setTheme("dark") }
    else if (theme === "dark") { setTheme("light") }
};


const TodoHeader = (props) => {
    const {theme, setTheme} = props;

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

export default TodoHeader;