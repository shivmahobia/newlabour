"use client";

import React from "react";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";

type Item = {
  key: string;
  label: string;
};

type DropdownSelectProps = {
  label: string;
  items: Item[];
  selectedKey: string | null;
  onSelect: (key: string) => void;
};

const DropdownSelect: React.FC<DropdownSelectProps> = ({ label, items, selectedKey, onSelect }) => {
  const [open, setOpen] = React.useState(false);

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    onSelect(key);
    setOpen(false);
  };

  const handleVisibleChange = (flag: boolean) => {
    setOpen(flag);
  };

  const renderMenuItem = (item: Item, isSelected: boolean) => (
    <div className="custom-dropdown-menu-item flex items-center justify-between">
      <span>{item.label}</span>
      {isSelected && <CheckOutlined className="text-primary" />}
    </div>
  );

  // Convert items for Dropdown v5
  const menuItems: MenuProps["items"] = items.map(item => ({
    key: item.key,
    label: renderMenuItem(item, selectedKey === item.key)
  }));

  const selectedLabel = selectedKey ? items.find(i => i.key === selectedKey)?.label : "-- Select --";

  return (
    <div>
      <div className="mb-1">
        <label className="text-black text-[14px] font-bold">{label}</label>
      </div>
      <Dropdown menu={{ items: menuItems, onClick: handleMenuClick }} trigger={["click"]} placement="bottom" open={open} onOpenChange={handleVisibleChange}>
        <Button className={`custom-dropdown-btn ${open ? "ant-dropdown-open" : ""} ${selectedKey ? "text-primary" : ""}`} title={selectedLabel || ""}>
          <span
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              display: "inline-block",
              maxWidth: "calc(100% - 24px)", // reserve space for arrow
              verticalAlign: "middle"
            }}
          >
            {selectedLabel}
          </span>
          <DownOutlined className={`transition-transform duration-300 ml-2 ${open ? "rotate-180" : ""}`} style={{ flexShrink: 0 }} />
        </Button>
      </Dropdown>
    </div>
  );
};

export default DropdownSelect;
