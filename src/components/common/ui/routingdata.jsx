import { lazy } from "react";


const Sales =lazy(()=>import( "../../../container/dashboard/sales/sales"));



export const Routedata = [

//**** Dashboards ****//

{ id: 1, path: `${import.meta.env.BASE_URL}dashboard/sales`, element: <Sales/> },

]