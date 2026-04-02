import { Link } from '@inertiajs/react';
import {
  BookOpen,
  FolderGit2,
  LayoutGrid,
  Tag,
  Package,
  Layers,
  MessageSquareQuote,
  Image,
  ImageIcon,

  Settings,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: dashboard(),
    icon: LayoutGrid,
  },
  {
    title: 'Categorias',
    href: '/admin/categories',
    icon: Layers,
  },
  {
    title: 'Marcas',
    href: '/admin/brands',
    icon: Tag,
  },
  {
    title: 'Produtos',
    href: '/admin/products',
    icon: Package,
  },
  {
    title: 'Depoimentos',
    href: '/admin/testimonials',
    icon: MessageSquareQuote,
  },
  {
    title: 'Logos Parceiros',
    href: '/admin/partner-logos',
    icon: Image,
  },
  {
    title: 'Banners',
    href: '/admin/banners',
    icon: ImageIcon,
  },

  {
    title: 'Configurações',
    href: '/admin/site-settings',
    icon: Settings,
  },
];

const footerNavItems: NavItem[] = [
  {
    title: 'Repository',
    href: 'https://github.com/laravel/react-starter-kit',
    icon: FolderGit2,
  },
  {
    title: 'Documentation',
    href: 'https://laravel.com/docs/starter-kits#react',
    icon: BookOpen,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={dashboard()} prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavFooter items={footerNavItems} className="mt-auto" />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
