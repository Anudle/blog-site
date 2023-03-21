import MainNavigation from "./main-navigation"
function Layout(props){
    return(
        <>
            <MainNavigation></MainNavigation>
            <main>{props.children}</main>
        </>
    )
}

export default Layout