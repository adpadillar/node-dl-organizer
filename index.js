import { readdir } from "fs/promises"
import { lstatSync, existsSync, mkdirSync, rename } from "fs"
import path from "path"

const DOWNLOADS_FOLDER = path.join(process.env.HOME, "Downloads")

const GROUPS = {
    images: ["webp", "png", "jpeg", "jpg", "svg", "heic"],
    office: ["pptx", "docx", "xlsx", "xls", "doc", "pdf"],
    media: ["mp4", "mp3", "m4a", "mov", "webm"],
    code: ["json", "cpp", "txt", "html", "rmd", "mlapp", "mlx"],
    other: [""]
}

const prepare = async () => {
    Object.keys(GROUPS).forEach(k => {
        const k_path = path.join(DOWNLOADS_FOLDER, k)
        if (!existsSync(k_path)) {
            mkdirSync(k_path)
        }
    })
}

const main = async () => {
    const files = await readdir(DOWNLOADS_FOLDER)

    files.forEach(f => {
        const f_path = path.join(DOWNLOADS_FOLDER, f)
        const stats = lstatSync(f_path)

        if (stats.isDirectory()) return;

        const ext = f.split(".")[f.split(".").length - 1].toLowerCase();
        let extFolderPath

        Object.keys(GROUPS).forEach((k) => {
            const v = GROUPS[k]
            v.forEach(e => {
                if (ext === e) {
                    extFolderPath = path.join(DOWNLOADS_FOLDER, k, ext)
                }
            })
        })

        extFolderPath = extFolderPath ? extFolderPath : path.join(DOWNLOADS_FOLDER, "other", ext);

        if (!existsSync(extFolderPath)) {
            mkdirSync(extFolderPath)
        } 

        rename(f_path, path.join(extFolderPath, f), (err) => {
            if (err) throw err
        })
    })
}

prepare();
main();
