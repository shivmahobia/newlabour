"use client";

import React, { useState } from "react";
import { Dropdown, Menu, Button } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import BreadCrumb from "@/components/BreadCrumb";
import { Image, Empty, Skeleton } from "antd";

const links = [
  { name: "HOME", href: "/" },
  { name: "MEDIA", href: "" },
  { name: "GALLERY", href: "" }
];

// Example gallery data (no category property)
const galleryItems = [
  { id: 1, title: "Gallery 1", img: "" },
  { id: 2, title: "Gallery 2", img: "" },
  { id: 3, title: "Gallery 3", img: "" },
  { id: 4, title: "Gallery 4", img: "" },
  { id: 5, title: "Gallery 5", img: "" },
  { id: 6, title: "Gallery 6", img: "" },
  { id: 7, title: "Gallery 7", img: "" },
  { id: 8, title: "Gallery 8", img: "" },
  { id: 9, title: "Gallery 9", img: "" }
];

// Filter options
const filterOptions = [{ key: "all", label: "All" }];

const CARD_MAX_WIDTH = 360;
const CARD_IMAGE_HEIGHT = 180;

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // No category property, so just show all items
  const filteredItems = galleryItems;

  const onFilterSelect: MenuProps["onClick"] = ({ key }) => {
    setSelectedFilter(key);
    setFilter(key);
    setDropdownOpen(false);
  };

  const menu = (
    <Menu
      selectedKeys={[selectedFilter]}
      onClick={onFilterSelect}
      items={filterOptions.map(item => ({
        key: item.key,
        label: (
          <div className="flex items-center justify-between px-3">
            <span className="text-base">{item.label}</span>
            {selectedFilter === item.key && <CheckOutlined className="text-blue-600" />}
          </div>
        )
      }))}
    />
  );

  return (
    <div className="px-2 md:px-20">
      <BreadCrumb links={links} />
      <div className="relative rounded-md shadow-md bg-white py-6">
        {/* Centered Gallery Title */}
        <div className="flex justify-center px-4">
          <div className="font-semibold text-center text-[24px] text-[#00487C] mb-2 w-full">Gallery</div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-200 py-2 mx-4 sm:mx-10 mb-4"></div>

        {/* Filter in right corner */}
        <div className="flex justify-end px-10 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-sm font-medium">Filter By:</span>
            <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight" open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <Button
                className={`flex items-center gap-1 rounded-full border border-[#00487C] bg-[#E6F0FA] text-[#00487C] text-sm font-semibold px-4 py-1 transition hover:bg-[#D0E2FA] ${
                  dropdownOpen ? "ant-dropdown-open" : ""
                }`}
                style={{ minWidth: 90 }}
              >
                <span>{filterOptions.find(opt => opt.key === selectedFilter)?.label || "All"}</span>
                <DownOutlined className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </Button>
            </Dropdown>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="flex justify-center items-center py-10">
            <Empty description="No Images Found" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-4 justify-items-center">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-300 shadow-sm hover:shadow-md transform hover:scale-[1.03] transition duration-200 cursor-pointer max-w-[360px] w-full overflow-hidden"
              >
                {/* Image or Skeleton */}
                {item.img ? (
                  <Image
                    src={item.img}
                    alt={item.title}
                    width="100%"
                    height={CARD_IMAGE_HEIGHT}
                    style={{
                      objectFit: "cover",
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12
                    }}
                    preview={false}
                  />
                ) : (
                  <div className="w-full h-[180px] bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <Skeleton.Image active style={{ width: "90%", height: 160, borderRadius: 12 }} />
                  </div>
                )}

                {/* Title below image */}
                <div className="px-4 py-3">
                  <h3 className="text-gray-800 text-base font-semibold truncate">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
