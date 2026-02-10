module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/actions/contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60c00829982096106d6bcfdce74c63faff62f19052":"submitContactForm"},"",""] */ __turbopack_context__.s([
    "submitContactForm",
    ()=>submitContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$resend$40$6$2e$9$2e$1$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/resend@6.9.1/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$resend$40$6$2e$9$2e$1$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
async function submitContactForm(_prevState, formData) {
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();
    if (!name || !email || !message) {
        return {
            success: false,
            error: 'All fields are required.'
        };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {
            success: false,
            error: 'Please enter a valid email address.'
        };
    }
    try {
        await resend.emails.send({
            from: 'Hellometer Contact <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL,
            subject: `Contact form: ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        });
        return {
            success: true
        };
    } catch  {
        return {
            success: false,
            error: 'Failed to send message. Please try again later.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitContactForm
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitContactForm, "60c00829982096106d6bcfdce74c63faff62f19052", null);
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/actions/contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/actions/contact.ts [app-rsc] (ecmascript)");
;
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/actions/contact.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "60c00829982096106d6bcfdce74c63faff62f19052",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitContactForm"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/actions/contact.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$app$2f$actions$2f$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/actions/contact.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a448f4ca._.js.map