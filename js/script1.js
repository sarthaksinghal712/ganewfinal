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
                window.assignedid1 = Math.floor(Math.random() * 1E5) + "a"
                let parentele = document.createElement("div")
                window.assignedid = Math.floor(Math.random() * 1E5) + "b"
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
    document.getElementById(assignedid1).addEventListener("click", function () {
        $(".sme").hide();
        $("#loa").show()
        $("#chh").text(title)
        $("#imm").attr("src", image)
        $(".cooo").text(content)
    });
    document.getElementById("cloo").addEventListener("click", function () {
        $(".sme").show();
        $("#loa").hide()
    });
}