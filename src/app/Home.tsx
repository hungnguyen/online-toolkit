import { Typography } from "@mui/material";
import Layout from "./components/Layout";

export default function Home(){
    return <>
        <Layout>
            <Typography variant="h4" component="h1">
                Welcome to online-toolkit
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                This is an online-toolkit that including some usefull functions. You will love to use it.
            </Typography>
        </Layout>
    </>
}