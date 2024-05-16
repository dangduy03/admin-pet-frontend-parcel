// Trong Search.js
import React, { useEffect } from "react";

function Search() {
  useEffect(() => {
    const handleSearch = () => {
      const input = document.getElementById("myInput");
      const filter = input.value.toLowerCase();
      const rows = document.querySelectorAll("#myTable tr");
      rows.forEach(function (row) {
        const text = row.textContent.toLowerCase();
        if (text.indexOf(filter) > -1) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    };

    document.getElementById("myInput").addEventListener("keyup", handleSearch);

    return () => {
      document.getElementById("myInput").removeEventListener("keyup", handleSearch);
    };
  }, []);

  return null;
}

export default Search;
