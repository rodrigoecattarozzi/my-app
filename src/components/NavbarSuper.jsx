/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarSuper() {
  const { user, signOutUser } = useContext(UserContext);

  const handleClickLogout = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <Disclosure as="nav" className="bg-slate-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Abrir menú principal</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {user ? (
                      <>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive
                              ? "bg-slate-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                              : "text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          }
                        >
                          Inicio
                        </NavLink>
                        <NavLink
                          to="/profile"
                          className={({ isActive }) =>
                            isActive
                              ? "bg-slate-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                              : "text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          }
                        >
                          Mi perfil
                        </NavLink>
                        <NavLink
                          to="/list"
                          className={({ isActive }) =>
                            isActive
                              ? "bg-slate-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                              : "text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          }
                        >
                          Lista de Obras Sociales
                        </NavLink>
                        <button
                          onClick={handleClickLogout}
                          className="text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Salir
                        </button>
                      </>
                    ) : (
                      <>
                        <NavLink
                          to="/login"
                          className={({ isActive }) =>
                            isActive
                              ? "bg-slate-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                              : "text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          }
                        >
                          Ingresar
                        </NavLink>
                        <NavLink
                          key="Register"
                          to="/register"
                          className={({ isActive }) =>
                            isActive
                              ? "bg-slate-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                              : "text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          }
                        >
                          Registrarse
                        </NavLink>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-slate-800 flex text-sm rounded-full hover:ring-2 hover:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white">
                      <span className="sr-only">Menú de usuario</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/profile"
                            className={classNames(
                              active ? "bg-slate-100" : "",
                              "block px-4 py-2 text-sm text-slate-700"
                            )}
                          >
                            Mi perfil
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/editProfile"
                            className={classNames(
                              active ? "bg-slate-100" : "",
                              "block px-4 py-2 text-sm text-slate-700"
                            )}
                          >
                            Editar perfil
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/login"
                            className={classNames(
                              active ? "bg-slate-100" : "",
                              "block px-4 py-2 text-sm text-slate-700 logout"
                            )}
                            type="button"
                            onClick={handleClickLogout}
                          >
                            Salir
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {user ? (
                <>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-slate-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Inicio
                  </NavLink>
                  <button
                    onClick={handleClickLogout}
                    className="text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Salir
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-slate-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Ingresar
                  </NavLink>
                  <NavLink
                    key="Register"
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-slate-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Registrarse
                  </NavLink>
                </>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
