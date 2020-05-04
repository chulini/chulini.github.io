let isMobile = false;
let touch = document.getElementById("home-pointer");
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}

Zfont.init(Zdog);

const colorGray = '#555';
const colorRed = '#f55';
const colorBlue = '#5bd';
const colorCream = '#fee';
const colorYellow = '#fc0';

const illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    zoom: .9,
    translate: { y: 50 }
});

let font = new Zdog.Font({
    src: '../fonts/emoji.ttf'
});

let illoBody = new Zdog.Anchor({
    addTo: illo,
    translate: { x: 0, y: -30, z: 0 },
});

let textAnchor = new Zdog.Anchor({
    addTo: illoBody,
    translate: { z: -50, y: -220 }
    //translate: { z:-50 ,y: -10 }
});

let textBg = new Zdog.Ellipse({
    addTo: textAnchor,
    width: 130,
    height: 70,
    stroke: 20,
    color: colorYellow,
    cornerRadius: 20,
    fill: true,
});

new Zdog.Ellipse({
    addTo: textAnchor,
    width: 45,
    height: 30,
    stroke: 1,
    color: colorYellow,
    cornerRadius: 20,
    fill: true,
    translate: { x: 30, y: 70 }
});

new Zdog.Ellipse({
    addTo: textAnchor,
    width: 23,
    height: 15,
    stroke: 1,
    color: colorYellow,
    cornerRadius: 20,
    fill: true,
    translate: { x: 10, y: 100 }
});


let thinkingIcons = ['⏳', '🕹️', '⚡', '💾', '📡', '💿', '📺', '⚙️','☄️','💥','🔥', '💕'];//👍👎✊⚡

let texts = [];
for (let i = 0; i < thinkingIcons.length; i++) {
    let newText = new Zdog.Text({
        addTo: textAnchor,
        font: font,
        value: thinkingIcons[i],
        textAlign: 'center',
        textBaseline: 'middle',
        color: colorRed,
        fontSize: 55,
        stroke: 1,
        translate: { y: -4, z: 20 },
        fill: true
    })
    texts.push(newText);
}
let showingIconIndex = 1;
function setIcon(iconIndex) {
    for (let i = 0; i < texts.length; i++)
        texts[i].translate.z = (iconIndex == i) ? 20 : -20;
}

let thinking = setInterval(() => {
    showingIconIndex++;
    if (isMobile && showingIconIndex == 4) {
        touch.style.display = "inherit";
    }
    showingIconIndex = showingIconIndex % (texts.length - 1);
    setIcon(showingIconIndex);

}, 1000);

// Body Layer
let zBodyBack = new Zdog.Group({
    addTo: illoBody,
    translate: { z: -10 }
});
let zBodyFront = new Zdog.Group({
    addTo: illoBody,
    translate: { z: -10 }
});
// Body
for (let i = 0; i < 5; i++) {
    let c = (i == 0) ? colorRed : colorBlue;
    let group = (i == 0) ? zBodyFront : zBodyBack;
    new Zdog.RoundedRect({
        addTo: group,
        width: 140 - i,
        height: 180 - i,
        translate: { z: -20 * i },
        stroke: 20,
        color: c,
        cornerRadius: 20,
        fill: true,
    });
}

// Screen Layer
let zScreen = new Zdog.Group({
    addTo: illoBody,
    translate: { z: 20 }
});
const screen = new Zdog.RoundedRect({
    addTo: zScreen,
    width: 120,
    height: 80,
    stroke: 5,
    cornerRadius: 20,
    translate: { y: -40 },
    color: colorYellow,
    fill: true,
});
// Buttons
let buttonA = new Zdog.Shape({
    addTo: zScreen,
    translate: { x: 20, y: 60 },
    stroke: 20,
    color: colorCream,
});
let buttonB = new Zdog.Shape({
    addTo: zScreen,
    translate: { x: 50, y: 30 },
    stroke: 20,
    color: colorCream,
});

// Axis
let hAxis = new Zdog.Shape({
    addTo: zScreen,
    path: [
        { x: -20, y: 0 },
        { x: 20, y: 0 },
    ],
    stroke: 20,
    color: colorYellow,
    translate: { x: -30, y: 40 }
});
let vAxis = new Zdog.Shape({
    addTo: zScreen,
    path: [
        { x: 0, y: 20 },
        { x: 0, y: -20 },
    ],
    stroke: 20,
    color: colorYellow,
    translate: { x: -30, y: 40 }
});

// Face Layer
let zFace = new Zdog.Group({
    addTo: illoBody,
    translate: { z: 55 }
});
// Eyes
let eye = new Zdog.Shape({
    addTo: zFace,
    translate: { x: 35, y: -40 },
    stroke: 40,
    color: colorGray,
});
eye.copy({
    translate: { x: -35, y: -40 },
});
// Mouth
let mouthAnchor = new Zdog.Anchor({
    addTo: zFace,
    translate: { y: -40 }
});
let mouth = new Zdog.Shape({
    addTo: mouthAnchor,
    path: [
        { x: -10, y: 0 },   // start
        {
            bezier: [
                { x: -10, y: 15 + 5 }, // start control point
                { x: 10, y: 15 + 5 }, // end control point
                { x: 10, y: 0 }, // end point
            ]
        },
    ],

    closed: false,
    fill: false,
    stroke: 3,
    color: colorGray
});

// Face Details Layer
let zEyeDetails = new Zdog.Group({
    addTo: illoBody,
    translate: { z: 60 }
});
let eyeShine = new Zdog.Shape({
    addTo: zEyeDetails,
    path: [
        { x: -10, y: 0 },   // A
        {
            bezier: [
                { x: -10, y: -5 }, // B
                { x: -5, y: -10 }, // C
                { x: 0, y: -10 }, // D
            ]
        },
    ],
    translate: { x: -35, y: -40 },
    stroke: 10,
    closed: false,
    color: colorCream,
});
eyeShine.copy({
    translate: { x: 35, y: -40 },
});
let eyeShadow = new Zdog.Shape({
    addTo: zEyeDetails,
    path: [
        { x: 0 + 3, y: 10 + 3 },   // A
        {
            bezier: [
                { x: 5 + 3, y: 10 + 3 }, // B
                { x: 10 + 3, y: 5 + 3 }, // C
                { x: 10 + 3, y: 0 + 3 }, // D
            ]
        },
    ],
    translate: { x: -35, y: -40 },
    stroke: 3,
    closed: false,
    color: colorBlue,
});
eyeShadow.copy({
    translate: { x: 35, y: -40 },
});

let lArmAnchor = new Zdog.Anchor({
    addTo: illoBody,
    translate: { x: -100, y: -20, z: -70 },

});

let lArm = new Zdog.Shape({
    addTo: lArmAnchor,
    path: [
        { x: 0, y: 0 }, //A
        {
            bezier: [
                { x: -20, y: 0 }, // B
                { x: -60, y: 40 }, // C
                { x: -60, y: 100 }, // D
            ]
        },
    ],
    stroke: 20,
    closed: false,
    color: colorRed,
});

let rArmAnchor = new Zdog.Anchor({
    addTo: illoBody,
    translate: { x: 100, y: -20, z: -70 },
});
let rArm = new Zdog.Shape({
    addTo: rArmAnchor,
    path: [
        { x: 0, y: 0 }, //A
        {
            bezier: [
                { x: 20, y: 0 }, // B
                { x: 60, y: 40 }, // C
                { x: 60, y: 100 }, // D
            ]
        },
    ],
    stroke: 20,
    closed: false,
    color: colorRed,
});

let lLegAnchor = new Zdog.Anchor({
    addTo: illo,
    translate: { x: 30, y: 90, z: -70 },
});
let lLeg = new Zdog.Shape({
    addTo: lLegAnchor,
    path: [
        { x: 0, y: 0 }, //A
        {
            bezier: [
                { y: 15, z: 10 }, // B
                { y: 45, z: 10 }, // C
                { y: 60 }, // D
            ]
        }
    ],
    translate: { z: 20 },
    stroke: 20,
    closed: false,
    color: colorRed,
});

let rLegAnchor = new Zdog.Anchor({
    addTo: illo,
    translate: { x: -30, y: 90, z: -70 },
});
let rLeg = new Zdog.Shape({
    addTo: rLegAnchor,
    path: [
        { x: 0, y: 0 }, //A
        {
            bezier: [
                { y: 15, z: 10 }, // B
                { y: 45, z: 10 }, // C
                { y: 60 }, // D
            ]
        }
    ],
    translate: { z: 20 },
    stroke: 20,
    closed: false,
    color: colorRed,
});

let shadow = new Zdog.Ellipse({
    addTo: illo,
    width: 160,
    height: 120,
    translate: { y: 160, z: -500 },
    rotate: { x: .20 * Zdog.TAU },
    stroke: 20,
    color: '#ddd',
    fill: true,
});

let targetRot = null;
function animate() {
    const t = ((new Date()).getTime() / 1000);
    const nSinR = .5 * Math.sin((111.11 + t) * 4);
    let tri = 1 - Math.abs(((t * 2.5) % 2) - 1);
    if (targetRot != null) {
        if (thinking != null) {
            clearInterval(thinking);
            setIcon(texts.length - 1);
            if(isMobile)
                touch.style.display = 'none';
        }
        lArmAnchor.rotate.x = Zdog.lerp(lArmAnchor.rotate.x, .5 * Zdog.TAU, .08);
        mouth.rotate.x = Zdog.lerp(mouth.rotate.x, 0, .06);

        lArmAnchor.rotate.z = -.07 * Zdog.TAU + Zdog.easeInOut(tri, 3) * Zdog.TAU / 16;
        lLeg.rotate.y = Zdog.lerp(illoBody.rotate.y, targetRot.y * 8, .2);
        rLeg.rotate.y = Zdog.lerp(illoBody.rotate.y, targetRot.y * 8, .2);
        illoBody.rotate.y = Zdog.lerp(illoBody.rotate.y, targetRot.y, .2);
        illoBody.rotate.x = Zdog.lerp(illoBody.rotate.x, targetRot.x, .2);
        shadow.translate.x = illoBody.rotate.y * 70;
    } else {
        lArmAnchor.rotate = {
            x: 0,
            z: -.07 * Zdog.TAU - (nSinR * Zdog.TAU / 128)
        }

        mouth.rotate.x = Zdog.TAU * .25;
    }
    rArmAnchor.rotate.z = .07 * Zdog.TAU + nSinR * Zdog.TAU / 128;

    illo.updateRenderGraph();

    requestAnimationFrame(animate);
}

Zdog.waitForFonts().then(() => {
    animate();
    setIcon(0);
});

(function () {
    document.onmousemove = handleMouseMove;

    function handleMouseMove(event) {
        var eventDoc, doc, body;
        event = event || window.event;
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0);
        }
        const w = window.innerWidth;
        const h = window.innerHeight;
        mouseX = (-1.0 + 2.0 * (event.pageX / w)) * .9;
        mouseY = (-1.0 + 2.0 * (event.pageY / h)) * .7;
        targetRot = { x: -mouseY * .5, y: -mouseX * .5 }

        
    }
})();