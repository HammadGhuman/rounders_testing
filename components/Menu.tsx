import MenuItem from "@/components/MenuItem";
function Menu({ selected,menuItems}: { selected: string,menuItems:string[] }) {
    // Separate the selected category items and other items
    const selectedCategoryItems = menuItems.filter((item) => item === selected);
    const otherCategoryItems = menuItems.filter((item) => item !== selected);
  
    return (
      <div className="flex justify-around items-center mt-32">
        <div className="grid grid-cols-3 gap-56">
          {/* Display the selected category items */}
          {selectedCategoryItems.map((category, index) => (
            <MenuItem key={index} category={category} />
          ))}
  
          {/* Display the other items */}
          {otherCategoryItems.map((category, index) => (
            <MenuItem key={index + selectedCategoryItems.length} category={category} />
          ))}
        </div>
      </div>
    );
  }
  
export default Menu;