import app from "./src/app.ts";
import 'dotenv/config';


app.listen(process.env.PORT, () => {
    console.log(`server is running on PORT=${process.env.PORT}`)
})