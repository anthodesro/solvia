import { 
  IconSettingsCheck,
  IconLayoutDashboard,
  IconAlertCircle,
  IconCircleDot,
  IconBoxMultiple1,
  IconTable,
  IconUserCog,
  IconBuildingBank,
  IconFolderOpen,
  IconFolderCog
} from '@tabler/icons-vue';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;  // Icône est un composant Vue
  to?: string;
  roles?: string[];
}

const sidebarItem: menu[] = [
  { header: 'Home' },
  {
    title: 'Dashboard',
    icon: IconLayoutDashboard,  // ✅ Directement assigner l'icône comme composant
    to: '/',
    roles: ['admin', 'user']
  },
  { header: 'UI' },
  {
    title: "Alert",
    icon: IconAlertCircle,
    to: "/ui-components/alerts",
    roles: ['gestio', 'admin']
  },
  {
    title: "Button",
    icon: IconCircleDot,
    to: "/ui-components/buttons",
    roles: ['admin', 'user']
  },
  {
    title: "Cards",
    icon: IconBoxMultiple1,
    to: "/ui-components/cards",
    roles: ['admin', 'user']
  },
  {
    title: "Tables",
    icon: IconTable,
    to: "/ui-components/tables",
    roles: ['admin']
  },

  { header: 'Projets' },
  {
    title: 'Mes Projets',
    icon: IconFolderOpen,
    to: '/projet',
    roles: ['guest']
  },
  {
    title: 'Mes Projets',
    icon: IconFolderCog,
    to: '/projets',
    roles: ['admin', 'gestio']
  },
  {
    title: 'Configuration',
    icon: IconFolderCog,
    to: '/projets/config',
    roles: ['admin', 'gestio']
  },

  { header: 'Trésorerie' },
  {
    title: 'Banque',
    icon: IconBuildingBank,
    to: '/tresorerie',
    roles: ['guest', 'admin', 'gestio']
  },

  { header: 'Admin' },
  {
    title: 'Utilisateurs',
    icon: IconUserCog,
    to: '/admin/GestionUser',
    roles: ['admin']
  },
  {
    title: 'Configurations',
    icon: IconSettingsCheck,
    to: '/admin/config',
    roles: ['admin']
  },
];

export default sidebarItem;
