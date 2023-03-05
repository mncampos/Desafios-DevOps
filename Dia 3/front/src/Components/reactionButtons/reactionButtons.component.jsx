import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export function ReactionButtons({reaction, onReactionClick}){
    return(
        <ToggleButtonGroup value={reaction} exclusive onChange={onReactionClick}>
        <ToggleButton sx={{ color: "white", "&.Mui-selected": {color: "green"} }} value="curtir" >
          <ThumbUpIcon
            sx={{ height: 32, width: 32, pointerEvents: "none" }}
          />
        </ToggleButton>
        <ToggleButton sx={{ color: "white", "&.Mui-selected": {color: "red"}   } } value="descurtir">
          <ThumbDownIcon
            sx={{ height: 32, width: 32, pointerEvents: "none" }}
          />
        </ToggleButton>
      </ToggleButtonGroup>
    )
}