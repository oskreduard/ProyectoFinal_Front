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
    title: 'Resultado',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Crear resultado',
        link: '/pages/resultado/crear',
      },
      {
        title: 'Listar todas los resultado',
        link: '/pages/resultado/listar',
      }
    ],
  },
  {
    title: 'Seguidad',
    group: true,
  },
  {
    title: 'Usuarios',
    icon: 'lock-outline',
    children: [
      {
        title: 'Mostar Todos',
        link: '/pages/usuarios/listar',
      },
      {
        title: 'Crear',
        link: '/pages/usuarios/crear',
      },
      {
        title: 'Buscar :',
        children: [
          {
            title: 'Perfil',
            link: '/pages/usuarios/buscar',
          },
          {
            title: 'Asignar',
            link: '/pages/usuarios/buscar/modoAsignar',
          },
          {
            title: 'Editar',
            link: '/pages/usuarios/buscar/modoEditar',
          },
          {
            title: 'Eliminar',
            link: '/pages/usuarios/buscar/modoEliminar',
          }
        ]
      }
    ]
  },
  {
    title: 'Permisos',
    icon: 'lock-outline',
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
];
