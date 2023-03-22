import React, { useState, useEffect } from "react";
import { usePets } from "@/context/petsContext";
import PetCard from "./PetCard";
import cats from "../../../styles/cats.module.scss";
import pet from "../../../styles/petlist.module.scss";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";

const PetList = () => {
  const router = useRouter();
  const { getPets, pets, pages } = usePets();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const currentPage = parseInt(router.query.page || "1", 10);
    setPage(currentPage);
    getPets(currentPage);
  }, [router.query]);

  const handleChangePage = (e, value) => {
    e.preventDefault();
    setPage(value);
    router.push(`/pets/PetList/?page=${value}`);
  };

  return (
    <div className={cats.cd_banner}>
      <div className={pet.card_container}>
        {pets && pets.results ? (
          pets.results.map((item) => <PetCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <Pagination
        count={pages}
        page={page}
        onChange={handleChangePage}
        style={{ color: "black" }}
        renderItem={(item) => (
          <Link href={`/pets/PetList/?page=${item.page}`} passHref>
            <PaginationItem
              component="p"
              {...item}
              onClick={(e) => handleChangePage(e, item.page)}
            />
          </Link>
        )}
      />
    </div>
  );
};

export default PetList;
