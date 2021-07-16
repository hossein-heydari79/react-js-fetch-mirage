import React from "react";
const UsersList = React.lazy(() => import("./pages/UsersList/UsersList.jsx"));
const UserProfile = React.lazy(() =>
  import("./pages/UserProfile/UserProfile.jsx")
);
const CreateUser = React.lazy(() =>
  import("./pages/CreateUser/CreateUser")
);

const routes = [
  { path: "/", expect: true, component: UsersList },
  { path: "/:id(\\d+)", expect: true, component: UserProfile },
  { path: "/create", expect: true, component: CreateUser },
];

export default routes;
