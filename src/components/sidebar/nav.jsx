

const Dashboardicon = <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>

const Erroricon = <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"></path> </svg>

const NestedmenuIcon = <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"></path> </svg>

export const MENUITEMS = [

  {
    menutitle: "MAIN",
  },

  {
    title: "Dashboards", icon: Dashboardicon, type: "sub", active: false, children: [
      { path: `${import.meta.env.BASE_URL}dashboard/sales`, type: "link", active: false, selected: false, title: "Sales" },
    ]
  },
 
  {
    menutitle: "WEB APPS"
  },

  {
    icon: NestedmenuIcon,
    title: "Nested Menu",
    selected: false,
    active: false,
    type: "sub",
    children: [
      {
        path: "",
        title: "Nested-1",
        type: "empty",
        active: false,
        selected: false,
        dirchange: false,
      },

      {
        title: "Nested-2",
        type: "sub",
        active: false,
        selected: false,
        dirchange: false,
        children: [
          {
            path: "",
            type: "empty",
            active: false,
            selected: false,
            dirchange: false,
            title: "Nested-2-1",
          },
          {
            path: "",
            type: "empty",
            active: false,
            selected: false,
            dirchange: false,
            title: "Nested-2-2",
            children :[
              {
                path: "",
                type: "empty",
                active: false,
                selected: false,
                dirchange: false,
                title: "Nested-2.2.1",
              },
              {
                path: "",
                type: "empty",
                active: false,
                selected: false,
                dirchange: false,
                title: "Nested-2.2.2",
              },
            ]
          },
         
        ],
      },
    ],
  },
  {
    menutitle: "PAGES"
  },
  {
    icon: Erroricon, title: "Error", type: "sub", active: false, selected: false, children: [
      { path: `${import.meta.env.BASE_URL}authentication/error/404-error`, type: "link", active: false, selected: false, title: "404-Error" },
    ]
  },
 
]