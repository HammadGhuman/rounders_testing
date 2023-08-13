import MenuItem from "@/components/MenuItem";
function Menu({
  selected,
  menuItems,
}: {
  selected: string;
  menuItems: string[];
}) {
  // Separate the selected category items and other items

  return (
    <div className="flex justify-around items-center mt-32">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-32">
        {menuItems.map((category, index) => (
          <MenuItem key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
