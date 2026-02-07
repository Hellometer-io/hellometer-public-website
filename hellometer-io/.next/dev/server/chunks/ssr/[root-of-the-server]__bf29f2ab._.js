module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/products/product-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = {
    'drive-thru-timer': {
        headline: 'Optimize Your Drive-Thru Operations',
        description: 'Real-time vehicle tracking and performance analytics to reduce wait times and improve customer satisfaction at every touchpoint.',
        heroMedia: {
            type: 'video',
            src: '/videos/drivethru_monitor.mp4'
        },
        howItWorks: [
            {
                step: '1',
                title: 'Install Sensors',
                description: 'Hellometer cameras are installed at key points along your drive-thru lane. Setup is quick and non-disruptive to your daily operations.'
            },
            {
                step: '2',
                title: 'Track Vehicles Automatically',
                description: 'Our AI detects each vehicle as it enters the lane and tracks it through every station — menu board, payment window, and pickup.'
            },
            {
                step: '3',
                title: 'Get Real-Time Insights',
                description: 'View live dashboards showing current wait times, service speeds, and bottlenecks so your team can act immediately.'
            }
        ],
        sections: [
            {
                heading: 'Real-Time Vehicle Tracking',
                paragraphs: [
                    'Hellometer uses computer vision to detect and track every vehicle from the moment it enters your drive-thru lane. Each car is assigned a unique identifier and monitored through every station — order point, payment window, and pickup — giving you a precise, second-by-second timeline of each transaction.',
                    'Unlike legacy timer systems that rely on buried loops or pressure sensors, Hellometer works entirely through cameras. There is no road cutting, no sensor maintenance, and no recalibration. The system adapts to lane changes, dual-lane setups, and even stacked queues without missing a beat.',
                    'Managers see a live feed of current vehicles in the lane alongside their elapsed times. When a car stalls or a station falls behind, the dashboard highlights it instantly so your crew can respond before the backup grows.'
                ]
            },
            {
                heading: 'Performance Analytics',
                paragraphs: [
                    'Raw speed data only tells part of the story. Hellometer aggregates your timing data into clear dashboards that surface the patterns behind your numbers — which dayparts are slowest, where the bottleneck usually forms, and how individual shifts compare against each other.',
                    'Historical trend reports let you zoom out to weekly, monthly, and quarterly views. You can track the impact of menu changes, staffing adjustments, or operational experiments over time, giving you hard evidence to back every decision.',
                    'Custom alerts notify managers when service times exceed your targets. Whether it is a specific station falling behind or overall lane time creeping up, your team gets notified in real time through the dashboard, SMS, or email.'
                ]
            },
            {
                heading: 'Multi-Location Management',
                paragraphs: [
                    'For operators managing multiple restaurants, Hellometer provides a centralized view of every location on a single dashboard. Compare service times, throughput, and peak-hour performance side by side without logging into separate systems.',
                    'Location leaderboards create healthy competition between stores and make it easy to spot which teams are excelling and which need support. District and regional managers can drill into any location for a detailed breakdown without leaving the overview.',
                    'Benchmarking tools let you set organization-wide targets and track each store against them. When one location finds a process improvement that works, you can measure its effect and roll it out across your network with confidence.'
                ]
            }
        ],
        benefits: [
            {
                metric: '30%',
                description: 'Faster service times'
            },
            {
                metric: '95%',
                description: 'Vehicle detection accuracy'
            },
            {
                metric: '90 days',
                description: 'Typical ROI timeline'
            },
            {
                metric: '24/7',
                description: 'Continuous monitoring'
            }
        ],
        ctaText: 'See how Drive-Thru Timer can transform your operations and boost customer satisfaction.'
    },
    'lobby-timer': {
        headline: 'Perfect Your In-Restaurant Experience',
        description: 'Track door-to-dine service times and monitor guest wait times to ensure exceptional in-restaurant experiences every time.',
        heroMedia: {
            type: 'video',
            src: '/videos/video_monitor.mp4'
        },
        howItWorks: [
            {
                step: '1',
                title: 'Set Up Cameras',
                description: 'Cameras are positioned to cover your entrance, counter, and dining area. Installation takes hours, not days, with zero disruption to service.'
            },
            {
                step: '2',
                title: 'AI Detects Guests',
                description: 'Hellometer\'s vision system identifies when guests enter, approach the counter, receive their order, and sit down — all without any manual input.'
            },
            {
                step: '3',
                title: 'Monitor Service Flow',
                description: 'Live dashboards show your current guest count, average wait times, and service speed so managers can adjust staffing and processes on the fly.'
            }
        ],
        sections: [
            {
                heading: 'Guest Journey Tracking',
                paragraphs: [
                    'Hellometer tracks the complete in-restaurant guest journey from the moment they walk through the door. The system detects entry, measures time spent in the queue, records when the order is placed, and logs when food is received — building a full door-to-dine timeline for every visit.',
                    'This end-to-end visibility reveals where guests actually spend their time. You may discover that your kitchen is fast but the queue bottlenecks at the register, or that food is ready quickly but sits on the counter too long before being picked up. Without measuring each phase, these issues stay invisible.',
                    'All of this happens passively through camera-based detection. Guests are never tracked individually or identified — the system measures flow patterns and timing, not personal information, keeping the experience comfortable and private.'
                ]
            },
            {
                heading: 'Wait Time Optimization',
                paragraphs: [
                    'Long wait times are the number one driver of negative guest experiences in quick-service restaurants. Hellometer gives you real-time visibility into current wait times so your team can react before guests become frustrated.',
                    'Configurable threshold alerts notify managers when wait times exceed your standards. If the queue grows past a target length or average wait creeps above your benchmark, the system sends an immediate alert through the dashboard or mobile notification so you can open another register or redirect staff.',
                    'Over time, the data reveals staffing patterns that align with actual demand. You can see exactly when your rushes start and end, how long they last, and how many staff you need to keep wait times within your target — replacing guesswork with evidence-based scheduling.'
                ]
            },
            {
                heading: 'Service Quality Insights',
                paragraphs: [
                    'Hellometer compiles your lobby data into trend reports that show how service quality evolves day over day, week over week, and month over month. You can spot gradual improvements from process changes or catch slow regressions before they become systemic.',
                    'For multi-location operators, location comparison reports put every store on a level playing field. See which locations consistently deliver fast service and which ones struggle during specific dayparts, then share best practices across your organization.',
                    'Actionable weekly and monthly reports are automatically generated and delivered to your inbox. Each report highlights your biggest wins, areas that need attention, and specific recommendations based on the data — so you spend less time analyzing and more time improving.'
                ]
            }
        ],
        benefits: [
            {
                metric: '25%',
                description: 'Shorter wait times'
            },
            {
                metric: '40%',
                description: 'More consistent service'
            },
            {
                metric: 'Real-time',
                description: 'Guest flow visibility'
            },
            {
                metric: 'All locations',
                description: 'Benchmarked together'
            }
        ],
        ctaText: 'See how Lobby Timer can elevate your dining room service and guest satisfaction.'
    },
    'loss-prevention': {
        headline: 'Protect Your Business with Smart Monitoring',
        description: 'HD video monitoring with advanced analytics to protect your business, identify issues quickly, and reduce losses across all locations.',
        heroMedia: {
            type: 'video',
            src: '/videos/MONITOR_252.mp4'
        },
        howItWorks: [
            {
                step: '1',
                title: 'Deploy HD Cameras',
                description: 'High-definition cameras are installed at critical points — registers, prep areas, storage rooms, and entrances — for complete coverage.'
            },
            {
                step: '2',
                title: 'AI Monitors Activity',
                description: 'Intelligent analytics continuously watch for unusual patterns — register discrepancies, unauthorized access, and policy violations — without requiring constant human supervision.'
            },
            {
                step: '3',
                title: 'Get Instant Alerts',
                description: 'When the system detects an anomaly, managers receive immediate notifications with video clips so they can review and respond quickly.'
            }
        ],
        sections: [
            {
                heading: 'HD Video Monitoring',
                paragraphs: [
                    'Hellometer deploys high-definition cameras that capture every detail across your restaurant. From register interactions to back-of-house activity, the footage is sharp enough to read receipts, identify products, and review incidents with clarity that standard-definition systems cannot match.',
                    'All footage is stored securely in the cloud with configurable retention periods. You can access live feeds and historical recordings from any device — desktop, tablet, or phone — without installing dedicated monitoring software. Clips can be bookmarked, exported, and shared directly from the dashboard.',
                    'Camera health is monitored automatically. If a camera goes offline, loses connection, or has an obstructed view, the system alerts you immediately so coverage gaps are caught and resolved fast.'
                ]
            },
            {
                heading: 'Intelligent Analytics',
                paragraphs: [
                    'Hellometer goes beyond passive recording. The system uses pattern recognition to flag unusual activity — a register drawer opened without a transaction, repeated voided orders, or after-hours access to restricted areas. These alerts surface potential issues that would take hours to find by manually reviewing footage.',
                    'Anomaly detection learns your restaurant\'s normal patterns and highlights deviations. If transaction counts at a specific register drop unexpectedly or a storage area is accessed outside normal delivery windows, the system flags it for review with the relevant video clip attached.',
                    'Every flagged event is logged in an incident timeline with video evidence, timestamps, and contextual data. This makes internal investigations faster and provides clear documentation if issues need to be escalated or reported.'
                ]
            },
            {
                heading: 'Centralized Management',
                paragraphs: [
                    'Managing security across multiple locations is traditionally a logistical challenge. Hellometer consolidates every location into a single dashboard where regional managers can switch between stores, review alerts, and audit footage without separate logins or VPN connections.',
                    'Role-based access controls let you define exactly who can see what. Store managers see their own location, district managers see their group, and corporate security teams get the full picture. Permissions are managed centrally and updated instantly.',
                    'Complete audit trails track every user action in the system — who viewed footage, when clips were exported, and which alerts were acknowledged or dismissed. This accountability layer ensures your monitoring system is itself monitored for proper use.'
                ]
            }
        ],
        benefits: [
            {
                metric: '50%',
                description: 'Reduction in shrinkage'
            },
            {
                metric: '1080p',
                description: 'HD video clarity'
            },
            {
                metric: 'Instant',
                description: 'Alert notifications'
            },
            {
                metric: '100%',
                description: 'Audit trail coverage'
            }
        ],
        ctaText: 'See how Loss Prevention can protect your business and reduce operational losses.'
    },
    'kitchen-monitoring': {
        headline: 'Real-Time Visibility into Kitchen Operations',
        description: 'Monitor food preparation, ensure quality and safety standards, and maintain peak efficiency in your back of house operations.',
        heroMedia: {
            type: 'video',
            src: '/videos/make_line_kitchen.mp4'
        },
        howItWorks: [
            {
                step: '1',
                title: 'Install Kitchen Cameras',
                description: 'Cameras are positioned to cover prep stations, cooking lines, and plating areas. They are designed for kitchen environments — heat-resistant and easy to clean.'
            },
            {
                step: '2',
                title: 'AI Tracks Prep Workflow',
                description: 'The system monitors food preparation steps, tracks ticket times from order to plate, and identifies when stations are backed up or idle.'
            },
            {
                step: '3',
                title: 'Ensure Compliance',
                description: 'Automated monitoring helps verify that safety protocols are followed consistently — from food handling procedures to cleanliness standards.'
            }
        ],
        sections: [
            {
                heading: 'Food Prep Monitoring',
                paragraphs: [
                    'Hellometer gives you continuous visibility into your kitchen line. The system monitors each prep station in real time, tracking how orders move from screen to plate. You can see which stations are keeping pace and which ones are falling behind — without standing in the kitchen yourself.',
                    'Ticket time tracking breaks down the preparation process into stages. You can measure how long each phase takes on average, identify which menu items slow down the line, and spot the difference between a well-staffed shift and one that is struggling to keep up.',
                    'Historical data reveals prep patterns over time. You can compare weekday lunch rushes to weekend dinner service, measure the impact of a new menu item on line speed, and make staffing decisions based on actual kitchen throughput rather than estimates.'
                ]
            },
            {
                heading: 'Safety and Compliance',
                paragraphs: [
                    'Food safety is non-negotiable, but verifying compliance manually is time-consuming and inconsistent. Hellometer provides a continuous monitoring layer that helps ensure your team follows established protocols throughout every shift.',
                    'The system can help track food handling practices, monitor prep area cleanliness, and verify that temperature-sensitive processes are being followed. When the system detects a potential protocol deviation, it creates a timestamped record that managers can review and use for coaching.',
                    'For operators subject to regular health inspections, Hellometer builds an ongoing compliance record. Rather than scrambling to document practices before an audit, you have a continuous log of kitchen operations that demonstrates your commitment to food safety standards.'
                ]
            },
            {
                heading: 'Workflow Optimization',
                paragraphs: [
                    'Kitchen efficiency directly impacts service speed, food quality, and labor costs. Hellometer identifies workflow bottlenecks by analyzing how orders flow through your kitchen, showing you exactly where time is lost and where capacity is underutilized.',
                    'Labor efficiency reports correlate staffing levels with kitchen output. You can see the relationship between the number of staff on the line and the throughput they produce, helping you find the sweet spot where adding another person improves speed versus where it just adds cost.',
                    'Prep forecasting uses historical order data to predict upcoming demand. Knowing that your Friday lunch rush typically hits at 11:45 and peaks with a specific menu mix lets your team prep smarter, reduce waste, and have the right ingredients ready before the rush begins.'
                ]
            }
        ],
        benefits: [
            {
                metric: '99%',
                description: 'Compliance rate'
            },
            {
                metric: '20%',
                description: 'Waste reduction'
            },
            {
                metric: 'Real-time',
                description: 'Kitchen alerts'
            },
            {
                metric: 'Full',
                description: 'Kitchen visibility'
            }
        ],
        ctaText: 'See how Kitchen Monitoring can transform your back of house operations.'
    }
};
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPageTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
function ProductPageTemplate({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-6xl mx-auto px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-32 pb-20 md:pt-40 md:pb-44",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "h1 font-inter text-slate-100 mb-12 font-bold text-center",
                                    children: data.headline
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row items-center gap-8 md:gap-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:w-1/2 text-center md:text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl text-slate-400 mb-8",
                                                    children: data.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                                    lineNumber: 21,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "btn text-white bg-blue-600 hover:bg-blue-700 group",
                                                        href: "/schedule-demo",
                                                        children: [
                                                            "Schedule a Demo ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                                                lineNumber: 26,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                                        lineNumber: 25,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:w-1/2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg shadow-2xl overflow-hidden",
                                                children: data.heroMedia.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    className: "w-full block",
                                                    autoPlay: true,
                                                    muted: true,
                                                    loop: true,
                                                    playsInline: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                        src: data.heroMedia.src,
                                                        type: "video/mp4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: data.heroMedia.src,
                                                    alt: data.headline,
                                                    width: 896,
                                                    height: 504,
                                                    className: "w-full block",
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-12 md:py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl mx-auto text-center pb-12 md:pb-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "h2 font-dm-sans",
                                    children: "How It Works"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:max-w-none",
                                children: data.howItWorks.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-lg font-bold mb-4",
                                                children: step.step
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "h4 font-dm-sans mb-2",
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-slate-500",
                                                children: step.description
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, step.step, true, {
                                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            data.sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: index % 2 === 1 ? 'bg-slate-50' : '',
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-12 md:py-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "h2 font-dm-sans mb-6",
                                        children: section.heading
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    section.paragraphs.map((paragraph, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-slate-500 mb-4 last:mb-0",
                                            children: paragraph
                                        }, i, false, {
                                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                }, section.heading, false, {
                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-slate-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-12 md:py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-8 md:grid-cols-4 text-center",
                            children: data.benefits.map((benefit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl font-bold text-blue-400 mb-2",
                                            children: benefit.metric
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-300",
                                            children: benefit.description
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, benefit.description, true, {
                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-12 md:py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative max-w-3xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "h2 font-dm-sans mb-4",
                                    children: "Ready to Get Started?"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-slate-500 mb-8",
                                    children: data.ctaText
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        className: "btn text-white bg-blue-600 hover:bg-blue-700",
                                        href: "/schedule-demo",
                                        children: "Schedule a Demo"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/products/kitchen-monitoring/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KitchenMonitoringPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/node_modules/.pnpm/next@16.0.10_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$app$2f$products$2f$product$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/products/product-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$product$2d$page$2d$template$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/components/product-page-template.tsx [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: 'Kitchen Monitoring - Hellometer',
    description: 'Monitor food preparation, ensure quality and safety standards, and maintain peak efficiency in your back of house.'
};
function KitchenMonitoringPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$components$2f$product$2d$page$2d$template$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$repos$2f$hellometer_repos$2f$hellometer$2d$public$2d$website$2f$hellometer$2d$io$2f$app$2f$products$2f$product$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"]['kitchen-monitoring']
    }, void 0, false, {
        fileName: "[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/products/kitchen-monitoring/page.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
}),
"[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/products/kitchen-monitoring/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/repos/hellometer_repos/hellometer-public-website/hellometer-io/app/products/kitchen-monitoring/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bf29f2ab._.js.map