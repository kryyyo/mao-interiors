import { Button } from "@mui/material"

export default function CommonButton({props}) {
    return (
        <Button 
            sx={{
                color: props.color,
                border: 1,
                borderColor: props.color,
                borderRadius: 6,
                padding: 1,
                paddingX: 6,
                width: "100%",
            }}
            onClick={props.onClick}
        >
            {props.name}
        </Button>
    )
}