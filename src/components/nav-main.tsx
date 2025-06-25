'use client';

import { IconPlus, IconFileSmile } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-2">
                <IconFileSmile />
                <span>설문 생성</span>
              </div>
            </div>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0 cursor-pointer"
              variant="outline"
            >
              <IconPlus />
              <span className="sr-only">설문 생성</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
