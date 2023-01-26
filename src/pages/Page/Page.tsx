import { FunctionComponent } from "react";

interface PageProps {
    pageObj : any
}
 
const Page: FunctionComponent<PageProps> = ({pageObj}) => {
    return (  <div>{pageObj.title}</div> );
}
 
export default Page;