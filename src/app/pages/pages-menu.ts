import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: 'Modulos',
    group: true,
  },
  {
    title: 'Candidato',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Mostar Todos',
        link: '/pages/candidato/listar',
      },
      {
        title: 'Crear',
        link: '/pages/candidato/crear',
      },
      {
        title: 'Buscar',
        children: [
          {
            title: 'Perfil',
            link: '/pages/candidato/buscar',
          },
          {
            title: 'Asignar',
            link: '/pages/candidato/buscar/modoAsignar',
          },
          {
            title: 'Editar',
            link: '/pages/candidato/buscar/modoEditar',
          },
          {
            title: 'Eliminar',
            link: '/pages/candidato/buscar/modoEliminar',
          }
        ]
      }
    
          
        ]
      },
  {
    title: 'Partidos',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Mostar Todos',
        link: '/pages/partidos/listar',
      },
      {
        title: 'Crear',
        link: '/pages/partidos/crear',
      }
    ],
  },
  {
    title: 'Mesas',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Mostar Todos',
        link: '/pages/mesa/listar',
      },
      {
        title: 'Crear',
        link: '/pages/mesa/crear',
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
        title: 'Mostar Todos',
        link: '/pages/permiso/listar',
      },
      {
        title: 'Crear',
        link: '/pages/permiso/crear',
      }
    ],
  },
  {
    title: 'Roles',
    icon: 'lock-outline',
    children: [
      {
        title: 'Mostar Todos',
        link: '/pages/rol/listar',
      },
      {
        title: 'Crear',
        link: '/pages/rol/crear',
      }
    ],
  },
];
