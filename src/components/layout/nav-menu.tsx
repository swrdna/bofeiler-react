import {
  ChevronRight,
  Database,
  LayoutDashboard,
  ScanBarcode,
  Settings2,
  Truck,
  WalletCards,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';

const items = [
  {
    title: 'Inventory',
    url: '#',
    icon: Truck,
    isActive: true,
    items: [
      {
        title: 'Items',
        url: '#',
      },
      {
        title: 'Purchases',
        url: '#',
      },
      {
        title: 'Stock Opname',
        url: '#',
      },
      {
        title: 'Transfer',
        url: '#',
      },
      {
        title: 'Return',
        url: '#',
      },
    ],
  },
  {
    title: 'POS',
    url: '#',
    icon: ScanBarcode,
    items: [
      {
        title: 'Drawers',
        url: '#',
      },
      {
        title: 'Cashier',
        url: '#',
      },
      {
        title: 'Transactions',
        url: '#',
      },
      {
        title: 'Return',
        url: '#',
      },
    ],
  },
  {
    title: 'Finance',
    url: '#',
    icon: WalletCards,
    items: [
      {
        title: 'Expenses',
        url: '#',
      },
      {
        title: 'Incomes',
        url: '#',
      },
      {
        title: 'Debt',
        url: '#',
      },
      {
        title: 'Payment',
        url: '#',
      },
    ],
  },
  {
    title: 'Master Data',
    url: '#',
    icon: Database,
    items: [
      {
        title: 'Users',
        url: '#',
      },
      {
        title: 'Members',
        url: '#',
      },
    ],
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings2,
    items: [
      {
        title: 'General',
        url: '#',
      },
      {
        title: 'Printer',
        url: '#',
      },
    ],
  },
];

const NavMenu = () => {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Dashboard" asChild>
            <Link to="/">
              <LayoutDashboard />
              <span>Dashboard</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMenu;
