import { observer } from "mobx-react-lite"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Loader, { LoaderSize } from "../Loader/Loader"

function Layout() { 
    return ( 
        <>
            <Loader size={LoaderSize.large} blockScroll fullScreen/>
            <Header />
            <Outlet />
            
        </>
        
    )
}

export default observer(Layout)