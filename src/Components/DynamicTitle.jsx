import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

const DynamicTitle = () => {
  const location = useLocation();

  const titleMap = {
    "/": "Home - Marathon App",
    "/login": "Log In - Marathon App",
    "/register": "Register - Marathon App",
    "/dashboard": "DashBoard - Marathon App",
    "/marathons": "Marathon List - Marathon App",
  };

  const currentTitle = titleMap[location.pathname] || "Marathon App";

  return (
    <Helmet>
      <title>{currentTitle}</title>
    </Helmet>
  );
};

export default DynamicTitle;