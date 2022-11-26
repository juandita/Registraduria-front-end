import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Login",
    link: "/pages/seguridad/login",
    icon: "log-in-outline",
    home: true
  },
  {
    title: "Partidos Politicos",
    link: "/pages/partidopolitico/listar",
    icon: "home-outline",
  },
  {
    title: "Cuidadanos",
    link: "/pages/cuidadanos/listar",
    icon: "people-outline"
  },
  {
    title: "Mesas",
    link: "/pages/mesa/listar",
    icon: "clipboard-outline"
  },
  {
    title: "Candidatos",
    link: "/pages/candidato/listar",
    icon: "clipboard-outline"
  },
  {
    title: "Logout",
    link: "/pages/seguridad/logout",
    icon: "log-out-outline"
  },  
];
