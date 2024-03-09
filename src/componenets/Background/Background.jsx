// import light images
import lightBackground from "../../images/bg-desktop-light.jpg";
import lightBackgroundMb from "../../images/bg-mobile-light.jpg";

// import dark images
import darkBackground from "../../images/bg-desktop-dark.jpg";
import darkBackgroundMb from "../../images/bg-mobile-dark.jpg";


// Componenent wich return the image by theme and size
const BackgroundImage = ({theme}) => {
    if (theme === "dark") { // return dark wallpaper
        return (
            <picture>
                <source
                    media="(max-width: 1024px)"
                    srcSet={darkBackgroundMb}
                />
                <img srcSet={darkBackground} className="MainContent_background--img" alt="background" />
            </picture>
        )
    } else { // return light wallpaper
        return (
            <picture>
                <source
                    media="(max-width: 1024px)"
                    srcSet={lightBackgroundMb}
                />
                <img srcSet={lightBackground} className="MainContent_background--img" alt="background" />
            </picture>
        )
    }

}

// main component for this file, return background
const Background = (props) => {
    // get theme from props
    const {theme} = props

    // return div with background
    return (
        <div className="MainContent_background">
            <BackgroundImage theme={theme}/>
        </div>
    );
}

// export Background
export default Background