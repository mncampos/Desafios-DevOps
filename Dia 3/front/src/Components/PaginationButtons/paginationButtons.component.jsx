import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ButtonGroup, IconButton } from "@mui/material";

export function PaginationButtons({ pageNumber, handleNext, handlePrevious }) {
  return (
    <ButtonGroup>
      <IconButton onClick={handlePrevious}>
        <ArrowBackIosNewIcon color="primary" sx={{ width: 64, height: 64 }} />
        <h1 className="pageNum">{pageNumber}</h1>
      </IconButton>
      <IconButton onClick={handleNext}>
        <ArrowForwardIosIcon color="primary" sx={{ width: 64, height: 64 }} />
      </IconButton>
    </ButtonGroup>
  );
}
