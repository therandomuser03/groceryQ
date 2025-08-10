import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/theme-toggle";

export default function Header() {
  return (
    <div className="border-b-2 flex bg-background justify-between px-42 py-2">
      <div>
        <h3 className="text-2xl font-bold text-green-600">GroceryQ</h3>
      </div>
      <div className="inline-flex gap-2">
        <div>
          <Button>Login</Button>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
