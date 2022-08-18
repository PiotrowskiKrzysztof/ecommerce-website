import Header from "@components/organisms/Header";
import React, { PropsWithChildren } from "react";
import { useRouter } from "next/router";

import { navigation } from "./consts";

const MainLayout: React.FC<PropsWithChildren<unknown>> = ({
  children
}) => {
  const { asPath, pathname } = useRouter();
  if (pathname !== "/404") {
    return (
      <>
        <Header items={navigation} />
        {children}
      </>
    );
  }
  // if 404

  return <div>{children}</div>;
};

export default MainLayout;
