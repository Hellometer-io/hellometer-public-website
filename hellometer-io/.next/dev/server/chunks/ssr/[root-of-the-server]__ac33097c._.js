module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlogPosts",
    ()=>getBlogPosts
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
function parseFrontmatter(fileContent) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);
    const frontMatterBlock = match[1];
    const content = fileContent.replace(frontmatterRegex, "").trim();
    const frontMatterLines = frontMatterBlock.trim().split("\n");
    const metadata = {};
    frontMatterLines.forEach((line)=>{
        const [key, ...valueArr] = line.split(": ");
        let value = valueArr.join(": ").trim();
        value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
        metadata[key.trim()] = value;
    });
    return {
        metadata: metadata,
        content
    };
}
function getMDXFiles(dir) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(dir).filter((file)=>__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(file) === ".mdx");
}
function readMDXFile(filePath) {
    const rawContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
}
function getMDXData(dir) {
    const mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file)=>{
        const { metadata, content } = readMDXFile(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dir, file));
        const slug = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(file, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(file));
        return {
            metadata,
            slug,
            content
        };
    });
}
function getBlogPosts() {
    return getMDXData(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "content/blog"));
}
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/post-date.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js [app-rsc] (ecmascript) <locals>");
;
;
function PostDate({ dateString }) {
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseISO"])(dateString);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
        dateTime: dateString,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'MMMM d, yyyy')
    }, void 0, false, {
        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/post-date.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/link.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function PostLink({ href, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        ...props,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/link.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
function PostImage({ alt, caption, size, ...props }) {
    const classes = size === 'lg' ? 'lg:-ml-32 lg:-mr-32' : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: classes,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                className: "w-full",
                ...props,
                alt: alt
            }, void 0, false, {
                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/image.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "text-sm text-center text-gray-500 mt-3",
                children: caption
            }, void 0, false, {
                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/image.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/image.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomMDX",
    ()=>CustomMDX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$2d$mdx$2d$remote$2d$client$40$1$2e$1$2e$4_$40$types$2b$react$40$19$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_unified$40$11$2e$0$2e$5$2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$2f$dist$2f$rsc$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next-mdx-remote-client@1.1.4_@types+react@19.0.8_react-dom@19.2.3_react@19.2.3__react@19.2.3_unified@11.0.5/node_modules/next-mdx-remote-client/dist/rsc/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$2d$mdx$2d$remote$2d$client$40$1$2e$1$2e$4_$40$types$2b$react$40$19$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_unified$40$11$2e$0$2e$5$2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$2f$dist$2f$rsc$2f$MDXRemote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next-mdx-remote-client@1.1.4_@types+react@19.0.8_react-dom@19.2.3_react@19.2.3__react@19.2.3_unified@11.0.5/node_modules/next-mdx-remote-client/dist/rsc/MDXRemote.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$mdx$2f$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/link.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$mdx$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$rehype$2d$pretty$2d$code$40$0$2e$14$2e$1_shiki$40$3$2e$22$2e$0$2f$node_modules$2f$rehype$2d$pretty$2d$code$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/rehype-pretty-code@0.14.1_shiki@3.22.0/node_modules/rehype-pretty-code/dist/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const transformToSlug = (input)=>{
    return input.toLowerCase().trim().split(" ").join("-").split("&").join("-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");
};
const generateHeading = (headingLevel)=>{
    return ({ children })=>{
        const textContent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Children.toArray(children).join("");
        const slug = transformToSlug(textContent);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(`h${headingLevel}`, {
            id: slug
        }, [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("a", {
                href: `#${slug}`,
                key: `link-${slug}`,
                className: "anchor-link"
            }),
            textContent
        ]);
    };
};
const mdxComponents = {
    h1: generateHeading(1),
    h2: generateHeading(2),
    h3: generateHeading(3),
    h4: generateHeading(4),
    Link: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$mdx$2f$link$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    Image: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$mdx$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
};
function CustomMDX(props) {
    const rehypePrettyCodeOptions = {
        theme: "one-dark-pro",
        keepBackground: false,
        onVisitLine (node) {
            if (node.children.length === 0) {
                node.children = [
                    {
                        type: "text",
                        value: " "
                    }
                ];
            }
        },
        onVisitHighlightedLine (node) {
            node.properties.className.push("line--highlighted");
        },
        onVisitHighlightedWord (node) {
            node.properties.className = [
                "word--highlighted"
            ];
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$2d$mdx$2d$remote$2d$client$40$1$2e$1$2e$4_$40$types$2b$react$40$19$2e$0$2e$8_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_unified$40$11$2e$0$2e$5$2f$node_modules$2f$next$2d$mdx$2d$remote$2d$client$2f$dist$2f$rsc$2f$MDXRemote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MDXRemote"], {
        ...props,
        components: {
            ...mdxComponents,
            ...props.components || {}
        },
        options: {
            mdxOptions: {
                rehypePlugins: [
                    [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$rehype$2d$pretty$2d$code$40$0$2e$14$2e$1_shiki$40$3$2e$22$2e$0$2f$node_modules$2f$rehype$2d$pretty$2d$code$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
                        rehypePrettyCodeOptions
                    ]
                ]
            }
        }
    }, void 0, false, {
        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/mdx.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SinglePost,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$mdx$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$post$2d$date$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/post-date.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$mdx$2f$mdx$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/mdx/mdx.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$mdx$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPosts"])().map((post)=>({
            slug: post.slug
        }));
}
async function generateMetadata(props) {
    const params = await props.params;
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$mdx$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPosts"])().find((p)=>p.slug === params.slug);
    if (!post) return;
    return {
        title: `${post.metadata.title} - Hellometer Blog`,
        description: post.metadata.summary
    };
}
async function SinglePost(props) {
    const params = await props.params;
    const post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$mdx$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPosts"])().find((p)=>p.slug === params.slug);
    if (!post) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-slate-900 pointer-events-none -z-10 h-[28rem]",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-6xl mx-auto px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-32 md:pt-40 pb-16 md:pb-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            className: "inline-flex items-center font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out group",
                                            href: "/blog",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tracking-normal group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1",
                                                    children: "←"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 19
                                                }, this),
                                                " Back to Blog"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "h2 font-dm-sans text-slate-100 mb-6",
                                        "data-aos": "fade-up",
                                        children: post.metadata.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": "100",
                                        children: [
                                            post.metadata.authorImg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                className: "rounded-full shrink-0 mr-3",
                                                src: post.metadata.authorImg,
                                                width: 32,
                                                height: 32,
                                                alt: post.metadata.author || ''
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-slate-200",
                                                        children: post.metadata.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-600",
                                                        children: " · "
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$post$2d$date$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            dateString: post.metadata.publishedAt
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 52
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            post.metadata.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "-mt-4 mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            className: "w-full rounded-lg",
                            src: post.metadata.image,
                            width: 768,
                            height: 432,
                            priority: true,
                            alt: post.metadata.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                            lineNumber: 69,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 md:py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-lg text-lg text-slate-500 max-w-none prose-headings:font-dm-sans prose-headings:text-navy prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-navy prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-navy prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit prose-hr:my-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$mdx$2f$mdx$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CustomMDX"], {
                                source: post.content
                            }, void 0, false, {
                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac33097c._.js.map