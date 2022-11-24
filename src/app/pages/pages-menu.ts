import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: 'Modulos',
    group: true,
  },
  {
    title: 'Partidos',
    icon: 'layout-outline',
    children: [
      {
        title: 'Crear',
        link: '/partido/crear',
      },
      {
        title: 'Listar Todos',
        link: '/partido/listar',
      },
      {
        title: 'Buscar por Id',
        link: '/partido/finbyid',
      },
      {
        title: 'Actualizar',
        link: '/partido/actualizar',
      },
      {
        title: 'Eliminar',
        link: '/partido/eliminar',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  }
];
