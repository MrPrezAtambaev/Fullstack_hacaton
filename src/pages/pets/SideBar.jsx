// import { useState } from "react";
// import { usePets } from "../../context/petsContext";
// import FilterProduct from './PetsFilter';

// const Sidebar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const { fetchByParams } = usePets();

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     fetchByParams("search", e.target.value);
//   };

//   const handleCategory = (category) => {
//     fetchByParams("category", category);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search pets"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <div>
//       <FilterProduct />  
      
//         <button onClick={() => handleCategory("dogs")}>Dogs</button>
//         <button onClick={() => handleCategory("cats")}>Cats</button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
