import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../assets/constant";
import SearchBar from "./SearchBar";

const Navbar = () => (
    <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{ position: "sticky", background: "green", top: 0, justifyContent: "space-between" }}
    >
        <Link 
            to="/"
            style={{ display:'flex', alignItems: "center", fontWeight: "bold", color: "#fdb602" }}
        >
            <img src={logo} alt="logo" height={45} />  StarTube 
        </Link>
        <SearchBar />
    </Stack>
  )

export default Navbar;