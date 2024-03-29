import MembersList from "views/Members.js"
import EventsList from "views/Events"
import NewMember from "views/NewMember"
import NewEvent from "views/NewEvent";
import ImportMembers from "views/ImportMembers";
import EventDetails from "views/Eventdetails";

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
  },
  {
    hide: true,
    path: "/new-member",
    name: "New User",
    icon: "nc-icon nc-calendar-60",
    component: NewMember,
    layout: "/admin"
  },
  {
    hide: true,
    path: "/new-event",
    name: "New Event",
    icon: "nc-icon nc-calendar-60",
    component: NewEvent,
    layout: "/admin"
  },
  {
    hide: true,
    path: "/import-members",
    name: "Import Members",
    icon: "",
    component: ImportMembers,
    layout: "/admin"
  },
  {
    hide: true,
    path: "/event-details",
    name: "Event",
    icon: "",
    component: EventDetails,
    layout: "/admin"
  }
];
export default routes;
