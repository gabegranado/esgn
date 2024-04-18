import { useState } from "react";
import { CategoryPills } from "../components/AllWatch/CategoryPills.tsx";
import { categories, videos } from "../components/AllWatch/data/home.ts";
import { PageHeader } from "../components/AllWatch/layouts/PageHeader.tsx";
import { VideoGridItem } from "../components/AllWatch/VideoGridItem.tsx";
import { Sidebar } from "../components/AllWatch/layouts/Sidebar.tsx";
import { SidebarProvider } from "../components/AllWatch/contexts/SidebarContext.tsx";
import React from "react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col scrollbar-hide">
        {/* <PageHeader /> */}
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          {/* <Sidebar /> */}
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map((video) => (
                <VideoGridItem key={video.id} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
