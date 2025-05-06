import { Calendar, ChartArea, Inbox, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { AppRoutes } from "@/utils/AppRoutes";

const items = [
  {
    title: "Dashboard",
    url: AppRoutes.admin.dashboard,
    icon: ChartArea,
  },
  {
    title: "Appointments",
    url: AppRoutes.admin.appointments,
    icon: Calendar,
  },
  {
    title: "Messages",
    url: AppRoutes.admin.messages,
    icon: Inbox,
  },
  {
    title: "Settings",
    url: AppRoutes.admin.settings,
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
