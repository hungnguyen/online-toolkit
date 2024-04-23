import { Grid } from "@mui/material"
import LeftMenu from "./LeftMenu"

interface LayoutProps{
    children: React.ReactNode
}
export default function Layout({children}: LayoutProps){
    return(
        <>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <LeftMenu />
                </Grid>
                <Grid item md={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}