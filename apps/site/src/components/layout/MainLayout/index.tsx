import Header from "@components/organisms/Header";
import React, { PropsWithChildren } from "react";
import { useRouter } from "next/router";

import { navigation } from "./consts";
import { AppWraper } from "@components/misc/AppWraper";

const MainLayout: React.FC<PropsWithChildren<unknown>> = ({
  children
}) => {
  const { asPath, pathname } = useRouter();
  if (pathname !== "/404") {
    return (
      <AppWraper>
        <Header items={navigation} />
        {children}
      </AppWraper>
    );
  }
  // if 404

  return <div>{children}</div>;
};

export default MainLayout;
