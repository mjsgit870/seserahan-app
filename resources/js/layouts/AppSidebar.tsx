import { Inbox, ChartBar, UserRoundCog, Boxes } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Link, usePage } from "@inertiajs/react"
import { NavUser } from "./NavUser"

// Menu items.
const navLinks = [
  {
    group_name: 'Aplikasi',
    items: [
      {
        title: "Data Seserahan",
        url: "/seserahan",
        icon: ChartBar,
      },
      {
        title: "Master Satuan",
        url: "/satuan",
        icon: Boxes,
      }
    ]
  },
  {
    group_name: 'Administrasi',
    items: [
      {
        title: "User",
        url: "/users",
        icon: UserRoundCog,
      },
    ]
  }
]

const user = {
  name: 'Muhammad Julian Saputra',
  email: 'julian@gmail.com',
  avatar: 'https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2024/01/18/avatar-the-last-airbenderjpg-20240118123533.jpg'
}

export function AppSidebar() {
  const url = usePage().url

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader>
          <NavUser user={user} />
        </SidebarHeader>
        <SidebarSeparator />
        {navLinks.map((nav) => (
          <SidebarGroup>
            <SidebarGroupLabel>{nav.group_name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {nav.items.map((link) => (
                  <SidebarMenuItem key={link.title}>
                    <SidebarMenuButton asChild isActive={url.startsWith(link.url)}>
                      <Link href={link.url}>
                        <link.icon />
                        <span>{link.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
