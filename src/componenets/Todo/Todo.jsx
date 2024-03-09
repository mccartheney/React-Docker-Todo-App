const changeTheme = (theme, setTheme) => {
    if (theme === "light") {setTheme("dark")}
    else if (theme === "dark") {setTheme("light")}
};

const Todo = (props) => {
    const {theme, setTheme} = props;

    return (
        <div className="main_component_todo">
            {/* header */}
            <div className="main_component_todo_header">
                <h1>
                    TODO
                </h1>

                {/* button to change theme */}
                <button onClick={() => changeTheme(theme, setTheme)}></button>
            </div>
        </div>
    );
};

export default Todo