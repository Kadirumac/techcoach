import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { selectHomepage } from "../../features/reducers/homepageSlice";

interface HomepageProps {
}

const Homepage: FunctionComponent<HomepageProps> = () => {
  const { homepage }: any = useSelector(selectHomepage);

  return <div>{homepage.id}</div>;
};

export default Homepage;
