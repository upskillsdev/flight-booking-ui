import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
  SharedSelection,
} from "@heroui/react";
import { ArrowDownNarrowWide } from 'lucide-react';

import { SORT_OPTIONS } from '../constants';
import { FlightSortKey } from '../types';

type FlightSortMenuProps = {
  onSortChange: (sortValue: FlightSortKey | null) => void;
};

export const FlightSortMenu = ({ onSortChange }: FlightSortMenuProps) => {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>();

  const handleSelectionChange = (keys: SharedSelection) => {
    setSelectedKeys(keys);

    const values = Array.from(keys).map(
      (key) => key.toString() as FlightSortKey
    );

    if (!values.length) {
      onSortChange(null);
      return;
    }

    const selectedSortKey = values[0];
    onSortChange(selectedSortKey);
  };

  return (
    <Dropdown backdrop="opaque">
      <DropdownTrigger>
        <Button
          fullWidth
          variant="bordered"
          size="sm"
          color="primary"
          startContent={<ArrowDownNarrowWide size={14} />}
        >
          Sort
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Sort flight"
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
      >
        {Object.entries(SORT_OPTIONS).map(([key, value]) => (
          <DropdownItem key={key}>{value}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
