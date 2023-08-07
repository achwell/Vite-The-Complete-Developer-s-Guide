export default function myPlugin() {
    return {
        name: "my-plugin",
        transform(src: any, id: string) {
            if (id.substring(id.length - 4) === ".svg") {
                console.log("\n\x1B[31mFound an SVG! " + id + `\x1B[0m`)
            }
        }
    }
}
