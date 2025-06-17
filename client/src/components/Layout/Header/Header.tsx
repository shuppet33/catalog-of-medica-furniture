import {AppBar, Container, IconButton, Toolbar, Typography} from "@mui/material";



export function Header({children}) {
    return(
        <AppBar position="static">
            <Container>
                <Toolbar>
                    {children}
                </Toolbar>
            </Container>
        </AppBar>
    )
}