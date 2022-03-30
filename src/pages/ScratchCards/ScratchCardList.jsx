/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import { httpService } from "../../services/services";
import { green, red, blue } from "@mui/material/colors";

export default function ScratchCardList() {
  const [scratchCards, setScratchCards] = useState([]);

  const [cardData, setCardData] = useState({ title: "", color: "" });

  const search = useLocation().search;

  const usedBy = new URLSearchParams(search).get("usedBy");

  const GetScratchCards = async () => {
    const path = usedBy
      ? `viewScratchCards?usedBy=${usedBy}`
      : "viewScratchCards";

    const res = await httpService.get(path);
    setScratchCards(res.data.scratchCards);
  };

  useEffect(() => {
    GetScratchCards();
    if (usedBy) {
      if (usedBy === "null") {
        setCardData({ title: "AVAILABLE SCRATCHCARDS", color: blue[700] });
      }
      if (usedBy === "notNull") {
        setCardData({ title: "USED SCRATCHCARDS", color: red[700] });
      }
    } else setCardData({ title: "TOTAL SCRATCHCARDS", color: green[700] });
  }, []);

  const columns = [
    { name: "PIN", selector: (row) => row.pin.toUpperCase() },
    {
      name: "Card used by",
      selector: (row) =>
        row.usedBy ? row.usedBy.regNumber.toUpperCase() : "-",
    },
    { name: "Limit", selector: (row) => row.limit },
  ];
  return (
    <div>
      <div className="mt-3">
        <Container className="p-4 shadow-sm border rounded-3">
          <Typography variant="h5" color={cardData.color}>
            {cardData.title}
          </Typography>
          <DataTable
            columns={columns}
            data={scratchCards}
            pagination
            title={scratchCards.length}
          />
        </Container>
      </div>
    </div>
  );
}
