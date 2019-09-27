
import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Utilisateurs',
    icon: 'shopping-cart-outline',
    link: '/admin/users',
    home: true,
  },
  {
    title: 'Projets',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'eTrotter',
      },
      {
        title: 'CRM',
      },
      {
        title: 'DC',
      },
      {
        title: 'Salesforce',
      },
      {
        title: 'BO Google Home',
      },
      {
        title: 'App Google Home',
      },
    ],
  }
];
