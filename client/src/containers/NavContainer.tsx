import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NavPresenter from "../presenters/NavPresenter";

function NavContainer() {
  const location = useLocation();
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(location.pathname.split('/')[1]);
  }, [location]);

  return (
    <NavPresenter pathname={pathname} />
  )
}

export default NavContainer;