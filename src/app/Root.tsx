import { Grid } from "@mui/material"
import LeftMenu from "./components/LeftMenu"
import { Outlet, useOutlet } from "react-router-dom"
import Home from "./Home";


export default function Root(){
    const outlet = useOutlet();
    return(
        <>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <LeftMenu />
                </Grid>
                <Grid item md={9}>
                    {outlet ? <Outlet /> : <Home />}
                </Grid>
            </Grid>
        </>
    )
}