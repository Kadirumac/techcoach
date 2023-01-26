import { FunctionComponent, useEffect } from "react";
import RenderedContent from "../../RenderedContent";

interface AdminProps {}

const Admin: FunctionComponent<AdminProps> = () => {
  const path = window.location.pathname;

  useEffect(() => {}, []);

  return (
    <div className="admin">
      <div className="App">
        <RenderedContent />
      </div>
    </div>
  );
};

export default Admin;
