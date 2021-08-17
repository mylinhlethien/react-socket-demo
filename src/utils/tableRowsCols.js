import React from "react"
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined"
import Chip from "@material-ui/core/Chip"

export const columns = [
  { id: "name", label: "Nom", minWidth: 170 },
  { id: "time", label: "Heure d'appel", minWidth: 50 },
  {
    id: "raison",
    label: "Raison",
    minWidth: 170,
    align: "right",
  },
  {
    id: "urgence",
    label: "Urgence",
    minWidth: 70,
    align: "right",
  },
  {
    id: "encours",
    label: "En cours",
    minWidth: 70,
    align: "right",
  },
]

function createData(name, time, raison, urgence, encours) {
  return { name, time, raison, urgence, encours }
}
export const rows = [
  createData(
    "Andrée Bouchut",
    "8:45",
    "Contrat habitation",
    <Chip
      size="small"
      label="10%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#00B871",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />,
    <ForumOutlinedIcon style={{ color: "blue" }} />
  ),
  createData(
    "Lida Dean",
    "8:45",
    "Frais de santé",
    <Chip
      size="small"
      label="64%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#FFD940",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Christel Beaujard",
    "8:47",
    "Assurance auto",
    <Chip
      size="small"
      label="14%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#00B871",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />,
    <ForumOutlinedIcon style={{ color: "blue" }} />
  ),
  createData(
    "My-Linh Le Thien",
    "8:53",
    "Contrat habitation",
    <Chip
      size="small"
      label="51%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#FFD940",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />,
    <ForumOutlinedIcon style={{ color: "blue" }} />
  ),
  createData(
    "Claire Salomon",
    "8:55",
    "Hospitalisation",
    <Chip
      size="small"
      label="34%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#00B871",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Ahmed Benchaouch",
    "8:58",
    "Assurance auto",
    <Chip
      size="small"
      label="92%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#FF3B3B",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Sylvie Rickaert",
    "9:01",
    "Contrat habitation",
    <Chip
      size="small"
      label="63%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#FFD940",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Antoine Dupont",
    "9:03",
    "Assurance santé",
    <Chip
      size="small"
      label="81%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#FF3B3B",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Evelyne Simon",
    "9:07",
    "Hospitalisation",
    <Chip
      size="small"
      label="14%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#00B871",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Fatima El Chaouih",
    "9:11",
    "Assurance auto",
    <Chip
      size="small"
      label="87%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#FF3B3B",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Olivier Rigot",
    "9:14",
    "Frais santé",
    <Chip
      size="small"
      label="10%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#00B871",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "France Delforge",
    "9:17",
    "Contrat habitation",
    <Chip
      size="small"
      label="67%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#FFD940",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Audrey Girard",
    "9:20",
    "Frais santé.",
    <Chip
      size="small"
      label="10%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#00B871",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Benjamain Leclerc",
    "9:22",
    "Frais santé",
    <Chip
      size="small"
      label="19%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#00B871",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Germaine Duchaux",
    "9:23",
    "Assurance auto",
    <Chip
      size="small"
      label="67%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#FFD940",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Jerome Tresset",
    "9:23",
    "Contrat habitation",
    <Chip
      size="small"
      label="89%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#FF3B3B",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Nathanael Piquot",
    "9:24",
    "Assurance santé",
    <Chip
      size="small"
      label="9%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#00B871",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Jean-Michel Clermont",
    "9:28",
    "Frais santé",
    <Chip
      size="small"
      label="80%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#FF3B3B",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Charles Bonniface",
    "9:29",
    "Contrat habitation",
    <Chip
      size="small"
      label="18%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#00B871",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
  createData(
    "Sigmund Cheslterchasse",
    "9:33",
    "Hospitalisation",
    <Chip
      size="small"
      label="55%"
      style={{
        color: "#323131",
        fontWeight: "bold",
        backgroundColor: "#FFD940",
        minWidth: "65px",
        minHeight: "28px",
      }}
    />
  ),
]
