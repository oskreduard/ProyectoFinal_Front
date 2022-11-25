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
        link: '/pages/partidos/crear',
      },
      {
        title: 'Listar Todos',
        link: '/pages/partidos/listar',
      },
      {
        title: 'Buscar por Id',
        link: '/pages/partido/finbyid',
      },
      {
        title: 'Actualizar',
        link: '/pages/partido/actualizar',
      },
      {
        title: 'Eliminar',
        link: '/pages/partido/eliminar',
      },
    ],
  },
  {
    title: 'Permisos',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Crear Permiso',
        link: '/pages/permiso/crear',
      },
      {
        title: 'Listar todas los permisos',
        link: '/pages/permiso/listar',
      }
    ],
  },
  {
    title: 'Mesas',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Crear mesa',
        link: '/pages/mesa/crear',
      },
      {
        title: 'Listar todas las mesas',
        link: '/pages/mesa/listar',
      }
    ],
  },
  {
    title: 'Candidato',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Crear Candidato',
        link: '/pages/candidato/crear',
      },
      {
        title: 'Listar todas los candidatos',
        link: '/pages/candidato/listar',
      }
    ],
    
  },
  {
    title: 'resultado',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Crear resultado',
        link: '/pages/resultado/crear',
      },
      {
        title: 'Listar todos los resultado',
        link: '/pages/resultado/listar',
      }
    ],
    
  }
  /*{
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
  }*/ 
];
