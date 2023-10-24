import "./style/dark.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import UsersList from "./pages/list/usersList";
import ProducstList from "./pages/list/productsList";
import AdminsList from "./pages/list/AdminsList";
import NotificationsList from "./pages/list/NotificationsList";

import SingleUser from "./pages/single/SingleUser"
import SingleProduct from "./pages/single/SingleProduct"

import EditUser from "./pages/edit/EditUser"
import EditProduct from "./pages/edit/EditProduct"

import NewUser from "./pages/new/NewUser";
import NewProduct from "./pages/new/NewProduct";
import NewAdmin from "./pages/new/NewAdmin";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

import { UseAutocompleteParametersn } from "@mui/material";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />

            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            
            <Route path="users"> 
              <Route
                index
                element={
                  <RequireAuth>
                    <UsersList />
                  </RequireAuth>
                }
              />
              <Route
                  path=":userId"
                  element={
                    <RequireAuth>
                      <SingleUser />
                    </RequireAuth>
                  }
                />
                
                <Route path="edit">
                  <Route
                  index
                   element={
                    <RequireAuth>
                      < h1>Verify your path</h1>
                    </RequireAuth>
                  }
                  />

                   <Route
                      path=":userId"
                      element={
                        <RequireAuth>
                          <EditUser  title="Edit User" />
                        </RequireAuth>
                  }
                  />
                </Route>
              
              

              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewUser inputs={userInputs} title="Add New User"  />
                  </RequireAuth>
                }
              />

            </Route>


            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <ProducstList />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <SingleProduct />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewProduct inputs={productInputs}  title="Add New Product" />
                  </RequireAuth>
                }
              />
              <Route path="edit">
                  <Route
                  index
                   element={
                    <RequireAuth>
                      < h1>Verify your path</h1>
                    </RequireAuth>
                  }
                  />

                   <Route
                      path=":productId"
                      element={
                        <RequireAuth>
                          <EditProduct title="Edit Product" />
                        </RequireAuth>
                  }
                  />
                </Route>
            </Route>

            <Route path="admins">
              <Route
                index
                element={
                  <RequireAuth>
                    <AdminsList />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewAdmin   title="Add New Admin" />
                  </RequireAuth>
                }
              />
              <Route
                path="notifications"
                element={
                  <RequireAuth>
                    <NotificationsList  title="Notifications" />
                  </RequireAuth>
                }
              />

                   
               
            </Route>

          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
