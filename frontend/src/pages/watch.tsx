import React, { useState, useEffect } from "react";
import { CategoryPills } from "../components/AllWatch/CategoryPills.tsx";
import { categories, videos } from "../components/AllWatch/data/home.ts";
import { PageHeader } from "../components/AllWatch/layouts/PageHeader.tsx";
import { VideoGridItem } from "../components/AllWatch/VideoGridItem.tsx";
import { Sidebar } from "../components/AllWatch/layouts/Sidebar.tsx";
import { SidebarProvider } from "../components/AllWatch/contexts/SidebarContext.tsx";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getSubscribed } from "../actions/subscribe.js";

export default function App() {
  const dispatch = useDispatch();
  const subscribed = useSelector((state) => state.subscribed);
  const [shownSubscribed, setShownSubscribed] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Fetch subscribed data when the component mounts
  useEffect(() => {
    dispatch(getSubscribed("66244ebbbba78766afb8efff"));
  }, []);

  // Update shown subscribed when subscribed data changes
  useEffect(() => {
    const subscribeSelection = Object.values(subscribed).filter(
      (subscribed) => subscribed.subscribed
    );
    setShownSubscribed(subscribeSelection);
  }, [subscribed]);

  return (
    <SidebarProvider>
      <div className="max-h-screen flex justify-center scrollbar-hide">
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
            <h1>HERE:</h1>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {subscribed.map((subscribe) => (
                <h2>{subscribe.userID}</h2>
              ))}
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
