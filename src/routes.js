import MembersList from "views/Members.js"
import EventsList from "views/Events"

var routes = [
  {
    path: "/members",
    name: "Miembros",
    icon: "nc-icon nc-tile-56",
    component: MembersList,
    layout: "/admin"
  },
  {
    path: "/events",
    name: "Eventos",
    icon: "nc-icon nc-calendar-60",
    component: EventsList,
    layout: "/admin"
  }
];
export default routes;
