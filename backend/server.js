import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import "dotenv/config";


connectDB().then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on the PORT:${PORT}`);
    });
}).catch((error) => {
    console.log(`Failed to connect DB. ${error}`);
    process.exit(1);
});

