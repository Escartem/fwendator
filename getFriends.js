// get user discord token
async function gt() {
    console.log("⚙️ Intializing...");
    return (webpackChunkdiscord_app.push([
        [''], {},
        e => {
            m = [];
            for (let c in e.c) m.push(e.c[c])
        }
    ]), m).find(m => m?.exports?.default?.getToken !== void 0).exports.default.getToken()
};

// fetch function to access api
async function f(u, t) {
    return await fetch(u, {
        headers: {
            "Authorization": t
        }
    }).then(r => r.json()).then(j => {
        return j
    })
};

// get all user friends
async function lf(t) {
    console.log("✉️ Fetching friends...");
    return Object.values(await f("https://discord.com/api/v9/users/@me/relationships", t)).map(e => e.user)
};

const tm = ms => new Promise(res => setTimeout(res, ms))

// iterate over every friend and create the final json data
async function gl(a, t) {
    [fp,m,s]=[{},Math.floor(a.length%3600/60),Math.floor(a.length%60)];
    console.log(`⏱ This will take about ${(m>0?m+(m==1?" minute and ":" minutes and "):"")+(s>0?s+(s==1?" second":" seconds"):"")}`)
    for (const e in a) {
        fp[a[e]["id"]] = {"name": `${a[e]["username"]}#${a[e]["discriminator"]}`,"mutual": Object.values(await f(`https://discord.com/api/v9/users/${a[e]["id"]}/relationships`, t)).map(e => e.id)};
        console.log(`📃 Parsing friends... [${parseInt(e)+1}/${a.length}]`);
        await tm(1000)
    };
    return fp
};

// clear page and show result
function up(d) {
    document.head.innerHTML = "";
    document.body.innerHTML = "";
    document.body.appendChild(Object.assign(document.createElement("h1"), {
        innerHTML: "Your friends data ✨"
    }));
    document.body.appendChild(Object.assign(document.createElement("textarea"), {
        value: JSON.stringify(d),
        readOnly: true,
        style: `width: 100%; height: 400px;`
    }));
    document.body.appendChild(Object.assign(document.createElement("button"), {
        innerHTML: "📄 Download data",
        onclick: function() {
            url = URL.createObjectURL(new Blob([JSON.stringify(d)], {
                type: "application/json"
            }));
            Object.assign(document.createElement("a"), {
                href: url,
                download: `friends-${new Date().toISOString().replace(/[:T]/g,'-').slice(0,19).replaceAll("-","")}.json`
            }).click();
            URL.revokeObjectURL(url)
        }
    }))
};

// main function
async function m() {
    if (window.location.host == "discord.com") {
        var tt = await gt();
        var ff = await lf(tt);
        var dd = await gl(ff, tt);
        up(dd);
        console.log("✨ Done")
    } else {
        alert("Not in discord website !")
    }
};

m();