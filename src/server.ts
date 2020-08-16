import express from 'express'
import routes from "./routes";
import cors from "cors"
import {errorServer} from "./middleware/errorServer";
import {notFound} from "./middleware/notFound";

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())

app.use(notFound)
app.use(errorServer)

app.listen(3333)