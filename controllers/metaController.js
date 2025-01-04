import os from "os";
import pkg from "../package.json" with { type: "json" };

export const renderIndex = async (req, res) => {
    const appInfo = {
        nodeVersion: process.version,
        expressVersion: pkg.dependencies.express.replace("^", ""),
        osName: `${os.type()} ${os.release()}`,
        uptime: `${Math.floor(process.uptime())} seconds`,
    };

    res.render("index", { appInfo });
};
