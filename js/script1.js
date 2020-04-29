// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhwkC8sNb2d18od8ckeI0WSt5unfx1VUY",
    authDomain: "glocalamitians.firebaseapp.com",
    databaseURL: "https://glocalamitians.firebaseio.com",
    projectId: "glocalamitians",
    storageBucket: "glocalamitians.appspot.com",
    messagingSenderId: "318956515493",
    appId: "1:318956515493:web:5b3a2540ccf37ee47e1d4c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login() {
    function newLoginHappened(user) {
        if (user) {
            app(user);

        } else {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    }
    firebase.auth().onAuthStateChanged(newLoginHappened);
}

function app(user) {
    console.log("Login Successful")
    $(".lgf").hide();
    fetchData()
}
var db = firebase.database();

function fetchData() {
    let dataa = document.getElementById("ided")
    var rootref = db.ref();
    rootref.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                var name = childData.name;
                var cl = childData.cl;
                var section = childData.section;
                var type = childData.type;
                var content = childData.content;
                var title = childData.title
                if (childData.image.length === 0) {
                    var image = "https://via.placeholder.com/300x150.png?text=Glocal+Amitians"
                } else {
                    var image = childData.image
                }
                assignedid1 = Math.floor(Math.random() * 1E5) + "a"
                let parentele = document.createElement("div")
                assignedid = Math.floor(Math.random() * 1E5) + "b"
                let ch = document.createElement("div")
                ch.classList.add("card-header", "bg-primary", "text-light")
                cf = document.createElement("div")
                cf.classList.add("card-footer")
                tn = document.createTextNode(title)
                ch.appendChild(tn)
                parentele.classList.add("col-12", "col-md-6", "col-sm-12", "col-lg-3",
                    "text-center", "p-1")
                la = document.createElement("div")
                im = document.createElement("img")
                im.src = image
                tb = document.createElement("button")
                tnn = document.createTextNode("Read More")
                tb.appendChild(tnn)
                tb.classList.add("btn", "btn-primary", "btn-md")
                tb.setAttribute("id", assignedid1)
                tx = document.createElement("div")
                txt = document.createTextNode(content)
                tx.classList.add("card-text", "text-justify", "p-3", "bg-light")
                tx.innerHTML = content.toString().slice(0, 500);
                im.classList.add("img-fluid")
                cf.appendChild(tb)
                im.style.objectFit = "cover"
                parentele.appendChild(ch)
                parentele.appendChild(im)
                parentele.appendChild(tx)
                parentele.appendChild(cf)
                dataa.appendChild(parentele)
                doThis(name, cl, section, content, title, image, assignedid, assignedid1)
            });
        });
}


function doThis(name, cl, section, content, title, image, assignedid, assignedid1) {
    assignedid = assignedid + ""
    assignedid1 = assignedid1 + ""
    modal = document.createElement("div")
    modal.id = assignedid
    $(modal).attr("role", "dialog")
    $(modal).attr("class", "modal fade")

    modaldialoge = document.createElement("div")
    modaldialoge.classList.add("modal-dialog")

    modalcontent = document.createElement("div")
    modalcontent.classList.add("modal-content")

    modalheader = document.createElement("div")
    modalheader.classList.add("modal-header")

    btn = document.createElement("button")
    btn.classList.add("close")
    btn.setAttribute("data-dismiss", assignedid)
    btn.setAttribute("value", "&times;")

    titt = document.createElement("h4")
    titt.classList.add("modal-title")
    titt.innerHTML = title

    modalheader.appendChild(btn)
    modalheader.appendChild(titt)

    modalcontent.appendChild(modalheader)

    mb = document.createElement("div")
    con = document.createElement("p")
    mb.classList.add("modal-body")

    con.innerHTML = content
    mb.appendChild(con)
    modalcontent.appendChild(mb)

    mf = document.createElement("div")
    mf.classList.add("modal-footer")
    fb = document.createElement("button")
    fb.setAttribute("data-dismiss", assignedid)
    fb.setAttribute("value", "close")

    fb.classList.add("btn", "btn-default")

    mf.appendChild(fb)

    modalcontent.appendChild(mf)
    modaldialoge.appendChild(modalcontent)
    modal.appendChild(modaldialoge)

    tt = document.getElementById(assignedid1)
    tt.setAttribute("data-toggle", "modal")
    ii = "#" + assignedid
    tt.setAttribute("data-target", ii)

    document.getElementById("coo").appendChild(modal)
}