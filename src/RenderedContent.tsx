import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { selectHomepage } from "./features/reducers/homepageSlice";
import Homepage from "./pages/Home/Home";
import Page from "./pages/Page/Page"


interface RenderedContentProps {
    
}
 
const RenderedContent: FunctionComponent<RenderedContentProps> = () => {
    const { homepage }: any = useSelector(selectHomepage);

    const routesPages = homepage.children.map((page: any, index: number) => (
        <Route path={page.title} element={<Page pageObj={page} />} />
      ));
    return ( <>
    
    <Navigation />
      <Routes>
        {routesPages}
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </> );
}
 
export default RenderedContent;